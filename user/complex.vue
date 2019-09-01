<template>
  <div class="app-container">
    <el-input v-model="query_item_user" style="width:auto;" :placeholder="'请输入姓名'"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="OnQueryUserClick">查询</el-button>
    <el-button type="primary" icon="el-icon-search" @click="OnNewUserBtnClick">新增微信用户</el-button>
    <!-- 单数据 | 微信用户 | -->
    <DataItemUser :data="data_user"></DataItemUser>
    
    <!-- 多数据窗口 | 微信用户 | -->
    <DataTableDialogUser>
      <DataTableUser :oqueryItemKey="query_key_user" :oqueryItemName="query_item_user || ''" @select="OnSelectTableUser"></DataTableUser>
    </DataTableDialogUser>

    <!-- 选项卡 | 微信用户 | -->
    <el-tabs activeName="first" type="border-card">
      <el-tab-pane label="微信用户" name="first">
        <el-container>
          <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
              <el-button @click="OnNewBtnClick">新增</el-button>
            </el-header>
            <!-- <DataTableUserReserve></DataTableUserReserve> -->
          </el-aside>
        </el-container>
      </el-tab-pane>
    </el-tabs>

    <!-- 单数据编辑窗口 | 微信用户 | -->
    <DataFormEditDialogUser>
      <DataFormEditUser></DataFormEditUser>
    </DataFormEditDialogUser>
    
  </div>
</template>


<script>
import { deepClone } from "@/utils";
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";

import DataItemUser from "./DataItemUser";
import DataTableDialogUser from "./DataTableDialogUser";
import DataTableUser from "./DataTableUser";
import DataFormUser from "./DataFormUser";
import DataFormEditUser from "./DataFormEditUser";
import DataFormEditDialogUser from "./DataFormEditDialogUser";
//import DataTableUserReserve from "./DataTableUser_Reserve";
import xxevent from "./xxevent";
export default {
  name: "complex",
  // 声明导入的控件
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore,
    
    DataItemUser,
    DataTableDialogUser,
    DataTableUser,
    DataFormUser,
    DataFormEditUser,
    DataFormEditDialogUser,
    //DataTableUserReserve
  },
  data() {
    return {
      query_key_user: "",
      query_item_user: "",
      data_user: {},
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

		/**
		* @brief 选择某一行的时候 | User | 
		*
		* @param: row
		*/

    OnSelectTableUser(row) {
      this.data_user = row;
    },

		/**
		* @brief 新增数据 | User | 
		*/
    OnNewUserBtnClick() {
      xxevent.emit("EditDialogShow_User", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_User")); // 新增数据
    },

		/**
		* @brief 查询数据 | User | 
		*/
    OnQueryUserClick() {
      xxevent.emit("QueryTableDialogShow_User"); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_User", this.query_key_member, this.query_item_user)); // 查询数据项
    }

  }
};
</script>
<style>
</style>


