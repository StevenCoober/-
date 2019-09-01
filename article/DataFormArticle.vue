<template>
        <el-form :inline="true" style="border: 1px solid rgb(223, 230, 236); width: 100%; border-radius: 0px;padding-left:12px" :model="editTableData" ref="editTableData"
>
                  <el-form-item label="健身房文章id" style="width:100%;">
                    <span>{{editTableData.id}}</span>
                  </el-form-item>
                  <el-form-item label="健身房文章标题" style="width:100%;">
                    <span>{{editTableData.title}}</span>
                  </el-form-item>
                  <el-form-item label="健身房文章缩略图" style="width:100%;">
                    <image-cropper-more :single="false" v-model="editTableData.article_img || ''" :disabled="true"></image-cropper-more>
                  </el-form-item>
                  <el-form-item label="文章所属种类" style="width:100%;">
                    <span>{{editTableData.article_type}}</span>
                  </el-form-item>
                  <el-form-item label="浏览量" style="width:100%;">
                    <span>{{editTableData.view_count}}</span>
                  </el-form-item>
                  <el-form-item label="健身房文章内容" style="width:100%;">
                    <div v-html="editTableData.detail" />
                  </el-form-item>
                  <el-form-item label="添加时间" style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{editTableData.add_time}}</span>
                  </el-form-item>
                  <el-form-item label="修改时间" style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{editTableData.modify_time}}</span>
                  </el-form-item>
        </el-form>
</template>

<script>
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
export default {
  name: "DataFormArticle",
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
