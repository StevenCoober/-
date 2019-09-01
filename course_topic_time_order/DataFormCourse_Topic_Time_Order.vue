<template>
        <el-form :inline="true" style="border: 1px solid rgb(223, 230, 236); width: 100%; border-radius: 0px;padding-left:12px" :model="editTableData" ref="editTableData"
>
                  <el-form-item label="用户预定情况id" style="width:100%;">
                    <span>{{editTableData.id}}</span>
                  </el-form-item>
                  <el-form-item label="课程时间id" style="width:100%;">
                    <span>{{editTableData.topic_time_id}}</span>
                  </el-form-item>
                  <el-form-item label="预定的用户" style="width:100%;">
                    <span>{{editTableData.user_id}}</span>
                  </el-form-item>
                  <el-form-item label="预定日期" style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{editTableData.reserve_time}}</span>
                  </el-form-item>
                  <el-form-item label="订单状态//0未开始1进行中2已完成" style="width:100%;">
                    <span>{{editTableData.order_state}}</span>
                  </el-form-item>
        </el-form>
</template>

<script>
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";
export default {
  name: "DataFormCourse_Topic_Time_Order",
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
