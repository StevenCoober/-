<template>
  <div>
    <el-form :model="editTableData" :rules="rules" ref="editTableData">
          <el-form-item  v-show="!editTableDataNew" label="教练申请请求id" :label-width="formLabelWidth" prop="id">
              <el-input placeholder="请输入教练申请请求id" type="number" :disabled="true" v-model="editTableData.id"></el-input>
          </el-form-item>
          <el-form-item label="微信用户id" :label-width="formLabelWidth" prop="user_id">
              <el-input placeholder="请输入微信用户id" type="number" v-model="editTableData.user_id"></el-input>
          </el-form-item>
          <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
              <el-input placeholder="请输入姓名" v-model="editTableData.name"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" :label-width="formLabelWidth" prop="mobile">
              <el-input placeholder="请输入联系电话" v-model="editTableData.mobile"></el-input>
          </el-form-item>
          <el-form-item label="生日" :label-width="formLabelWidth" prop="birthday">
              <el-input placeholder="请输入生日" v-model="editTableData.birthday"></el-input>
          </el-form-item>
          <el-form-item label="联系地址" :label-width="formLabelWidth" prop="address">
              <el-input placeholder="请输入联系地址" v-model="editTableData.address"></el-input>
          </el-form-item>
          <el-form-item label="价格" :label-width="formLabelWidth" prop="price">
              <el-input placeholder="请输入价格" type="number" v-model="editTableData.price"></el-input>
          </el-form-item>
          <el-form-item label="简介" :label-width="formLabelWidth" prop="summary">
            <el-input placeholder="请输入简介" :autosize="{minRow:3, maxRow:10}" type="textarea" v-model="editTableData.summary"></el-input>
          </el-form-item>
          <el-form-item label="带课量" :label-width="formLabelWidth" prop="num">
              <el-input placeholder="请输入带课量" type="number" v-model="editTableData.num"></el-input>
          </el-form-item>
          <el-form-item label="特长" :label-width="formLabelWidth" prop="skill">
              <el-input placeholder="请输入特长" v-model="editTableData.skill"></el-input>
          </el-form-item>
          <el-form-item label="头像" :label-width="formLabelWidth" prop="head_img">
            <div class="component-item">
              <pan-thumb :image="editTableData.head_img || ''"></pan-thumb>
            </div>
            <el-button
              type="primary"
              icon="upload"
              style="margin-left:30px"
              @click="OnClickAvatar"
            >上传头像</el-button>
          </el-form-item>
          <el-form-item label="收入" :label-width="formLabelWidth" prop="income">
              <el-input placeholder="请输入收入" type="number" v-model="editTableData.income"></el-input>
          </el-form-item>
          <el-form-item label="浏览量" :label-width="formLabelWidth" prop="views">
              <el-input placeholder="请输入浏览量" type="number" v-model="editTableData.views"></el-input>
          </el-form-item>
          <el-form-item label="排序" :label-width="formLabelWidth" prop="paixu">
              <el-input placeholder="请输入排序" type="number" v-model="editTableData.paixu"></el-input>
          </el-form-item>
          <el-form-item label="是否是明星教练" :label-width="formLabelWidth" prop="is_star">
              <el-input placeholder="请输入是否是明星教练" type="number" v-model="editTableData.is_star"></el-input>
          </el-form-item>
          <el-form-item label="请求时间" :label-width="formLabelWidth" prop="request_time">
            <el-date-picker
              v-model="editTableData.request_time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="请选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="请求状态//0未处理1已经处理" :label-width="formLabelWidth" prop="state">
              <el-input placeholder="请输入请求状态//0未处理1已经处理" type="number" v-model="editTableData.state"></el-input>
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
  name: "DataFormEditCoach_Request",
  components: {
    ImageCropper,
    PanThumb,
    Tinymce
  },

  // 创建的时候
  async created() {
    xxevent.bindtarget(this);
  },

  // 销毁的时候
  async destroyed() {
   xxevent.unbindtarget(this);
  },

  data() {
    return {
      editTableDataNew: false,
      editTableData: {},
      imagecropperKey: 0, //上传图片的key
      formLabelWidth: "120px", // 数据框的尺寸
      imagecropperShow: false, //上传控件是否显示
      rules: {
        id: [
          { required: true, message: "请输入教练申请请求id", trigger: "blur" },
        ],
        user_id: [
          { required: true, message: "请输入微信用户id", trigger: "blur" },
        ],
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
        ],
        mobile: [
          { required: true, message: "请输入联系电话", trigger: "blur" },
        ],
        birthday: [
          { required: true, message: "请输入生日", trigger: "blur" },
        ],
        address: [
          { required: true, message: "请输入联系地址", trigger: "blur" },
        ],
        price: [
          { required: true, message: "请输入价格", trigger: "blur" },
        ],
        summary: [
          { required: true, message: "请输入简介", trigger: "blur" },
        ],
        num: [
          { required: true, message: "请输入带课量", trigger: "blur" },
        ],
        skill: [
          { required: true, message: "请输入特长", trigger: "blur" },
        ],
        head_img: [
          { required: true, message: "请选择头像图片", trigger: "blur" },
        ],
        income: [
          { required: true, message: "请输入收入", trigger: "blur" },
        ],
        views: [
          { required: true, message: "请输入浏览量", trigger: "blur" },
        ],
        paixu: [
          { required: true, message: "请输入排序", trigger: "blur" },
        ],
        is_star: [
          { required: true, message: "请输入是否是明星教练", trigger: "blur" },
        ],
        request_time: [
          { required: true, message: "请输入请求时间", trigger: "blur" },
        ],
        state: [
          { required: true, message: "请输入请求状态//0未处理1已经处理", trigger: "blur" },
        ],
      }
    };
  },

   methods: {
      /**
     * @brief 点击上传的按钮
     */
    OnClickAvatar() {
      this.imagecropperShow = true;
    },

    InitNewData() {
      this.editTableData = {
        id: 0, // 教练申请请求id
        user_id: 0, // 微信用户id
        name: "", // 姓名
        mobile: "", // 联系电话
        birthday: "", // 生日
        address: "", // 联系地址
        price: 0, // 价格
        summary: "", // 简介
        num: 0, // 带课量
        skill: "", // 特长
        head_img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555575698912&di=4504a218f051995cb6ebba9967b61098&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fc75c10385343fbf26f28e948bc7eca8065388f51.jpg", // 头像
        income: 0, // 收入
        views: 0, // 浏览量
        paixu: 0, // 排序
        is_star: 0, // 是否是明星教练
        request_time: new Date(), // 请求时间
        state: 0, // 请求状态//0未处理1已经处理
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
      xxevent.emit("EditDialogShow_Coach_Request", false); // 新增或编辑界面显示
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
        url: "/admin/coach_request/store",
        data: data,
        method: "post"
      });

      if (res.errno == 0) {
        if (this.editTableDataNew) {
          this.$message.success("添加成功");
        } else {
          this.$message.success("更新成功");
        }
        xxevent.emit("EditDialogShow_Coach_Request", false); // 新增或编辑界面显示
        xxevent.emit("SendUpdateTableItem_Coach_Request"); // 更新查询数据项
      }

    },

    

    /////////////////////////////////////////////////////

    // 新增数据
    onNewObj_Coach_Request() {
      this.editTableDataNew = true;
      this.InitNewData();
    },

    // 编辑数据
    onEditObj_Coach_Request(row) {
      this.editTableDataNew = false;
      this.editTableData = row;
    },
   }
    
};
</script>
