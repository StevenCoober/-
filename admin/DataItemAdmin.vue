<template>
  <div class="un-handle-layout">
      <div class="layout-title">健身房管理员</div>
      <div class="un-handle-content">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">管理员id:</span>
              <span class="color-danger">{{data.id}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">管理员用户名:</span>
              <span class="color-danger">{{data.username}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">管理员密码:</span>
              <span class="color-danger">{{data.password}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">管理员秘钥:</span>
              <span class="color-danger">{{data.password_salt}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">昵称:</span>
              <span class="color-danger">{{data.nickname}}</span>
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
              <span class="font-medium">上次登录时间:</span>
              <el-icon name="time"></el-icon>
              <span class="color-danger">{{data.last_login_time}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">添加时间:</span>
              <el-icon name="time"></el-icon>
              <span class="color-danger">{{data.add_time}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">更新时间:</span>
              <el-icon name="time"></el-icon>
              <span class="color-danger">{{data.update_time}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">角色:</span>
              <div class="component-item">
                <pan-thumb :image="data.avatar || ''"></pan-thumb>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">管理员权限:</span>
              <span class="color-danger">{{data.admin_role_permission}}</span>
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
  name: "DataItemAdmin",
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
