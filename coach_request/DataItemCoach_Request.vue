<template>
  <div class="un-handle-layout">
      <div class="layout-title">教练申请请求</div>
      <div class="un-handle-content">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">教练申请请求id:</span>
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
              <span class="font-medium">价格:</span>
              <span class="color-danger">{{data.price}}</span>
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
              <span class="font-medium">带课量:</span>
              <span class="color-danger">{{data.num}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">特长:</span>
              <span class="color-danger">{{data.skill}}</span>
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
              <span class="font-medium">收入:</span>
              <span class="color-danger">{{data.income}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">浏览量:</span>
              <span class="color-danger">{{data.views}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">排序:</span>
              <span class="color-danger">{{data.paixu}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">是否是明星教练:</span>
              <span class="color-danger">{{data.is_star}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">请求时间:</span>
              <el-icon name="time"></el-icon>
              <span class="color-danger">{{data.request_time}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">请求状态//0未处理1已经处理:</span>
              <span class="color-danger">{{data.state}}</span>
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
  name: "DataItemCoach_Request",
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
