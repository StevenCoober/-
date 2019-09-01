<template>
  <div class="app-container">
    <el-input v-model="query_item_leave" style="width:auto;" :placeholder="'请输入姓名'"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="OnQueryLeaveClick">查询</el-button>
    <el-button type="success" icon="el-icon-plus" @click="OnNewLeaveBtnClick">新增健身房请假</el-button>
    <!-- 单数据 | 健身房请假 | -->
    <DataItemLeave :odata="data_leave"></DataItemLeave>
    
    <!-- 多数据窗口 | 健身房请假 | -->
    <DataTableDialogLeave>
      <DataTableLeave :oqueryItemKey="query_key_leave" :oqueryItemName="query_item_leave || ''" @select="OnSelectTableLeave" :oprecision="false"></DataTableLeave>
    </DataTableDialogLeave>

    <!-- 选项卡 | 健身房请假 | -->
    <el-tabs activeName="first" type="border-card">
      <el-tab-pane label="健身房请假" name="first">
        <el-container>
          <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
              <el-button type="success" icon="el-icon-plus" @click="OnNewBtnClick">新增</el-button>
            </el-header>
          </el-aside>
        </el-container>
      </el-tab-pane>
    </el-tabs>

    <!-- 单数据编辑窗口 | 健身房请假 | -->
    <DataFormEditDialogLeave>
      <DataFormEditLeave></DataFormEditLeave>
    </DataFormEditDialogLeave>
    
  </div>
</template>


<script>
import { deepClone } from "@/utils";
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";

import DataItemLeave from "./DataItemLeave";
import DataTableDialogLeave from "./DataTableDialogLeave";
import DataTableLeave from "./DataTableLeave";
import DataFormLeave from "./DataFormLeave";
import DataFormEditLeave from "./DataFormEditLeave";
import DataFormEditDialogLeave from "./DataFormEditDialogLeave";
//import DataTableLeaveReserve from "./DataTableLeave_Reserve";
import xxevent from "./xxevent";
export default {
  name: "complex",
  // 声明导入的控件
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore,
    
    DataItemLeave,
    DataTableDialogLeave,
    DataTableLeave,
    DataFormLeave,
    DataFormEditLeave,
    DataFormEditDialogLeave,
    //DataTableLeaveReserve
  },
  data() {
    return {
      query_key_leave: "",
      query_item_leave: "",
      data_leave: {},
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
		* @brief 选择某一行的时候 | Leave | 
		*
		* @param: row
		*/

    OnSelectTableLeave(row) {
      this.data_leave = row;
    },

		/**
		* @brief 新增数据 | Leave | 
		*/
    OnNewLeaveBtnClick() {
      xxevent.emit("EditDialogShow_Leave", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Leave")); // 新增数据
    },

		/**
		* @brief 查询数据 | Leave | 
		*/
    OnQueryLeaveClick() {
      xxevent.emit("QueryTableDialogShow_Leave"); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Leave", this.query_key_leave, this.query_item_leave)); // 查询数据项
    }

  }
};
</script>
<style>
</style>


