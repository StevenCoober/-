<template>
  <el-dialog
    title="健身房管理员"
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
      <el-button @click="OnClickNewItem" icon="el-icon-plus"  type="success">新增健身房管理员</el-button>
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
  name: "DataTableDialogAdmin",
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
        id: "管理员id", 
        username: "管理员用户名", 
        password: "管理员密码", 
        password_salt: "管理员秘钥", 
        nickname: "昵称", 
        last_login_ip: "上次登录ip", 
        last_login_time: "上次登录时间", 
        add_time: "添加时间", 
        update_time: "更新时间", 
        avatar: "角色", 
        admin_role_permission: "管理员权限", 
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
      xxevent.emit("SendQueryTableItem_Admin", this.queryItemKey, this.queryItemName); // 查询数据项
    },
    
    OnClickNewItem() {
      xxevent.emit("EditDialogShow_Admin", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("EditObj_Admin")); // 编辑数据
    },

    /////////////////////////////////////////////////////
    
    // 显示查询数据项窗体
    onQueryTableDialogShow_Admin() {
      this.dialogVisible = true;
    },
    // 查询数据项
    async onSendQueryTableItem_Admin(queryItemKey, queryItemName) {
      this.queryItemKey = queryItemKey || this.queryItemKey;
      this.queryItemName = queryItemName || this.queryItemName;
    },

  }
};
</script>

