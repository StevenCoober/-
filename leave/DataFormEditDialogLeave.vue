<template>
  <div>
    <el-dialog
      title="健身房请假"
      :modal-append-to-body="false"
      :modal="true"
      width="60%"
      :visible="dialogFormVisible"
      @close="()=>{this.dialogFormVisible=false}"
    >
      <slot/>

    </el-dialog>
  </div>
</template>


<script>


import xxevent from "./xxevent";
export default {
  name: "DataFormDialogLeave",
  // 声明导入的控件
  components: {

  },


  data() {
    return {
      dialogFormVisible: false,
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
    /**
     * @brief 初始化
     */
    init() {},

    /////////////////////////////////////////////////////
    // 新增或编辑界面显示
    onEditDialogShow_Leave(isShow) {
      this.dialogFormVisible = isShow;
    },

  }
};
</script>
<style>
</style>


