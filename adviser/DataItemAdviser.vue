<template>
  <div class="un-handle-layout">
      <div class="layout-title">顾问</div>
      <div class="un-handle-content">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">顾问id:</span>
              <span class="color-danger">{{data.id}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">微信用户id:</span>
              <span class="color-danger">{{data.user_id}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">姓名:</span>
              <span class="color-danger">{{data.name}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">联系电话:</span>
              <span class="color-danger">{{data.mobile}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">联系地址:</span>
              <span class="color-danger">{{data.address}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">简介:</span>
              <span class="color-danger" style="white-space: pre-line;">{{data.summary}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">头像:</span>
              <div class="component-item">
                <pan-thumb :image="data.head_img || ''"></pan-thumb>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">性别:</span>
              <span class="color-danger">{{data.gender}}</span>
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
  name: "DataItemAdviser",
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
    async onSendUpdateItem_Adviser(item) {
      if (item.id == this.data.id) {
        this.data = item;
      }
    },
  }
};
</script>
