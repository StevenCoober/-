<template>
  <div>
    <el-form :model="editTableData" :rules="rules" ref="editTableData">
          <el-form-item  v-show="!editTableDataNew" label="教练预约订单id" :label-width="formLabelWidth" prop="id">
              <el-input placeholder="请输入教练预约订单id" type="number" :disabled="true" v-model="editTableData.id"></el-input>
          </el-form-item>
          <el-form-item label="预定的会员用户id" :label-width="formLabelWidth" prop="user_id">
              <el-input placeholder="请输入预定的会员用户id" type="number" v-model="editTableData.user_id"></el-input>
          </el-form-item>
<!--           <el-form-item label="教练id" :label-width="formLabelWidth" prop="coach_id">
              <el-input placeholder="请输入教练id" type="number" v-model="editTableData.coach_id"></el-input>
          </el-form-item> -->
          <el-form-item label="教练" :label-width="formLabelWidth" prop="coach_id">
              <el-select @change="onCoachOptionsChange" v-model="editTableData.coach_id" class="filter-item" >
                <el-option
                  v-for="(item, idx) in coachOptions"
                  :key="idx"
                  :label="item"
                  :value="idx"
                />
              </el-select>
          </el-form-item>
<!--           <el-form-item label="预约课程id" :label-width="formLabelWidth" prop="skill_id">
              <el-input placeholder="请输入预约课程id" type="number" v-model="editTableData.skill_id"></el-input>
          </el-form-item> -->
          <el-form-item label="预约课程名称" :label-width="formLabelWidth" prop="skill_id">
              <el-select v-model="editTableData.skill_id" class="filter-item">
                <el-option
                  v-for="(item, idx) in skillOptions"
                  :key="idx"
                  :label="item"
                  :value="idx"
                />
              </el-select>
          </el-form-item>
          <el-form-item label="订单状态" :label-width="formLabelWidth" prop="order_state">
              <el-input :disabled="true"  placeholder="请输入订单状态//0未开始1进行中2已完成" type="number" v-model="editTableData.order_state"></el-input>
          </el-form-item>
          <el-form-item label="预约结果状态" :label-width="formLabelWidth" prop="orde_result_state">
              <el-input placeholder="请输入预约结果状态" :disabled="true"  type="number" v-model="editTableData.orde_result_state"></el-input>
          </el-form-item>
          <el-form-item label="预约开始时间 " :label-width="formLabelWidth" prop="reverse_btime">
            <el-date-picker
              v-model="editTableData.reverse_btime"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="请选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="预约结束时间 " :label-width="formLabelWidth" prop="reverse_etime">
            <el-date-picker
              v-model="editTableData.reverse_etime"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="请选择日期时间"
            ></el-date-picker>
          </el-form-item>
    </el-form>
    <div slot="footer" style="text-align: right;" class="dialog-footer">
      <el-button @click="OnClickCancleForm">取 消</el-button>
      <el-button type="primary" @click="OnClickOkForm">确 定</el-button>
    </div>
    <!--上传控件-->
    <image-cropper
        v-show="imagecropperShow"
        :width="200"
        :height="200"
        :key="imagecropperKey"
        @close="imagecropperShow = false"
        @crop-upload-success="OnCropSuccess"
        url="admin/upload/avatarUpload"
        lang-type="cn"
      />
  </div>
