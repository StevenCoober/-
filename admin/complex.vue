<template>
  <div class="app-container">
    <el-input v-model="query_item_admin" style="width:auto;" :placeholder="'请输入姓名'"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="OnQueryAdminClick">查询</el-button>
    <el-button type="primary" icon="el-icon-search" @click="OnNewAdminBtnClick">新增健身房管理员</el-button>
    <!-- 单数据 | 健身房管理员 | -->
    <DataItemAdmin :data="data_admin"></DataItemAdmin>
    
    <!-- 多数据窗口 | 健身房管理员 | -->
    <DataTableDialogAdmin>
      <DataTableAdmin :oqueryItemKey="query_key_admin" :oqueryItemName="query_item_admin || ''" @select="OnSelectTableAdmin"></DataTableAdmin>
    </DataTableDialogAdmin>

    <!-- 选项卡 | 健身房管理员 | -->
    <el-tabs activeName="first" type="border-card">
      <el-tab-pane label="健身房管理员" name="first">
        <el-container>
          <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
              <el-button @click="OnNewBtnClick">新增</el-button>
            </el-header>
            <!-- <DataTableAdminReserve></DataTableAdminReserve> -->
          </el-aside>
        </el-container>
      </el-tab-pane>
    </el-tabs>

    <!-- 单数据编辑窗口 | 健身房管理员 | -->
    <DataFormEditDialogAdmin>
      <DataFormEditAdmin></DataFormEditAdmin>
    </DataFormEditDialogAdmin>
    
  </div>
</template>


<script>
import { deepClone } from "@/utils";
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";

import DataItemAdmin from "./DataItemAdmin";
import DataTableDialogAdmin from "./DataTableDialogAdmin";
import DataTableAdmin from "./DataTableAdmin";
import DataFormAdmin from "./DataFormAdmin";
import DataFormEditAdmin from "./DataFormEditAdmin";
import DataFormEditDialogAdmin from "./DataFormEditDialogAdmin";
//import DataTableAdminReserve from "./DataTableAdmin_Reserve";
import xxevent from "./xxevent";
export default {
  name: "complex",
  // 声明导入的控件
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore,
    
    DataItemAdmin,
    DataTableDialogAdmin,
    DataTableAdmin,
    DataFormAdmin,
    DataFormEditAdmin,
    DataFormEditDialogAdmin,
    //DataTableAdminReserve
  },
  data() {
    return {
      query_key_admin: "",
      query_item_admin: "",
      data_admin: {},
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
		* @brief 选择某一行的时候 | Admin | 
		*
		* @param: row
		*/

    OnSelectTableAdmin(row) {
      this.data_admin = row;
    },

		/**
		* @brief 新增数据 | Admin | 
		*/
    OnNewAdminBtnClick() {
      xxevent.emit("EditDialogShow_Admin", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Admin")); // 新增数据
    },

		/**
		* @brief 查询数据 | Admin | 
		*/
    OnQueryAdminClick() {
      xxevent.emit("QueryTableDialogShow_Admin"); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Admin", this.query_key_member, this.query_item_admin)); // 查询数据项
    }

  }
};
</script>
<style>
</style>


