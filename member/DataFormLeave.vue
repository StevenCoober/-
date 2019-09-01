<template>
        <el-form :inline="true" style="border: 1px solid rgb(223, 230, 236); width: 100%; border-radius: 0px;padding-left:12px" :model="editTableData" ref="editTableData"
>
                  <el-form-item label="健身房请假id" style="width:100%;">
                    <span>{{editTableData.id}}</span>
                  </el-form-item>
                  <el-form-item label="会员卡id" style="width:100%;">
                    <span>{{editTableData.member_card_id}}</span>
                  </el-form-item>
                  <el-form-item label="开始日期" style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{editTableData.start_time}}</span>
                  </el-form-item>
                  <el-form-item label="有效日期" style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{editTableData.end_time}}</span>
                  </el-form-item>
                  <el-form-item label="备注" style="width:100%;">
                    <span>{{editTableData.desc}}</span>
                  </el-form-item>
        </el-form>
</template>

<script>
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";
export default {
  name: "DataFormLeave",
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
