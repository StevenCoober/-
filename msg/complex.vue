<template>
  <div class="app-container">
    <el-input v-model="query_item_msg" style="width:auto;" :placeholder="'请输入姓名'"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="OnQueryMsgClick">查询</el-button>
    <el-button type="primary" icon="el-icon-search" @click="OnNewMsgBtnClick">新增消息</el-button>
    <!-- 单数据 | 消息 | -->
    <DataItemMsg :data="data_msg"></DataItemMsg>
    
    <!-- 多数据窗口 | 消息 | -->
    <DataTableDialogMsg>
      <DataTableMsg :oqueryItemKey="query_key_msg" :oqueryItemName="query_item_msg || ''" @select="OnSelectTableMsg"></DataTableMsg>
    </DataTableDialogMsg>

    <!-- 选项卡 | 消息 | -->
    <el-tabs activeName="first" type="border-card">
      <el-tab-pane label="消息" name="first">
        <el-container>
          <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
              <el-button @click="OnNewBtnClick">新增</el-button>
            </el-header>
            <!-- <DataTableMsgReserve></DataTableMsgReserve> -->
          </el-aside>
        </el-container>
      </el-tab-pane>
    </el-tabs>

    <!-- 单数据编辑窗口 | 消息 | -->
    <DataFormEditDialogMsg>
      <DataFormEditMsg></DataFormEditMsg>
    </DataFormEditDialogMsg>
    
  </div>
</template>


<script>
import { deepClone } from "@/utils";
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";

import DataItemMsg from "./DataItemMsg";
import DataTableDialogMsg from "./DataTableDialogMsg";
import DataTableMsg from "./DataTableMsg";
import DataFormMsg from "./DataFormMsg";
import DataFormEditMsg from "./DataFormEditMsg";
import DataFormEditDialogMsg from "./DataFormEditDialogMsg";
//import DataTableMsgReserve from "./DataTableMsg_Reserve";
import xxevent from "./xxevent";
export default {
  name: "complex",
  // 声明导入的控件
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore,
    
    DataItemMsg,
    DataTableDialogMsg,
    DataTableMsg,
    DataFormMsg,
    DataFormEditMsg,
    DataFormEditDialogMsg,
    //DataTableMsgReserve
  },
  data() {
    return {
      query_key_msg: "",
      query_item_msg: "",
      data_msg: {},
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
		* @brief 选择某一行的时候 | Msg | 
		*
		* @param: row
		*/

    OnSelectTableMsg(row) {
      this.data_msg = row;
    },

		/**
		* @brief 新增数据 | Msg | 
		*/
    OnNewMsgBtnClick() {
      xxevent.emit("EditDialogShow_Msg", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Msg")); // 新增数据
    },

		/**
		* @brief 查询数据 | Msg | 
		*/
    OnQueryMsgClick() {
      xxevent.emit("QueryTableDialogShow_Msg"); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Msg", this.query_key_member, this.query_item_msg)); // 查询数据项
    }

  }
};
</script>
<style>
</style>


