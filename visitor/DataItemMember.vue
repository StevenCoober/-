<template>
  <div class="un-handle-layout">
      <div class="layout-title">会员用户</div>
      <div class="un-handle-content">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">会员用户id:</span>
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
              <span class="font-medium">生日:</span>
              <el-icon name="time"></el-icon>
              <span class="color-danger">{{data.birthday}}</span>
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
              <span class="font-medium">创建日期:</span>
              <el-icon name="time"></el-icon>
              <span class="color-danger">{{data.create_time}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">性别:</span>
              <span class="color-danger">{{data.gender}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">身份证:</span>
              <span class="color-danger">{{data.identity_card}}</span>
            </div>
          </el-col>
          
          <el-col :span="24">
            <div class="un-handle-item">
              <span class="font-medium">生活照:</span>
              <image-cropper-more :single="true" v-model="data.life_photo" :disabled="true"></image-cropper-more>
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
  name: "DataItemMember",
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
    async onSendUpdateItem_Member(item) {
      if (item.id == this.data.id) {
        this.data = item;
      }
    },
  }
};
</script>