</template>
<script>
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";
import xxevent from "./xxevent";
export default {
  name: "DataFormEditCoach_Reserve",
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore
  },

  // 创建的时候
  async created() {
    xxevent.bindtarget(this);
    await this.FetchCoachOptions();
  },

  // 销毁的时候
  async destroyed() {
   xxevent.unbindtarget(this);
  },

  data() {
    return {
      tinymceDialogFormVisible: false,
      tinymceEditText: "",
      tinymceEditTextKey: "",
      editTableDataNew: false,
      editTableData: {},
      imagecropperKey: 0, //上传图片的key
      formLabelWidth: "120px", // 数据框的尺寸
      imagecropperShow: false, //上传控件是否显示
      coachOptions: {},
      skillOptions: {},
      rules: {
        id: [
          { required: true, message: "请输入教练预约订单id", trigger: "blur" },
        ],
        user_id: [
          { required: true, message: "请输入预定的会员用户id", trigger: "blur" },
        ],
        coach_id: [
          { required: true, message: "请输入教练id", trigger: "blur" },
        ],
        skill_id: [
          { required: true, message: "请输入预约课程id", trigger: "blur" },
        ],
        order_state: [
          { required: true, message: "请输入订单状态//0未开始1进行中2已完成", trigger: "blur" },
        ],
        orde_result_state: [
          { required: true, message: "请输入预约结果状态", trigger: "blur" },
        ],
        reverse_btime: [
          { required: true, message: "请输入预约开始时间 ", trigger: "blur" },
        ],
        reverse_etime: [
          { required: true, message: "请输入预约结束时间 ", trigger: "blur" },
        ],
      }
    };
  },

   methods: {
    pushKeyForEditTableDataTinymce(key) {
      this.tinymceEditText = this.editTableData[key];
      this.tinymceEditTextKey = key;
    },
    popKeyForEditTableDataTinymce() {
      let key = this.tinymceEditTextKey;
      this.editTableData[key] = this.tinymceEditText;
      this.tinymceEditTextKey = "";
    },

    /**
    * @brief 点击上传的按钮
    */
    OnClickAvatar() {
      this.imagecropperShow = true;
    },

    InitNewData() {
      this.editTableData = {
        id: 0, // 教练预约订单id
        user_id: 0, // 预定的会员用户id
        coach_id: null, // 教练id
        skill_id: null, // 预约课程id
        order_state: 0, // 订单状态//0未开始1进行中2已完成
        orde_result_state: 0, // 预约结果状态
        reverse_btime: new Date(), // 预约开始时间 
        reverse_etime: new Date(), // 预约结束时间 
      };

      this.editTableDataNew = true;
    },

    // TODO More Image
    OnCropSuccess(resData) {
      this.imagecropperShow = false;
      this.editTableData.head_img = process.env.BASE_API + resData.fileUrl;
      this.imagecropperKey += 1;
    },

    /**
     * @brief 编辑取消
     */
    OnClickCancleForm() {
      xxevent.emit("EditDialogShow_Coach_Reserve", false); // 新增或编辑界面显示
    },
    
    /**
     * @brief 确定编辑或新增完毕
     *
     * @returns:
     */
    async OnClickOkForm() {
       let is_validate = await (() => {
        return new Promise((resolve, reject) => {
          this.$refs['editTableData'].validate(valid => {
            if (valid) {
              resolve(true);
            } else {
              resolve(false);
            }
          });
        });
      })();
      if (!is_validate) return;
      this.dialogFormVisible = false;

      let data = this.editTableData;
      data.id = this.editTableDataNew ? 0 : this.editTableData.id;
      data.is_show = 1;
      let res = await this.request({
        url: "/admin/coach_reserve/store",
        data: data,
        method: "post"
      });

      if (res.errno == 0) {
        if (this.editTableDataNew) {
          this.$message.success("添加成功");
        } else {
          this.$message.success("更新成功");
        }
        xxevent.emit("EditDialogShow_Coach_Reserve", false); // 新增或编辑界面显示
        xxevent.emit("SendUpdateTableItem_Coach_Reserve"); // 更新查询数据项
        xxevent.emit("SendUpdateItem_Coach_Reserve", res.data); // 更新单个数据项
      }

    },

    async onCoachOptionsChange(val) {
      let res = await this.request({
        url: "/admin/coach/info",
        data: {
          id: val
        },
        method: "post"
      });
      if (res["data"] != null) {
          let resData = res["data"];
          const data = resData; // 人员
          const id = data.id; // 教练id
          const user_id = data.user_id; // 微信用户id
          const name = data.name; // 姓名
          const mobile = data.mobile; // 联系电话
          const birthday = data.birthday; // 生日
          const address = data.address; // 联系地址
          const summary = data.summary; // 简介
          const skill = data.skill; // 特长
          const head_img = data.head_img; // 头像
          const views = data.views; // 浏览量
          const paixu = data.paixu; // 排序
          const is_star = data.is_star; // 是否是明星教练
          this.skillOptions = skill.split(',');
      }
    },
    
    async FetchCoachOptions() {
      let res = await this.request({
        url: "/admin/coach/all",
        method: "post"
      });
      if (res["data"] != null) {
          let resData = res["data"];
          let coachOptions = {};
          for (let i = 0; i < resData.length; i++) {
            const data = resData[i]; // 人员
            const id = data.id; // 教练id
            const user_id = data.user_id; // 微信用户id
            const name = data.name; // 姓名
            const mobile = data.mobile; // 联系电话
            const birthday = data.birthday; // 生日
            const address = data.address; // 联系地址
            const summary = data.summary; // 简介
            const skill = data.skill; // 特长
            const head_img = data.head_img; // 头像
            const views = data.views; // 浏览量
            const paixu = data.paixu; // 排序
            const is_star = data.is_star; // 是否是明星教练
            coachOptions[id] = name;
          }
          this.coachOptions = coachOptions;
      }
    },

    /////////////////////////////////////////////////////

    // 新增数据
    onNewObj_Coach_Reserve(obj) {
      this.editTableDataNew = true;
      this.InitNewData();
      if (obj != null) {
        for (let objKey in obj) {
          let objItem = obj[objKey];
          if(objItem != null) this.editTableData[objKey] = objItem;
        };
      }
    },

    // 编辑数据
    async onEditObj_Coach_Reserve(row) {
      this.editTableDataNew = false;
      this.editTableData = row;

      await this.onCoachOptionsChange(this.editTableData.coach_id);
      this.editTableData.coach_id += '';
     
    },
   }
    
};
</script>
