<template>
  <div>
    <el-form :model="editTableData" :rules="rules" ref="editTableData">
          <el-form-item  v-show="!editTableDataNew" label="会员用户申请请求id" :label-width="formLabelWidth" prop="id">
              <el-input placeholder="请输入会员用户申请请求id" type="number" :disabled="true" v-model="editTableData.id"></el-input>
          </el-form-item>
<!--           <el-form-item label="微信用户id" :label-width="formLabelWidth" prop="user_id">
              <el-input placeholder="请输入微信用户id" type="number" v-model="editTableData.user_id"></el-input>
          </el-form-item> -->
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
          <el-form-item label="请求时间" :label-width="formLabelWidth" prop="request_time">
            <el-date-picker
              v-model="editTableData.request_time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="请选择日期时间"
            ></el-date-picker>
          </el-form-item>
<!--           <el-form-item label="请求状态//0未处理1已经处理" :label-width="formLabelWidth" prop="state">
              <el-input placeholder="请输入请求状态//0未处理1已经处理" type="number" v-model="editTableData.state"></el-input>
          </el-form-item> -->
          <el-form-item label="性别" :label-width="formLabelWidth" prop="gender">
            <el-select v-model="editTableData.gender" class="filter-item">
              <el-option
                v-for="(item, idx) in ['无性别', '男', '女']"
                :key="idx"
                :label="item"
                :value="idx"
              />
            </el-select>
              <!-- <el-input placeholder="请输入性别" type="number" v-model="editTableData.gender"></el-input> -->
          </el-form-item>
          <el-form-item label="身份证" :label-width="formLabelWidth" prop="identity_card">
              <el-input placeholder="请输入身份证" v-model="editTableData.identity_card"></el-input>
          </el-form-item>
          <el-form-item label="生活照" :label-width="formLabelWidth" prop="life_photo">
              <image-cropper-more :single="true" v-model="editTableData.life_photo" :disabled="false"></image-cropper-more>
          </el-form-item>
