<template>
        <el-form :inline="true" style="border: 1px solid rgb(223, 230, 236); width: 100%; border-radius: 0px;padding-left:12px" :model="editTableData" ref="editTableData"
>
                  <el-form-item label="配置id" style="width:100%;">
                    <span>{{editTableData.id}}</span>
                  </el-form-item>
                  <el-form-item label="配置说明" style="width:100%;">
                    <span>{{editTableData.desc}}</span>
                  </el-form-item>
                  <el-form-item label="项关键字" style="width:100%;">
                    <span>{{editTableData.key}}</span>
                  </el-form-item>
                  <el-form-item label="项关键词" style="width:100%;">
                    <span style="white-space: pre-line;">{{editTableData.value}}</span>
                  </el-form-item>
        </el-form>
</template>

<script>
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
export default {
  name: "DataFormConfig",
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
