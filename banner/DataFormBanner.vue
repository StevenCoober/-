<template>
        <el-form :inline="true" style="border: 1px solid rgb(223, 230, 236); width: 100%; border-radius: 0px;padding-left:12px" :model="editTableData" ref="editTableData"
>
                  <el-form-item label="广告位id" style="width:100%;">
                    <span>{{editTableData.id}}</span>
                  </el-form-item>
                  <el-form-item label="图片地址" style="width:100%;">
                    <el-card class="box-card">
                      <div class="component-item">
                        <pan-thumb
                          width="100px"
                          height="100px"
                          :image="editTableData.pic_url || ''"
                        ></pan-thumb>
                      </div>
                    </el-card>
                  </el-form-item>
                  <el-form-item label="广告图片类型ad, env" style="width:100%;">
                    <span>{{editTableData.type}}</span>
                  </el-form-item>
                  <el-form-item label="排序" style="width:100%;">
                    <span>{{editTableData.paixu}}</span>
                  </el-form-item>
                  <el-form-item label="说明" style="width:100%;">
                    <span>{{editTableData.desc}}</span>
                  </el-form-item>
        </el-form>
</template>

<script>
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
export default {
  name: "DataFormBanner",
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
