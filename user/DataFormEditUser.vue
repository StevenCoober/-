<template>
  <div>
    <el-form :model="editTableData" :rules="rules" ref="editTableData">
          <el-form-item  v-show="!editTableDataNew" label="人员id" :label-width="formLabelWidth" prop="id">
              <el-input placeholder="请输入人员id" type="number" :disabled="true" v-model="editTableData.id"></el-input>
          </el-form-item>
          <el-form-item label="名称" :label-width="formLabelWidth" prop="username">
              <el-input placeholder="请输入名称" v-model="editTableData.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
              <el-input placeholder="请输入密码" v-model="editTableData.password"></el-input>
          </el-form-item>
          <el-form-item label="注册时间" :label-width="formLabelWidth" prop="register_time">
            <el-date-picker
              v-model="editTableData.register_time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="请选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="注册ip" :label-width="formLabelWidth" prop="register_ip">
              <el-input placeholder="请输入注册ip" v-model="editTableData.register_ip"></el-input>
          </el-form-item>
          <el-form-item label="上次登录时间" :label-width="formLabelWidth" prop="last_login_time">
            <el-date-picker
              v-model="editTableData.last_login_time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="请选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="上次登录ip" :label-width="formLabelWidth" prop="last_login_ip">
              <el-input placeholder="请输入上次登录ip" v-model="editTableData.last_login_ip"></el-input>
          </el-form-item>
          <el-form-item label="微信openid" :label-width="formLabelWidth" prop="weixin_openid">
              <el-input placeholder="请输入微信openid" v-model="editTableData.weixin_openid"></el-input>
          </el-form-item>
          <el-form-item label="头像" :label-width="formLabelWidth" prop="avatar">
            <div class="component-item">
              <pan-thumb :image="editTableData.avatar || ''"></pan-thumb>
            </div>
            <el-button
              type="primary"
              icon="upload"
              style="margin-left:30px"
              @click="OnClickAvatar"
            >上传头像</el-button>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth" prop="gender">
              <el-input placeholder="请输入性别" type="number" v-model="editTableData.gender"></el-input>
          </el-form-item>
          <el-form-item label="昵称" :label-width="formLabelWidth" prop="nickname">
              <el-input placeholder="请输入昵称" v-model="editTableData.nickname"></el-input>
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
  name: "DataFormEditUser",
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
          { required: true, message: "请输入人员id", trigger: "blur" },
        ],
        username: [
          { required: true, message: "请输入名称", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
        ],
        register_time: [
          { required: true, message: "请输入注册时间", trigger: "blur" },
        ],
        register_ip: [
          { required: true, message: "请输入注册ip", trigger: "blur" },
        ],
        last_login_time: [
          { required: true, message: "请输入上次登录时间", trigger: "blur" },
        ],
        last_login_ip: [
          { required: true, message: "请输入上次登录ip", trigger: "blur" },
        ],
        weixin_openid: [
          { required: true, message: "请输入微信openid", trigger: "blur" },
        ],
        avatar: [
          { required: true, message: "请选择头像图片", trigger: "blur" },
        ],
        gender: [
          { required: true, message: "请输入性别", trigger: "blur" },
        ],
        nickname: [
          { required: true, message: "请输入昵称", trigger: "blur" },
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
        id: 0, // 人员id
        username: "", // 名称
        password: "", // 密码
        register_time: new Date(), // 注册时间
        register_ip: "", // 注册ip
        last_login_time: new Date(), // 上次登录时间
        last_login_ip: "", // 上次登录ip
        weixin_openid: "", // 微信openid
        avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555575698912&di=4504a218f051995cb6ebba9967b61098&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fc75c10385343fbf26f28e948bc7eca8065388f51.jpg", // 头像
        gender: 0, // 性别
        nickname: "", // 昵称
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
      xxevent.emit("EditDialogShow_User", false); // 新增或编辑界面显示
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
        url: "/admin/user/store",
        data: data,
        method: "post"
      });

      if (res.errno == 0) {
        if (this.editTableDataNew) {
          this.$message.success("添加成功");
        } else {
          this.$message.success("更新成功");
        }
        xxevent.emit("EditDialogShow_User", false); // 新增或编辑界面显示
        xxevent.emit("SendUpdateTableItem_User"); // 更新查询数据项
      }

    },

    

    /////////////////////////////////////////////////////

    // 新增数据
    onNewObj_User() {
      this.editTableDataNew = true;
      this.InitNewData();
    },

    // 编辑数据
    onEditObj_User(row) {
      this.editTableDataNew = false;
      this.editTableData = row;
    },
   }
    
};
</script>
