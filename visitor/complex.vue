<template>
  <div class="app-container">
    <el-input v-model="query_item_visitor" style="width:auto;" :placeholder="'请输入姓名'"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="OnQueryVisitorClick">查询</el-button>
    <el-button type="success" icon="el-icon-plus" @click="OnNewVisitorBtnClick">新增访客</el-button>
    <!-- 单数据 | 访客 | -->
    <DataItemVisitor :odata="data_visitor"></DataItemVisitor>
    
    <!-- 多数据窗口 | 访客 | -->
    <DataTableDialogVisitor>
      <DataTableVisitor :oqueryItemKey="query_key_visitor" :oqueryItemName="query_item_visitor || ''" @select="OnSelectTableVisitor"></DataTableVisitor>
    </DataTableDialogVisitor>

    <!-- 选项卡 | 访客 | -->
    <el-tabs activeName="first" type="border-card">
      <el-tab-pane label="访客" name="first">
        <el-container>
          <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
              <el-button @click="OnNewBtnClick">新增</el-button>
            </el-header>
            <!-- <DataTableVisitorReserve></DataTableVisitorReserve> -->
          </el-aside>
        </el-container>
      </el-tab-pane>
    </el-tabs>

    <!-- 单数据编辑窗口 | 访客 | -->
    <DataFormEditDialogVisitor>
      <DataFormEditVisitor></DataFormEditVisitor>
    </DataFormEditDialogVisitor>
    
  </div>
</template>


<script>
import { deepClone } from "@/utils";
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";

import DataItemVisitor from "./DataItemVisitor";
import DataTableDialogVisitor from "./DataTableDialogVisitor";
import DataTableVisitor from "./DataTableVisitor";
import DataFormVisitor from "./DataFormVisitor";
import DataFormEditVisitor from "./DataFormEditVisitor";
import DataFormEditDialogVisitor from "./DataFormEditDialogVisitor";
//import DataTableVisitorReserve from "./DataTableVisitor_Reserve";
import xxevent from "./xxevent";
export default {
  name: "complex",
  // 声明导入的控件
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore,
    
    DataItemVisitor,
    DataTableDialogVisitor,
    DataTableVisitor,
    DataFormVisitor,
    DataFormEditVisitor,
    DataFormEditDialogVisitor,
    //DataTableVisitorReserve
  },
  data() {
    return {
      query_key_visitor: "",
      query_item_visitor: "",
      data_visitor: {},
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
		* @brief 选择某一行的时候 | Visitor | 
		*
		* @param: row
		*/

    OnSelectTableVisitor(row) {
      this.data_visitor = row;
    },

		/**
		* @brief 新增数据 | Visitor | 
		*/
    OnNewVisitorBtnClick() {
      xxevent.emit("EditDialogShow_Visitor", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Visitor")); // 新增数据
    },

		/**
		* @brief 查询数据 | Visitor | 
		*/
    OnQueryVisitorClick() {
      xxevent.emit("QueryTableDialogShow_Visitor"); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Visitor", this.query_key_member, this.query_item_visitor)); // 查询数据项
    }

  }
};
</script>
<style>
</style>


