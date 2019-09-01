<template>
        <el-form :inline="true" style="border: 1px solid rgb(223, 230, 236); width: 100%; border-radius: 0px;padding-left:12px" :model="editTableData" ref="editTableData"
>
                  <el-form-item label="课程主题id" style="width:100%;">
                    <span>{{editTableData.id}}</span>
                  </el-form-item>
                  <el-form-item label="详细名称" style="width:100%;">
                    <span>{{editTableData.name}}</span>
                  </el-form-item>
                  <el-form-item label="顶部导航" style="width:100%;">
                    <image-cropper-more :single="false" v-model="editTableData.top_ad || ''" :disabled="true"></image-cropper-more>
                  </el-form-item>
                  <el-form-item label="教练id" style="width:100%;">
                    <span>{{editTableData.coach_id}}</span>
                  </el-form-item>
                  <el-form-item label="课程主题类型id" style="width:100%;">
                    <span>{{editTableData.topic_type_id}}</span>
                  </el-form-item>
                  <el-form-item label="简介" style="width:100%;">
                    <span style="white-space: pre-line;">{{editTableData.desc}}</span>
                  </el-form-item>
                  <el-form-item label="添加时间" style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{editTableData.add_time}}</span>
                  </el-form-item>
                  <el-form-item label="节数" style="width:100%;">
                    <span>{{editTableData.class_num}}</span>
                  </el-form-item>
                  <el-form-item label="金额" style="width:100%;">
                    <span>{{editTableData.class_price}}</span>
                  </el-form-item>
                  <el-form-item label="详细描述" style="width:100%;">
                    <div v-html="editTableData.detail" />
                  </el-form-item>
        </el-form>
</template>

<script>
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";
export default {
  name: "DataFormCourse_topic",
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore
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
