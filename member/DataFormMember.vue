<template>
        <el-form :inline="true" style="border: 1px solid rgb(223, 230, 236); width: 100%; border-radius: 0px;padding-left:12px" :model="editTableData" ref="editTableData"
>
                  <el-form-item label="会员用户id" style="width:100%;">
                    <span>{{editTableData.id}}</span>
                  </el-form-item>
                  <el-form-item label="微信用户id" style="width:100%;">
                    <span>{{editTableData.user_id}}</span>
                  </el-form-item>
                  <el-form-item label="姓名" style="width:100%;">
                    <span>{{editTableData.name}}</span>
                  </el-form-item>
                  <el-form-item label="联系电话" style="width:100%;">
                    <span>{{editTableData.mobile}}</span>
                  </el-form-item>
                  <el-form-item label="生日" style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{editTableData.birthday}}</span>
                  </el-form-item>
                  <el-form-item label="联系地址" style="width:100%;">
                    <span>{{editTableData.address}}</span>
                  </el-form-item>
                  <el-form-item label="创建日期" style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{editTableData.create_time}}</span>
                  </el-form-item>
                  <el-form-item label="性别" style="width:100%;">
                    <span>{{editTableData.gender}}</span>
                  </el-form-item>
                  <el-form-item label="身份证" style="width:100%;">
                    <span>{{editTableData.identity_card}}</span>
                  </el-form-item>
                  <el-form-item label="生活照" style="width:100%;">
                    <image-cropper-more :single="true" v-model="editTableData.life_photo || ''" :disabled="true"></image-cropper-more>
                  </el-form-item>
                  <el-form-item label="顾问id" style="width:100%;">
                    <span>{{editTableData.adviser_id}}</span>
                  </el-form-item>
        </el-form>
</template>

<script>
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";
export default {
  name: "DataFormMember",
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
