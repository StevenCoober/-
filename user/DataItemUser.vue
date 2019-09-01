<template>
  <div class="un-handle-layout">
      <div class="layout-title">微信用户</div>
      <div class="un-handle-content">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">人员id:</span>
              <span class="color-danger">{{data.id}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">名称:</span>
              <span class="color-danger">{{data.username}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">密码:</span>
              <span class="color-danger">{{data.password}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">注册时间:</span>
              <el-icon name="time"></el-icon>
              <span class="color-danger">{{data.register_time}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">注册ip:</span>
              <span class="color-danger">{{data.register_ip}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">上次登录时间:</span>
              <el-icon name="time"></el-icon>
              <span class="color-danger">{{data.last_login_time}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">上次登录ip:</span>
              <span class="color-danger">{{data.last_login_ip}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">微信openid:</span>
              <span class="color-danger">{{data.weixin_openid}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">头像:</span>
              <div class="component-item">
                <pan-thumb :image="data.avatar || ''"></pan-thumb>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">性别:</span>
              <span class="color-danger">{{data.gender}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">昵称:</span>
              <span class="color-danger">{{data.nickname}}</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
</template>


<script>
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
export default {
  name: "DataItemUser",
  components: {
    ImageCropper,
    PanThumb,
    Tinymce
  },
  props: {
    data: {
      type: Object,
      required: false,
      default() {
        return [];
      }
    },
  },
};
</script>
