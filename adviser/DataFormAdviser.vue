<template>
        <el-form :inline="true" style="border: 1px solid rgb(223, 230, 236); width: 100%; border-radius: 0px;padding-left:12px" :model="editTableData" ref="editTableData"
>
                  <el-form-item label="顾问id" style="width:100%;">
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
                  <el-form-item label="联系地址" style="width:100%;">
                    <span>{{editTableData.address}}</span>
                  </el-form-item>
                  <el-form-item label="简介" style="width:100%;">
                    <span style="white-space: pre-line;">{{editTableData.summary}}</span>
                  </el-form-item>
                  <el-form-item label="头像" style="width:100%;">
                    <el-card class="box-card">
                      <div class="component-item">
                        <pan-thumb
                          width="100px"
                          height="100px"
                          :image="editTableData.head_img || ''"
                        ></pan-thumb>
                      </div>
                    </el-card>
                  </el-form-item>
                  <el-form-item label="性别" style="width:100%;">
                    <span>{{editTableData.gender}}</span>
                  </el-form-item>
        </el-form>
</template>

<script>
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";
export default {
  name: "DataFormAdviser",
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
