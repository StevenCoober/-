<template>
  <div class="un-handle-layout">
      <div class="layout-title">健身房文章</div>
      <div class="un-handle-content">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">健身房文章id:</span>
              <span class="color-danger">{{data.id}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">健身房文章标题:</span>
              <span class="color-danger">{{data.title}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">健身房文章缩略图:</span>
              <image-cropper-more :single="false" v-model="editTableData.article_img" :disabled="true"></image-cropper-more>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">文章所属种类:</span>
              <span class="color-danger">{{data.article_type}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">浏览量:</span>
              <span class="color-danger">{{data.view_count}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">健身房文章内容:</span>
              <div class="color-danger" v-html="props.row.detail" />
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
              <span class="font-medium">修改时间:</span>
              <el-icon name="time"></el-icon>
              <span class="color-danger">{{data.modify_time}}</span>
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
  name: "DataItemArticle",
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
