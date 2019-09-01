<template>
  <div class="un-handle-layout">
      <div class="layout-title">会员卡类型</div>
      <div class="un-handle-content">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">会员卡类型id:</span>
              <span class="color-danger">{{data.id}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">会员卡名称:</span>
              <span class="color-danger">{{data.card_name}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">会员卡图片:</span>
              <image-cropper-more :single="false" v-model="editTableData.card_img" :disabled="true"></image-cropper-more>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">会员卡描述:</span>
              <span class="color-danger" style="white-space: pre-line;">{{data.card_desc}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">会员卡详细描述:</span>
              <span class="color-danger" style="white-space: pre-line;">{{data.card_detail}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">卡种类型 // 0时间卡1次数卡:</span>
              <span class="color-danger">{{data.limit_type}}</span>
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
  name: "DataItemMember_Card_Type",
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
