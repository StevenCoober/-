<template>
  <div>
    <el-form :model="editTableData" :rules="rules" ref="editTableData">
          <el-form-item  v-show="!editTableDataNew" label="会员用户id" :label-width="formLabelWidth" prop="id">
              <el-input placeholder="请输入会员用户id" type="number" :disabled="true" v-model="editTableData.id"></el-input>
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
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="请选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="联系地址" :label-width="formLabelWidth" prop="address">
              <el-input placeholder="请输入联系地址" v-model="editTableData.address"></el-input>
          </el-form-item>
<!--           <el-form-item label="创建日期" :label-width="formLabelWidth" prop="create_time">
            <el-date-picker
              v-model="editTableData.create_time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="请选择日期时间"
            ></el-date-picker>
          </el-form-item> -->
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
          <el-form-item label="身份证" :label-width="formLabelWidth" prop="identity_card">
              <el-input placeholder="请输入身份证" v-model="editTableData.identity_card"></el-input>
          </el-form-item>
          <el-form-item label="生活照" :label-width="formLabelWidth" prop="life_photo">
              <image-cropper-more :single="true" v-model="editTableData.life_photo" :disabled="false"></image-cropper-more>
          </el-form-item>
    </el-form>
    <div slot="footer" style="text-align: right;" class="dialog-footer">
      <el-button @click="OnClickCancleForm">取 消</el-button>
      <el-button type="primary" @click="OnClickOkForm">确 定</el-button>
    </div>
      <el-dialog title="会员用户" :modal-append-to-body="false"  :visible.sync="tinymceDialogFormVisible" width="100%">
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

import {
  ID as CONSTS_ID,
  Item as CONSTS_Item,
  Item_Of_VALUE as CONSTS_ITEM_OF_VALUE,
  Item_Of_DESC as CONSTS_ITEM_OF_DESC,
} from '@/utils/jianshenfang_consts.js';

export default {
  name: "DataFormEditMember",
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore
  },

  // 创建的时候
  async created() {
    xxevent.bindtarget(this);

    for(let i = CONSTS_ID.MONTH_CARD; i <= CONSTS_ID.TIMESHARE_CARD; i++) {
      this.card_type_Options[parseInt(CONSTS_Item[i].VALUE)] = CONSTS_Item[i].DESC;
    }
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
      card_type_Options:{},
      editTableDataNew: false,
      editTableData: {},
      imagecropperKey: 0, //上传图片的key
      formLabelWidth: "120px", // 数据框的尺寸
      imagecropperShow: false, //上传控件是否显示
      genderOptions: ["无性别", "男", "女"],
      rules: {
        id: [
          { required: true, message: "请输入会员用户id", trigger: "blur" },
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
        create_time: [
          { required: true, message: "请输入创建日期", trigger: "blur" },
        ],
        gender: [
          { required: true, message: "请输入性别", trigger: "blur" },
        ],
        identity_card: [
          { required: true, message: "请输入身份证", trigger: "blur" },
        ],
        life_photo: [
          { required: true, message: "请选择生活照图片", trigger: "blur" },
          { type: 'string', required: true, message: '请选择生活照图片', trigger: 'change' }
        ],
        card_num: [
          { required: true, message: "请输入卡号", trigger: "blur" },
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
        id: 0, // 会员用户id
        user_id: 0, // 微信用户id
        name: "", // 姓名
        mobile: "", // 联系电话
        birthday: new Date(), // 生日
        address: "", // 联系地址
        create_time: new Date(), // 创建日期
        gender: null, // 性别
      	identity_card: "", // 身份证
        life_photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555575698912&di=4504a218f051995cb6ebba9967b61098&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fc75c10385343fbf26f28e948bc7eca8065388f51.jpg", // 生活照
        card_num: 0, // 卡号
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
      xxevent.emit("EditDialogShow_Member", false); // 新增或编辑界面显示
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
        url: "/admin/member/store",
        data: data,
        method: "post"
      });

      if (res.errno == 0) {
        if (this.editTableDataNew) {
          this.$message.success("添加成功");
        } else {
          this.$message.success("更新成功");
        }
        xxevent.emit("EditDialogShow_Member", false); // 新增或编辑界面显示
        xxevent.emit("SendUpdateTableItem_Member"); // 更新查询数据项
        xxevent.emit("SendUpdateItem_Member", res.data); // 更新单个数据项
      }

    },


    /////////////////////////////////////////////////////

    // 新增数据
    onNewObj_Member(obj) {
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
    onEditObj_Member(row) {
      this.editTableDataNew = false;
      this.editTableData = row;
    },
   }
    
};
</script>
