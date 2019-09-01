<template>
  <div>
    <el-form :model="editTableData" :rules="rules" ref="editTableData">
          <el-form-item  v-show="!editTableDataNew" label="教练id" :label-width="formLabelWidth" prop="id">
              <el-input placeholder="请输入教练id" type="number" :disabled="true" v-model="editTableData.id"></el-input>
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
            <el-date-picker
              v-model="editTableData.birthday"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="请选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="联系地址" :label-width="formLabelWidth" prop="address">
              <el-input placeholder="请输入联系地址" v-model="editTableData.address"></el-input>
          </el-form-item>
          <el-form-item label="简介" :label-width="formLabelWidth" prop="summary">
            <el-input placeholder="请输入简介" :autosize="{minRow:3, maxRow:10}" type="textarea" v-model="editTableData.summary"></el-input>
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
<!--           <el-form-item label="浏览量" :label-width="formLabelWidth" prop="views">
              <el-input placeholder="请输入浏览量" type="number" v-model="editTableData.views"></el-input>
          </el-form-item> -->
          <el-form-item label="排序" :label-width="formLabelWidth" prop="paixu">
              <el-input placeholder="请输入排序" type="number" v-model="editTableData.paixu"></el-input>
          </el-form-item>
<!--           <el-form-item label="是否是明星教练" :label-width="formLabelWidth" prop="is_star">
              <el-input placeholder="请输入是否是明星教练" type="number" v-model="editTableData.is_star"></el-input>
          </el-form-item> -->
          <el-form-item label="是否是明星教练" :label-width="formLabelWidth" prop="is_star">
              <el-select v-model="editTableData.is_star" class="filter-item">
                <el-option
                  v-for="(item, idx) in ['否', '是']"
                  :key="idx"
                  :label="item"
                  :value="idx"
                />
              </el-select>
          </el-form-item>

          <el-form-item label="性别" :label-width="formLabelWidth" prop="gender">
              <!-- <el-input placeholder="请输入性别" type="number" v-model="editTableData.gender"></el-input> -->
              <el-select v-model="editTableData.gender" class="filter-item">
                <el-option
                  v-for="(item, idx) in genderOptions"
                  :key="idx"
                  :label="item"
                  :value="idx"
                />
              </el-select>
          </el-form-item>
    </el-form>
    <div slot="footer" style="text-align: right;" class="dialog-footer">
      <el-button @click="OnClickCancleForm">取 消</el-button>
      <el-button type="primary" @click="OnClickOkForm">确 定</el-button>
    </div>
      <el-dialog title="教练" :modal-append-to-body="false"  :visible.sync="tinymceDialogFormVisible" width="100%">
        <template>
          <div class="components-container">
            <div>
              <tinymce  :visible.sync="tinymceDialogFormVisible" v-model="tinymceEditText"/>
            </div>
            <div class="editor-content" v-html="tinymceEditText"/>
          </div>
        </template>
        <div slot="footer" class="dialog-footer">
          <el-button @click="tinymceDialogFormVisible = false;">取 消</el-button>
          <el-button type="primary" @click="tinymceDialogFormVisible = false; popKeyForEditTableDataTinymce();">确 定</el-button>
        </div>
      </el-dialog>

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
  name: "DataFormEditCoach",
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore
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
      tinymceDialogFormVisible: false,
      tinymceEditText: "",
      tinymceEditTextKey: "",
      editTableDataNew: false,
      editTableData: {},
      imagecropperKey: 0, //上传图片的key
      formLabelWidth: "120px", // 数据框的尺寸
      imagecropperShow: false, //上传控件是否显示
      genderOptions: ["无性别", "男", "女"],
      rules: {
        id: [
          { required: true, message: "请输入教练id", trigger: "blur" },
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
        summary: [
          { required: true, message: "请输入简介", trigger: "blur" },
        ],
        
        skill: [
          { required: true, message: "请输入特长", trigger: "blur" },
        ],
        head_img: [
          { required: true, message: "请选择头像图片", trigger: "blur" },
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
        gender: [
          { required: true, message: "请输入性别", trigger: "blur" },
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
        id: 0, // 教练id
        user_id: 0, // 微信用户id
        name: "", // 姓名
        mobile: "", // 联系电话
        birthday: new Date(), // 生日
        address: "", // 联系地址
        summary: "", // 简介
        skill: "", // 特长
        head_img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555575698912&di=4504a218f051995cb6ebba9967b61098&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fc75c10385343fbf26f28e948bc7eca8065388f51.jpg", // 头像
        views: 0, // 浏览量
        paixu: 0, // 排序
        is_star: 0, // 是否是明星教练
        gender: null, // 性别
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
      xxevent.emit("EditDialogShow_Coach", false); // 新增或编辑界面显示
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
        url: "/admin/coach/store",
        data: data,
        method: "post"
      });

      if (res.errno == 0) {
        if (this.editTableDataNew) {
          this.$message.success("添加成功");
        } else {
          this.$message.success("更新成功");
        }
        xxevent.emit("EditDialogShow_Coach", false); // 新增或编辑界面显示
        xxevent.emit("SendUpdateTableItem_Coach"); // 更新查询数据项
        xxevent.emit("SendUpdateItem_Coach", res.data); // 更新单个数据项
      }

    },

    

    /////////////////////////////////////////////////////

    // 新增数据
    onNewObj_Coach(obj) {
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
    onEditObj_Coach(row) {
      this.editTableDataNew = false;
      this.editTableData = row;
    },
   }
    
};
</script>
