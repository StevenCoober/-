<template>
        <el-form :inline="true" style="border: 1px solid rgb(223, 230, 236); width: 100%; border-radius: 0px;padding-left:12px" :model="editTableData" ref="editTableData"
>
                  <el-form-item label="会员卡id" style="width:100%;">
                    <span>{{editTableData.id}}</span>
                  </el-form-item>
                  <el-form-item label="会员用户id" style="width:100%;">
                    <span>{{editTableData.user_id}}</span>
                  </el-form-item>
                  <el-form-item label="会员卡类型id" style="width:100%;">
                    <span>{{editTableData.card_type_id}}</span>
                  </el-form-item>
                  <el-form-item label="创建时间" style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{editTableData.create_time}}</span>
                  </el-form-item>
                  <el-form-item label="会员卡到期时间" style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{editTableData.end_time}}</span>
                  </el-form-item>
                  <el-form-item label="使用次数" style="width:100%;">
                    <span>{{editTableData.use_times}}</span>
                  </el-form-item>
                  <el-form-item label="剩余次数" style="width:100%;">
                    <span>{{editTableData.left_times}}</span>
                  </el-form-item>
                  <el-form-item label="卡号" style="width:100%;">
                    <span>{{editTableData.card_num}}</span>
                  </el-form-item>
        </el-form>
</template>

<script>
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";
export default {
  name: "DataFormMember_Card",
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
