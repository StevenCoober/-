<template>
        <el-form :inline="true" style="border: 1px solid rgb(223, 230, 236); width: 100%; border-radius: 0px;padding-left:12px" :model="editTableData" ref="editTableData"
>
                  <el-form-item label="会员卡类型id" style="width:100%;">
                    <span>{{editTableData.id}}</span>
                  </el-form-item>
                  <el-form-item label="会员卡名称" style="width:100%;">
                    <span>{{editTableData.card_name}}</span>
                  </el-form-item>
                  <el-form-item label="会员卡图片" style="width:100%;">
                    <image-cropper-more :single="false" v-model="editTableData.card_img || ''" :disabled="true"></image-cropper-more>
                  </el-form-item>
                  <el-form-item label="会员卡描述" style="width:100%;">
                    <span style="white-space: pre-line;">{{editTableData.card_desc}}</span>
                  </el-form-item>
                  <el-form-item label="会员卡详细描述" style="width:100%;">
                    <span style="white-space: pre-line;">{{editTableData.card_detail}}</span>
                  </el-form-item>
                  <el-form-item label="卡种类型 // 0时间卡1次数卡" style="width:100%;">
                    <span>{{editTableData.limit_type}}</span>
                  </el-form-item>
        </el-form>
</template>

<script>
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
export default {
  name: "DataFormMember_Card_Type",
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
