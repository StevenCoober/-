<template>
        <el-form :inline="true" style="border: 1px solid rgb(223, 230, 236); width: 100%; border-radius: 0px;padding-left:12px" :model="editTableData" ref="editTableData"
>
                  <el-form-item label="消息id" style="width:100%;">
                    <span>{{editTableData.id}}</span>
                  </el-form-item>
                  <el-form-item label="微信用户id" style="width:100%;">
                    <span>{{editTableData.user_id}}</span>
                  </el-form-item>
                  <el-form-item label="消息内容" style="width:100%;">
                    <span style="white-space: pre-line;">{{editTableData.content}}</span>
                  </el-form-item>
                  <el-form-item label="分类" style="width:100%;">
                    <span>{{editTableData.category}}</span>
                  </el-form-item>
                  <el-form-item label="创建时间" style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{editTableData.create_time}}</span>
                  </el-form-item>
                  <el-form-item label="微信用户是否显示" style="width:100%;">
                    <span>{{editTableData.is_show}}</span>
                  </el-form-item>
        </el-form>
</template>

<script>
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
export default {
  name: "DataFormMsg",
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
