<template>
  <div class="un-handle-layout">
      <div class="layout-title">私教课购买</div>
      <div class="un-handle-content">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">私教课购买id:</span>
              <span class="color-danger">{{data.id}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">会员卡id:</span>
              <span class="color-danger">{{data.member_card_id}}</span>
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
              <span class="font-medium">私教课id(教练特长id):</span>
              <span class="color-danger">{{data.course_id}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">开始日期:</span>
              <el-icon name="time"></el-icon>
              <span class="color-danger">{{data.start_time}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">有效日期:</span>
              <el-icon name="time"></el-icon>
              <span class="color-danger">{{data.end_time}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">金额:</span>
              <span class="color-danger">{{data.price}}</span>
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
import ImageCropperMore from "@/components/ImageCropperMore";
import xxevent from "./xxevent";
export default {
  name: "DataItemPrivate_Course",
  components: {
    ImageCropper,
    PanThumb,
    ImageCropperMore,
    Tinymce,
  },

  props: {
    odata: {
      type: Object,
      required: false,
      default() {
        return {};
      }
    },
  },

  watch: {
    odata: {
      deep: true, // 深度监听
      async handler(newVal, oldVal) {
        this.data = newVal;
      }
    },
  },

  data() {
    return {
      data: {},
    }
  },

  // 创建的时候
  async created() {
    xxevent.bindtarget(this);
  },

  // 销毁的时候
  async destroyed() {
   xxevent.unbindtarget(this);
  },

  methods: {
    async onSendUpdateItem_Private_Course(item) {
      if (item.id == this.data.id) {
        this.data = item;
      }
    },
  }
};
</script>
