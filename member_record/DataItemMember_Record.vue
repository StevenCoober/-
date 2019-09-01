<template>
  <div class="un-handle-layout">
      <div class="layout-title">会员用户录入</div>
      <div class="un-handle-content">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">会员用户申请请求id:</span>
              <span class="color-danger">{{data.id}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">微信用户id:</span>
              <span class="color-danger">{{data.user_id}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">姓名:</span>
              <span class="color-danger">{{data.name}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">联系电话:</span>
              <span class="color-danger">{{data.mobile}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">生日:</span>
              <span class="color-danger">{{data.birthday}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">联系地址:</span>
              <span class="color-danger">{{data.address}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">请求时间:</span>
              <el-icon name="time"></el-icon>
              <span class="color-danger">{{data.request_time}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">请求状态//0未处理1已经处理:</span>
              <span class="color-danger">{{data.state}}</span>
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
              <span class="font-medium">身份证:</span>
              <span class="color-danger">{{data.identity_card}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">生活照:</span>
              <span class="color-danger">{{data.life_photo}}</span>
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
  name: "DataItemMember_Record",
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
