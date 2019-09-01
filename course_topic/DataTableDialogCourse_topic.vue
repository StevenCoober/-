<template>
  <el-dialog
    title="课程主题"
    :modal-append-to-body="false"
    :modal="true"
    width="60%"
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
      <el-button @click="OnClickNewItem" icon="el-icon-plus"  type="success">新增课程主题</el-button>
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
  name: "DataTableDialogCourse_topic",
  components: {
    ImageCropper,
    PanThumb,
    Tinymce
  },

  data() {
    return {
      dialogVisible: false,
      queryItemKey: "id", // 查询的类型名称
      queryItemName: "", // 查询的关键字
      // 查询选项
      queryItemKeyOptions: { 
        id: "课程主题id", 
        name: "详细名称", 
        top_ad: "顶部导航", 
        coach_id: "教练id", 
        topic_type_id: "课程主题类型id", 
        desc: "简介", 
        add_time: "添加时间", 
        class_num: "节数", 
        class_price: "金额", 
        detail: "详细描述", 
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
      xxevent.emit("SendQueryTableItem_Course_topic", this.queryItemKey, this.queryItemName); // 查询数据项
    },
    
    OnClickNewItem() {
      xxevent.emit("EditDialogShow_Course_topic", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Course_topic")); // 编辑数据
    },

    /////////////////////////////////////////////////////
    
    // 显示查询数据项窗体
    onQueryTableDialogShow_Course_topic() {
      this.dialogVisible = true;
    },
    // 查询数据项
    async onSendQueryTableItem_Course_topic(queryItemKey, queryItemName) {
      this.queryItemKey = queryItemKey || this.queryItemKey;
      this.queryItemName = queryItemName || this.queryItemName;
    },

  }
};
</script>

