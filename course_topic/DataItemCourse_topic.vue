<template>
  <div class="un-handle-layout">
      <div class="layout-title">课程主题</div>
      <div class="un-handle-content">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">课程主题id:</span>
              <span class="color-danger">{{data.id}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">详细名称:</span>
              <span class="color-danger">{{data.name}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">顶部导航:</span>
              <image-cropper-more :single="false" v-model="editTableData.top_ad" :disabled="true"></image-cropper-more>
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
              <span class="font-medium">课程主题类型id:</span>
              <span class="color-danger">{{data.topic_type_id}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">简介:</span>
              <span class="color-danger" style="white-space: pre-line;">{{data.desc}}</span>
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
              <span class="font-medium">节数:</span>
              <span class="color-danger">{{data.class_num}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">金额:</span>
              <span class="color-danger">{{data.class_price}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">详细描述:</span>
              <div class="color-danger" v-html="props.row.detail" />
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
  name: "DataItemCourse_topic",
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
    async onSendUpdateItem_Course_topic(item) {
      if (item.id == this.data.id) {
        this.data = item;
      }
    },
  }
};
</script>
