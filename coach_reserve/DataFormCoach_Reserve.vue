<template>
        <el-form :inline="true" style="border: 1px solid rgb(223, 230, 236); width: 100%; border-radius: 0px;padding-left:12px" :model="editTableData" ref="editTableData"
>
                  <el-form-item label="教练预约订单id" style="width:100%;">
                    <span>{{editTableData.id}}</span>
                  </el-form-item>
                  <el-form-item label="预定的会员用户id" style="width:100%;">
                    <span>{{editTableData.user_id}}</span>
                  </el-form-item>
                  <el-form-item label="教练id" style="width:100%;">
                    <span>{{editTableData.coach_id}}</span>
                  </el-form-item>
                  <el-form-item label="预约课程id" style="width:100%;">
                    <span>{{editTableData.skill_id}}</span>
                  </el-form-item>
                  <el-form-item label="订单状态//0未开始1进行中2已完成" style="width:100%;">
                    <span>{{editTableData.order_state}}</span>
                  </el-form-item>
                  <el-form-item label="预约结果状态" style="width:100%;">
                    <span>{{editTableData.orde_result_state}}</span>
                  </el-form-item>
                  <el-form-item label="预约开始时间 " style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{editTableData.reverse_btime}}</span>
                  </el-form-item>
                  <el-form-item label="预约结束时间 " style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{editTableData.reverse_etime}}</span>
                  </el-form-item>
        </el-form>
</template>

<script>
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
export default {
  name: "DataFormCoach_Reserve",
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
