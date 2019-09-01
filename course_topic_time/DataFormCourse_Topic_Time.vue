<template>
        <el-form :inline="true" style="border: 1px solid rgb(223, 230, 236); width: 100%; border-radius: 0px;padding-left:12px" :model="editTableData" ref="editTableData"
>
                  <el-form-item label="课程时间id" style="width:100%;">
                    <span>{{editTableData.id}}</span>
                  </el-form-item>
                  <el-form-item label="课程主题id" style="width:100%;">
                    <span>{{editTableData.course_topic_id}}</span>
                  </el-form-item>
                  <el-form-item label="授课时间" style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{editTableData.course_topic_btime}}</span>
                  </el-form-item>
                  <el-form-item label="授课结束时间" style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{editTableData.course_topic_etime}}</span>
                  </el-form-item>
        </el-form>
</template>

<script>
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";
export default {
  name: "DataFormCourse_Topic_Time",
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
