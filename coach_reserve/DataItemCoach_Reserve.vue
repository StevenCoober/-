<template>
  <div class="un-handle-layout">
      <div class="layout-title">教练预约订单</div>
      <div class="un-handle-content">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">教练预约订单id:</span>
              <span class="color-danger">{{data.id}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">预定的会员用户id:</span>
              <span class="color-danger">{{data.user_id}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">教练id:</span>
              <span class="color-danger">{{data.coach_id}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">预约课程id:</span>
              <span class="color-danger">{{data.skill_id}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">订单状态//0未开始1进行中2已完成:</span>
              <span class="color-danger">{{data.order_state}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">预约结果状态:</span>
              <span class="color-danger">{{data.orde_result_state}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">预约开始时间 :</span>
              <el-icon name="time"></el-icon>
              <span class="color-danger">{{data.reverse_btime}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">预约结束时间 :</span>
              <el-icon name="time"></el-icon>
              <span class="color-danger">{{data.reverse_etime}}</span>
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
  name: "DataItemCoach_Reserve",
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
