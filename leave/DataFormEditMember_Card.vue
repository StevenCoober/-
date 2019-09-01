<template>
  <div>
    <el-form :model="editTableData" :rules="rules" ref="editTableData">
          <el-form-item  v-show="!editTableDataNew" label="会员卡id" :label-width="formLabelWidth" prop="id">
              <el-input placeholder="请输入会员卡id" type="number" :disabled="true" v-model="editTableData.id"></el-input>
          </el-form-item>
<!--           <el-form-item label="会员用户id" :label-width="formLabelWidth" prop="user_id">
              <el-input placeholder="请输入会员用户id" type="number" v-model="editTableData.user_id"></el-input>
          </el-form-item> -->
          <el-form-item label="会员用户" :label-width="formLabelWidth" prop="user_id">
              <el-select v-model="editTableData.user_id" class="filter-item">
                <el-option
                  v-for="(item, idx) in memberOptions"
                  :key="idx"
                  :label="item"
                  :value="idx"
                />
              </el-select>
          </el-form-item>
<!--           <el-form-item label="会员卡类型id" :label-width="formLabelWidth" prop="card_type_id">
              <el-input placeholder="请输入会员卡类型id" type="number" v-model="editTableData.card_type_id"></el-input>
          </el-form-item> -->
          <el-form-item label="会员卡类型" :label-width="formLabelWidth">
              <el-select @change="onCardTypeChange" v-model="editTableData.card_type_id" class="filter-item">
                <el-option
                  v-for="(item, idx) in card_type_Options"
                  :key="idx"
                  :label="item"
                  :value="idx"
                />
              </el-select>
          </el-form-item>

          <el-form-item label="创建时间" :label-width="formLabelWidth" prop="create_time">
            <el-date-picker
            :disabled="createTimeDisabled"
              v-model="editTableData.create_time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="请选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="会员卡到期时间" :label-width="formLabelWidth" prop="end_time">
            <el-date-picker
            :disabled="endTimeDisabled"
              v-model="editTableData.end_time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="请选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="使用次数"  :label-width="formLabelWidth" prop="use_times">
              <el-input :disabled="useTimeDisabled" placeholder="请输入使用次数" type="number" v-model="editTableData.use_times"></el-input>
          </el-form-item>
          <el-form-item label="剩余次数" :label-width="formLabelWidth" prop="left_times">
              <el-input :disabled="useTimeDisabled" placeholder="请输入剩余次数" type="number" v-model="editTableData.left_times"></el-input>
          </el-form-item>
          <el-form-item label="卡号" :label-width="formLabelWidth" prop="card_num">
              <el-input placeholder="请输入卡号" type="number" v-model="editTableData.card_num"></el-input>
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

import {
  ID as CONSTS_ID,
  Item as CONSTS_Item,
  Item_Of_VALUE as CONSTS_ITEM_OF_VALUE,
  Item_Of_DESC as CONSTS_ITEM_OF_DESC,
} from '@/utils/jianshenfang_consts.js';

export default {
  name: "DataFormEditMember_Card",
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore
  },

  // 创建的时候
  async created() {
    xxevent.bindtarget(this);
    await this.FetchCard_type_Options();
    await this.FetchMemberOptions();
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
      card_type_Options: {},
      createTimeDisabled: false,
      endTimeDisabled: false,
      useTimeDisabled: true,
      imagecropperKey: 0, //上传图片的key
      formLabelWidth: "120px", // 数据框的尺寸
      imagecropperShow: false, //上传控件是否显示
      memberOptions:[],
      rules: {
        id: [
          { required: true, message: "请输入会员卡id", trigger: "blur" },
        ],
        user_id: [
          { required: true, message: "请输入会员用户id", trigger: "blur" },
        ],
        card_type_id: [
          { required: true, message: "请输入会员卡类型id", trigger: "blur" },
        ],
        create_time: [
          { required: true, message: "请输入创建时间", trigger: "blur" },
        ],
        end_time: [
          { required: true, message: "请输入会员卡到期时间", trigger: "blur" },
        ],
        use_times: [
          { required: true, message: "请输入使用次数", trigger: "blur" },
        ],
        left_times: [
          { required: true, message: "请输入剩余次数", trigger: "blur" },
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
        id: 0, // 会员卡id
        user_id: null, // 会员用户id
        card_type_id: null, // 会员卡类型id
        create_time: new Date(), // 创建时间
        end_time: new Date(), // 会员卡到期时间
        use_times: 0, // 使用次数
        left_times: 0, // 剩余次数
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
      xxevent.emit("EditDialogShow_Member_Card", false); // 新增或编辑界面显示
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
        url: "/admin/member_card/store",
        data: data,
        method: "post"
      });

      if (res.errno == 0) {
        if (this.editTableDataNew) {
          this.$message.success("添加成功");
        } else {
          this.$message.success("更新成功");
        }
        xxevent.emit("EditDialogShow_Member_Card", false); // 新增或编辑界面显示
        xxevent.emit("SendUpdateTableItem_Member_Card"); // 更新查询数据项
	xxevent.emit("SendUpdateItem_Member_Card", res.data); // 更新单个数据项
      }

    },

    async FetchCard_type_Options() {
      let res = await this.request({
        url: "/admin/member_card_type/all",
        method: "post"
      });
      if (res["data"] != null) {
          let resData = res["data"];
          let card_type_Options = {};
          for (let i = 0; i < resData.length; i++) {
            const data = resData[i];
            const id = data.id; // 会员卡类型id
            const card_name = data.card_name; // 会员卡名称
            const card_img = data.card_img; // 会员卡图片
            const card_desc = data.card_desc; // 会员卡描述
            const card_detail = data.card_detail; // 会员卡详细描述
            const limit_type = data.limit_type; // 卡种类型 // 0时间卡1次数卡
            card_type_Options[id] = card_name;
          }
          this.card_type_Options = card_type_Options;
      }
    },

    async FetchMemberOptions() {
      let res = await this.request({
        url: "/admin/member/all",
        method: "post"
      });
      if (res["data"] != null) {
          let resData = res["data"];
          let memberOptions = {};
          for (let i = 0; i < resData.length; i++) {
            const data = resData[i];
            const id = data.id; // 会员用户id
            const user_id = data.user_id; // 微信用户id
            const name = data.name; // 姓名
            const mobile = data.mobile; // 联系电话
            const birthday = data.birthday; // 生日
            const address = data.address; // 联系地址
            const create_time = data.create_time; // 创建日期
            memberOptions[id] = name;
          }
          this.memberOptions = memberOptions;
      }
    },
    

    onCardTypeChange(val){
      if (val == parseInt(CONSTS_ITEM_OF_VALUE("TIMES_CARD"))) {
        this.createTimeDisabled = true;
        this.endTimeDisabled = true;
        this.useTimeDisabled = false;
      }
      else {
        this.createTimeDisabled = false;
        this.endTimeDisabled = false;
        this.useTimeDisabled = true;
      }
    },

    /////////////////////////////////////////////////////

    // 新增数据
    onNewObj_Member_Card(obj) {
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
    onEditObj_Member_Card(row) {
      this.editTableDataNew = false;
      this.editTableData = row;
      this.onCardTypeChange(this.editTableData.card_type_id);
      this.editTableData.card_type_id += '';
      this.editTableData.user_id += '';
      
    },
   }
    
};
</script>
