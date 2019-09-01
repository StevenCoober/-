<template>
  <div>
    <el-form :model="editTableData" :rules="rules" ref="editTableData">
          <el-form-item  v-show="!editTableDataNew" label="会员卡类型id" :label-width="formLabelWidth" prop="id">
              <el-input placeholder="请输入会员卡类型id" type="number" :disabled="true" v-model="editTableData.id"></el-input>
          </el-form-item>
          <el-form-item label="会员卡名称" :label-width="formLabelWidth" prop="card_name">
              <el-input placeholder="请输入会员卡名称" v-model="editTableData.card_name"></el-input>
          </el-form-item>
          <el-form-item label="会员卡图片(480x270)" :label-width="formLabelWidth" prop="card_img">
              <image-cropper-more :single="true" v-model="editTableData.card_img" :disabled="false"></image-cropper-more>
          </el-form-item>
          <el-form-item label="会员卡描述" :label-width="formLabelWidth" prop="card_desc">
            <el-input placeholder="请输入会员卡描述" :autosize="{minRow:3, maxRow:10}" type="textarea" v-model="editTableData.card_desc"></el-input>
          </el-form-item>
          <el-form-item label="会员卡详细描述" :label-width="formLabelWidth" prop="card_detail">
            <el-input placeholder="请输入会员卡详细描述" :autosize="{minRow:3, maxRow:10}" type="textarea" v-model="editTableData.card_detail"></el-input>
          </el-form-item>
          <!-- <el-form-item label="卡种类型 // 0时间卡1次数卡" :label-width="formLabelWidth" prop="limit_type">
              <el-input placeholder="请输入卡种类型 // 0时间卡1次数卡" type="number" v-model="editTableData.limit_type"></el-input>
          </el-form-item> -->
          <el-form-item label="卡种类型" :label-width="formLabelWidth" prop="limit_type">
              <el-select v-model="editTableData.limit_type" class="filter-item">
                <el-option
                  v-for="(item, idx) in ['时间卡', '计次卡']"
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
      <el-dialog title="会员卡类型" :modal-append-to-body="false"  :visible.sync="tinymceDialogFormVisible" width="100%">
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
  name: "DataFormEditMember_Card_Type",
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
      rules: {
        id: [
          { required: true, message: "请输入会员卡类型id", trigger: "blur" },
        ],
        card_name: [
          { required: true, message: "请输入会员卡名称", trigger: "blur" },
        ],
        card_img: [
          { required: true, message: "请选择会员卡图片图片", trigger: "blur" },
          { type: 'string', required: true, message: '请选择会员卡图片图片', trigger: 'change' }
        ],
        card_desc: [
          { required: true, message: "请输入会员卡描述", trigger: "blur" },
        ],
        card_detail: [
          { required: true, message: "请输入会员卡详细描述", trigger: "blur" },
        ],
        limit_type: [
          { required: true, message: "请输入卡种类型 // 0时间卡1次数卡", trigger: "blur" },
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
        id: 0, // 会员卡类型id
        card_name: "", // 会员卡名称
        card_img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555575698912&di=4504a218f051995cb6ebba9967b61098&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fc75c10385343fbf26f28e948bc7eca8065388f51.jpg", // 会员卡图片
        card_desc: "", // 会员卡描述
        card_detail: "", // 会员卡详细描述
        limit_type: null, // 卡种类型 // 0时间卡1次数卡
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
      xxevent.emit("EditDialogShow_Member_Card_Type", false); // 新增或编辑界面显示
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
        url: "/admin/member_card_type/store",
        data: data,
        method: "post"
      });

      if (res.errno == 0) {
        if (this.editTableDataNew) {
          this.$message.success("添加成功");
        } else {
          this.$message.success("更新成功");
        }
        xxevent.emit("EditDialogShow_Member_Card_Type", false); // 新增或编辑界面显示
        xxevent.emit("SendUpdateTableItem_Member_Card_Type"); // 更新查询数据项
        xxevent.emit("SendUpdateItem_Member_Card_Type", res.data); // 更新单个数据项
      }

    },

    

    /////////////////////////////////////////////////////

    // 新增数据
    onNewObj_Member_Card_Type(obj) {
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
    onEditObj_Member_Card_Type(row) {
      this.editTableDataNew = false;
      
      this.editTableData.limit_type += '';

      this.editTableData = row;
    },
   }
    
};
</script>
