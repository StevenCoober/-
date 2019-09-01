<template>
  <div>
    <el-form :model="editTableData" :rules="rules" ref="editTableData">
          <el-form-item  v-show="!editTableDataNew" label="配置id" :label-width="formLabelWidth" prop="id">
              <el-input placeholder="请输入配置id" type="number" :disabled="true" v-model="editTableData.id"></el-input>
          </el-form-item>
          <el-form-item label="配置说明" :label-width="formLabelWidth" prop="desc">
              <el-input placeholder="请输入配置说明" v-model="editTableData.desc"></el-input>
          </el-form-item>
          <el-form-item label="项关键字" :label-width="formLabelWidth" prop="key">
              <el-input placeholder="请输入项关键字" v-model="editTableData.key"></el-input>
          </el-form-item>
          <el-form-item label="项关键词" :label-width="formLabelWidth" prop="value">
            <el-input placeholder="请输入项关键词" :autosize="{minRow:3, maxRow:10}" type="textarea" v-model="editTableData.value"></el-input>
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
  name: "DataFormEditConfig",
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
          { required: true, message: "请输入配置id", trigger: "blur" },
        ],
        desc: [
          { required: true, message: "请输入配置说明", trigger: "blur" },
        ],
        key: [
          { required: true, message: "请输入项关键字", trigger: "blur" },
        ],
        value: [
          { required: true, message: "请输入项关键词", trigger: "blur" },
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
        id: 0, // 配置id
        desc: "", // 配置说明
        key: "", // 项关键字
        value: "", // 项关键词
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
      xxevent.emit("EditDialogShow_Config", false); // 新增或编辑界面显示
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
        url: "/admin/config/store",
        data: data,
        method: "post"
      });

      if (res.errno == 0) {
        if (this.editTableDataNew) {
          this.$message.success("添加成功");
        } else {
          this.$message.success("更新成功");
        }
        xxevent.emit("EditDialogShow_Config", false); // 新增或编辑界面显示
        xxevent.emit("SendUpdateTableItem_Config"); // 更新查询数据项
      }

    },

    

    /////////////////////////////////////////////////////

    // 新增数据
    onNewObj_Config() {
      this.editTableDataNew = true;
      this.InitNewData();
    },

    // 编辑数据
    onEditObj_Config(row) {
      this.editTableDataNew = false;
      this.editTableData = row;
    },
   }
    
};
</script>
