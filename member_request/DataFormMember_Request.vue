<template>
        <el-form :inline="true" style="border: 1px solid rgb(223, 230, 236); width: 100%; border-radius: 0px;padding-left:12px" :model="editTableData" ref="editTableData"
>
                  <el-form-item label="会员用户申请请求id" style="width:100%;">
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
                    <span>{{editTableData.birthday}}</span>
                  </el-form-item>
                  <el-form-item label="联系地址" style="width:100%;">
                    <span>{{editTableData.address}}</span>
                  </el-form-item>
                  <el-form-item label="请求时间" style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{editTableData.request_time}}</span>
                  </el-form-item>
                  <el-form-item label="请求状态//0未处理1已经处理" style="width:100%;">
                    <span>{{editTableData.state}}</span>
                  </el-form-item>
        </el-form>
</template>

<script>
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
export default {
  name: "DataFormMember_Request",
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
