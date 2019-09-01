<template>
  <div class="un-handle-layout">
      <div class="layout-title">会员卡</div>
      <div class="un-handle-content">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">会员卡id:</span>
              <span class="color-danger">{{data.id}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">会员用户id:</span>
              <span class="color-danger">{{data.user_id}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">会员卡类型id:</span>
              <span class="color-danger">{{data.card_type_id}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">创建时间:</span>
              <el-icon name="time"></el-icon>
              <span class="color-danger">{{data.create_time}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">会员卡到期时间:</span>
              <el-icon name="time"></el-icon>
              <span class="color-danger">{{data.end_time}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">使用次数:</span>
              <span class="color-danger">{{data.use_times}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">剩余次数:</span>
              <span class="color-danger">{{data.left_times}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">卡号:</span>
              <span class="color-danger">{{data.card_num}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">会员到访次数:</span>
              <span class="color-danger">{{data.visit_times}}</span>
            </div>
          </el-col>
          <el-col :span="24">
            <div class="un-handle-item">
              <el-button type="primary"  @click="OnQiandao">签到</el-button>
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
  name: "DataItemMember_Card",
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
    async OnQiandao() {
      if (this.data.id == null) {
        this.$message.error("数据加载错误");
        return;
      }

      let res = await this.request({
        url: "/admin/visitor/store",
        data: {
          id: 0,
          member_card_id: this.data.id
        },
        method: "post"
      });

      if (res.errno == 0) {
        if (this.editTableDataNew) {
          this.$message.success("签到成功");
        } else {
          this.$message.success("更新成功");
        }
        xxevent.emit("SendUpdateTableItem_Member_Card");
      }
    },

    async onSendUpdateItem_Member_Card(item) {
      if (item.id == this.data.id) {
        this.data = item;
      }
    },
  }
};
</script>
