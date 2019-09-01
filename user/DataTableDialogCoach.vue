<template>
  <el-dialog
    title="教练"
    :modal-append-to-body="false"
    :modal="true"
    width="70%"
    :visible="dialogVisible"
    @close="()=>{this.dialogVisible = false;}"
    v-dialogDrag
  >
    <slot/>
    <el-col :span="24" class="toolbar" style="text-align:left">
      <el-input
        style="width:auto"
        v-model="queryItemName"
        :placeholder="'请输入' +queryItemKeyOptions[queryItemKey]"
      ></el-input>
      <!--查询类型-->
        <el-select v-model="queryItemKey" class="filter-item">
          <el-option
            v-for="(item, idx) in queryItemKeyOptions"
            :key="idx"
            :label="item"
            :value="idx"
          />
        </el-select>
      <el-button type="primary" icon="el-icon-search" @click="OnClickQuery">查询</el-button>
      <!--新增按钮-->
      <el-button @click="OnClickNewItem" icon="el-icon-plus"  type="success">新增教练</el-button>
    </el-col>
    <div slot="footer" class="dialog-footer">
      <el-button @click="()=>{this.dialogVisible = false;}">取 消</el-button>
      <el-button @click="()=>{this.dialogVisible = false;}" type="primary">确 定</el-button>
    </div>
  </el-dialog>
</template>


<script>
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import xxevent from "./xxevent";

export default {
  name: "DataTableDialogCoach",
  components: {
    ImageCropper,
    PanThumb,
    Tinymce
  },

  data() {
    return {
      dialogVisible: false,

      queryItemKey: "name", // 查询的类型名称
      queryItemName: "", // 查询的关键字
      // 查询选项
      queryItemKeyOptions: { 
        id: "教练id", 
        user_id: "微信用户id", 
        name: "姓名", 
        mobile: "联系电话", 
        birthday: "生日", 
        address: "联系地址", 
        summary: "简介", 
        skill: "特长", 
        head_img: "头像", 
        views: "浏览量", 
        paixu: "排序", 
        is_star: "是否是明星教练", 
        gender: "性别", 
      }, // 查询类型索引数据
    };
  },

    // 创建的时候
  async created() {
    xxevent.bindtarget(this);
  },

  // 销毁的时候
  async destroyed() {
    xxevent.unbindtarget(this);
  },

  methods: {
    OnClickQuery() {
      xxevent.emit("SendQueryTableItem_Coach", this.queryItemKey, this.queryItemName); // 查询数据项
    },
    
    OnClickNewItem() {
      xxevent.emit("EditDialogShow_Coach", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Coach")); // 编辑数据
    },

    /////////////////////////////////////////////////////
    
    // 显示查询数据项窗体
    onQueryTableDialogShow_Coach(isShow) {
      this.dialogVisible = isShow;
    },

    // 查询数据项
    async onSendQueryTableItem_Coach(queryItemKey, queryItemName) {
      this.queryItemKey = queryItemKey;
      this.queryItemName = queryItemName;
    },
  }
};
</script>