<!-- 	        <el-form-item label="顾问id" :label-width="formLabelWidth" prop="adviser_id">
              <el-input placeholder="请输入顾问id" type="number" v-model="editTableData.adviser_id"></el-input>
          </el-form-item> -->
          <el-form-item label="顾问" :label-width="formLabelWidth" prop="adviser_id">
              <el-select v-model="editTableData.adviser_id" class="filter-item">
                <el-option
                  v-for="(item, idx) in adviserOptions"
                  :key="idx"
                  :label="item"
                  :value="idx"
                />
              </el-select>
          </el-form-item>
          <el-form-item label="卡号" :label-width="formLabelWidth" prop="card_num">
              <el-input placeholder="请输入卡号" v-model="editTableData.card_num"></el-input>
          </el-form-item>
	       <el-form-item label="会员卡类型(480x270)" :label-width="formLabelWidth" prop="card_type_id">
            <el-select @change="onCardTypeChange" v-model="editTableData.card_type_id" class="filter-item">
              <el-option
                v-for="(item, idx) in card_type_Options"
                :key="idx"
                :label="item"
                :value="idx"
              />
              </el-select>
          </el-form-item>

          <el-form-item  label="创建时间" :label-width="formLabelWidth" prop="card_type_create_time">
            <el-date-picker
              :disabled="createTimeDisabled"
              v-model="editTableData.card_type_create_time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="请选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item  label="会员卡到期时间" :label-width="formLabelWidth" prop="card_type_end_time">
            <el-date-picker
            :disabled="endTimeDisabled"
              v-model="editTableData.card_type_end_time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="请选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item  label="使用次数" :label-width="formLabelWidth" prop="card_type_use_times">
              <el-input :disabled="useTimeDisabled" placeholder="请输入使用次数" type="number" v-model="editTableData.card_type_use_times"></el-input>
          </el-form-item>
    </el-form>
    <div slot="footer" style="text-align: right;" class="dialog-footer">
      <el-button @click="OnClickCancleForm">取 消</el-button>
      <el-button type="primary" @click="OnClickOkForm">确 定</el-button>
    </div>
      <el-dialog title="会员用户录入" :modal-append-to-body="false"  :visible.sync="tinymceDialogFormVisible" width="100%">
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
  name: "DataFormEditMember_Record",
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
    await this.FetchAdviserOptions();
  },

  // 销毁的时候
  async destroyed() {
   xxevent.unbindtarget(this);
  },

  data() {
    const validateCreateTime = (rule, value, callback) => {
      if (this.editTableData.card_type_id != '5') {
        if (this.editTableData.card_type_create_time == null || this.editTableData.card_type_create_time == '') {
          callback(new Error('请输入会员卡创建日期'));
          return;
        }
      }
      callback();
    }
    const validateCreateEndTime = (rule, value, callback) => {
      if (this.editTableData.card_type_id != '5') {
        if (this.editTableData.card_type_end_time == null || this.editTableData.card_type_end_time == '') {
          callback(new Error('请输入会员卡到期日期'));
          return;
        }
      }
      callback();
    }
    const validateUseTime = (rule, value, callback) => {
      if (this.editTableData.card_type_id == '5') {
        if (this.editTableData.card_type_use_times == null || this.editTableData.card_type_use_times == '') {
          callback(new Error('请输入使用次数'));
          return;
        }
      }
      callback();
    }
    return {
      card_type_Options:[],
      tinymceDialogFormVisible: false,
      tinymceEditText: "",
      tinymceEditTextKey: "",
      editTableDataNew: false,
      editTableData: {},
      imagecropperKey: 0, //上传图片的key
      formLabelWidth: "120px", // 数据框的尺寸
      imagecropperShow: false, //上传控件是否显示
      adviserOptions: {},
      rules: {
        id: [
          { required: true, message: "请输入会员用户申请请求id", trigger: "blur" },
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
        request_time: [
          { required: true, message: "请输入请求时间", trigger: "blur" },
        ],
        state: [
          { required: true, message: "请输入请求状态//0未处理1已经处理", trigger: "blur" },
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
	        card_type_id: [
          { required: true, message: "请输入创建会员卡类型", trigger: "blur" },
        ],
        card_type_create_time: [
          { required: true, message: "请输入会员卡创建日期", trigger: "blur", validator: validateCreateTime},
        ],
        card_type_end_time: [
          { required: true, message: "请输入会员卡到期日期", trigger: "blur", validator: validateCreateEndTime},
        ],
        card_type_use_times: [
          { required: true, message: "请输入使用次数", trigger: "blur", validator: validateUseTime},
        ],
        gender: [
          { required: true, message: "请输入性别", trigger: "blur" },
        ],
      },
      createTimeDisabled: false,
      endTimeDisabled: false,
      useTimeDisabled: true,
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
        id: 0, // 会员用户申请请求id
        user_id: 0, // 微信用户id
        name: "", // 姓名
        mobile: "", // 联系电话
        birthday: new Date(), // 生日
        address: "", // 联系地址
        request_time: new Date(), // 请求时间
        state: 0, // 请求状态//0未处理1已经处理
        gender: null, // 性别
        identity_card: "", // 身份证
        life_photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555575698912&di=4504a218f051995cb6ebba9967b61098&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fc75c10385343fbf26f28e948bc7eca8065388f51.jpg", // 生活照
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
      xxevent.emit("EditDialogShow_Member_Record_More", false); // 新增或编辑界面显示
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
        url: "/admin/member_record/storeMore",
        data: data,
        method: "post"
      });

      if (res.errno == 0) {
        if (this.editTableDataNew) {
          this.$message.success("添加成功");
        } else {
          this.$message.success("更新成功");
        }
        xxevent.emit("EditDialogShow_Member_Record_More", false); // 新增或编辑界面显示
        xxevent.emit("SendUpdateTableItem_Member_Record_More"); // 更新查询数据项
        xxevent.emit("SendUpdateTableItem_Member_Record"); // 更新查询数据项
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

    async FetchAdviserOptions() {
      let res = await this.request({
        url: "/admin/adviser/all",
        method: "post"
      });
      if (res["data"] != null) {
          let resData = res["data"];
          let adviserOptions = {};
          for (let i = 0; i < resData.length; i++) {
            const data = resData[i];
            const id = data.id; // 会员用户id
            const user_id = data.user_id; // 微信用户id
            const name = data.name; // 姓名
            const mobile = data.mobile; // 联系电话
            const birthday = data.birthday; // 生日
            const address = data.address; // 联系地址
            const create_time = data.create_time; // 创建日期
            adviserOptions[id] = name;
          }
          this.adviserOptions = adviserOptions;
      }
    },

    /////////////////////////////////////////////////////

    // 新增数据
    onNewObj_Member_Record_More() {
      this.editTableDataNew = true;
      this.InitNewData();
    },

    // 编辑数据
    onEditObj_Member_Record_More(row) {
      this.editTableDataNew = false;
      this.editTableData.gender += '';
      this.editTableData = row;
    },
   }
    
};
</script>
