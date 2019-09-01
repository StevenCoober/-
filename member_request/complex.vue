<template>
  <div class="app-container">
    <el-input v-model="query_item_member_request" style="width:auto;" :placeholder="'请输入姓名'"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="OnQueryMember_RequestClick">查询</el-button>
    <el-button type="primary" icon="el-icon-search" @click="OnNewMember_RequestBtnClick">新增会员用户申请请求</el-button>
    <!-- 单数据 | 会员用户申请请求 | -->
    <DataItemMember_Request :data="data_member_request"></DataItemMember_Request>
    
    <!-- 多数据窗口 | 会员用户申请请求 | -->
    <DataTableDialogMember_Request>
      <DataTableMember_Request :oqueryItemKey="query_key_member_request" :oqueryItemName="query_item_member_request || ''" @select="OnSelectTableMember_Request"></DataTableMember_Request>
    </DataTableDialogMember_Request>

    <!-- 选项卡 | 会员用户申请请求 | -->
    <el-tabs activeName="first" type="border-card">
      <el-tab-pane label="会员用户申请请求" name="first">
        <el-container>
          <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
              <el-button @click="OnNewBtnClick">新增</el-button>
            </el-header>
            <!-- <DataTableMember_RequestReserve></DataTableMember_RequestReserve> -->
          </el-aside>
        </el-container>
      </el-tab-pane>
    </el-tabs>

    <!-- 单数据编辑窗口 | 会员用户申请请求 | -->
    <DataFormEditDialogMember_Request>
      <DataFormEditMember_Request></DataFormEditMember_Request>
    </DataFormEditDialogMember_Request>
    
  </div>
</template>


<script>
import { deepClone } from "@/utils";
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";

import DataItemMember_Request from "./DataItemMember_Request";
import DataTableDialogMember_Request from "./DataTableDialogMember_Request";
import DataTableMember_Request from "./DataTableMember_Request";
import DataFormMember_Request from "./DataFormMember_Request";
import DataFormEditMember_Request from "./DataFormEditMember_Request";
import DataFormEditDialogMember_Request from "./DataFormEditDialogMember_Request";
//import DataTableMember_RequestReserve from "./DataTableMember_Request_Reserve";
import xxevent from "./xxevent";
export default {
  name: "complex",
  // 声明导入的控件
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore,
    
    DataItemMember_Request,
    DataTableDialogMember_Request,
    DataTableMember_Request,
    DataFormMember_Request,
    DataFormEditMember_Request,
    DataFormEditDialogMember_Request,
    //DataTableMember_RequestReserve
  },
  data() {
    return {
      query_key_member_request: "",
      query_item_member_request: "",
      data_member_request: {},
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
		* @brief 选择某一行的时候 | Member_Request | 
		*
		* @param: row
		*/

    OnSelectTableMember_Request(row) {
      this.data_member_request = row;
    },

		/**
		* @brief 新增数据 | Member_Request | 
		*/
    OnNewMember_RequestBtnClick() {
      xxevent.emit("EditDialogShow_Member_Request", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Member_Request")); // 新增数据
    },

		/**
		* @brief 查询数据 | Member_Request | 
		*/
    OnQueryMember_RequestClick() {
      xxevent.emit("QueryTableDialogShow_Member_Request"); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Member_Request", this.query_key_member, this.query_item_member_request)); // 查询数据项
    }

  }
};
</script>
<style>
</style>


