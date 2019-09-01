<template>
  <el-dialog
    title="私教课购买"
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
      <el-button @click="OnClickNewItem" icon="el-icon-plus"  type="success">新增私教课购买</el-button>
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
  name: "DataTableDialogPrivate_Course",
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
        id: "私教课购买id", 
        member_card_id: "会员卡id", 
        coach_id: "教练id", 
        course_id: "私教课id(教练特长id)", 
        start_time: "开始日期", 
        end_time: "有效日期", 
        price: "金额", 
        course_type: "私教课购买类型", 
        use_times: "使用次数", 
        left_times: "剩余次数", 
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
      xxevent.emit("SendQueryTableItem_Private_Course", this.queryItemKey, this.queryItemName); // 查询数据项
    },
    
    OnClickNewItem() {
      xxevent.emit("EditDialogShow_Private_Course", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Private_Course")); // 编辑数据
    },

    /////////////////////////////////////////////////////
    
    // 显示查询数据项窗体
    onQueryTableDialogShow_Private_Course(isShow) {
      this.dialogVisible = isShow;
    },
    // 查询数据项
    async onSendQueryTableItem_Private_Course(queryItemKey, queryItemName) {
      this.queryItemKey = queryItemKey
      this.queryItemName = queryItemName
    },

  }
};
</script>

