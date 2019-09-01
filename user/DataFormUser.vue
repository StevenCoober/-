<template>
        <el-form :inline="true" style="border: 1px solid rgb(223, 230, 236); width: 100%; border-radius: 0px;padding-left:12px" :model="editTableData" ref="editTableData"
>
                  <el-form-item label="人员id" style="width:100%;">
                    <span>{{editTableData.id}}</span>
                  </el-form-item>
                  <el-form-item label="名称" style="width:100%;">
                    <span>{{editTableData.username}}</span>
                  </el-form-item>
                  <el-form-item label="密码" style="width:100%;">
                    <span>{{editTableData.password}}</span>
                  </el-form-item>
                  <el-form-item label="注册时间" style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{editTableData.register_time}}</span>
                  </el-form-item>
                  <el-form-item label="注册ip" style="width:100%;">
                    <span>{{editTableData.register_ip}}</span>
                  </el-form-item>
                  <el-form-item label="上次登录时间" style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{editTableData.last_login_time}}</span>
                  </el-form-item>
                  <el-form-item label="上次登录ip" style="width:100%;">
                    <span>{{editTableData.last_login_ip}}</span>
                  </el-form-item>
                  <el-form-item label="微信openid" style="width:100%;">
                    <span>{{editTableData.weixin_openid}}</span>
                  </el-form-item>
                  <el-form-item label="头像" style="width:100%;">
                    <el-card class="box-card">
                      <div class="component-item">
                        <pan-thumb
                          width="100px"
                          height="100px"
                          :image="editTableData.avatar || ''"
                        ></pan-thumb>
                      </div>
                    </el-card>
                  </el-form-item>
                  <el-form-item label="性别" style="width:100%;">
                    <span>{{editTableData.gender}}</span>
                  </el-form-item>
                  <el-form-item label="昵称" style="width:100%;">
                    <span>{{editTableData.nickname}}</span>
                  </el-form-item>
        </el-form>
</template>

<script>
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
export default {
  name: "DataFormUser",
  components: {
    ImageCropper,
    PanThumb,
    Tinymce
  },
  props: {
    editTableData: {
      type: Object,
      required: false,
      default() {
        return [];
      }
    },
  },
};
</script>
