<template>
  <div class="app-container">
    <el-input v-model="query_item_adviser" style="width:auto;" :placeholder="'请输入姓名'"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="OnQueryAdviserClick">查询</el-button>
    <el-button type="success" icon="el-icon-plus" @click="OnNewAdviserBtnClick">新增顾问</el-button>
    <!-- 单数据 | 顾问 | -->
    <DataItemAdviser :odata="data_adviser"></DataItemAdviser>
    
    <!-- 多数据窗口 | 顾问 | -->
    <DataTableDialogAdviser>
      <DataTableAdviser :oqueryItemKey="query_key_adviser" :oqueryItemName="query_item_adviser || ''" @select="OnSelectTableAdviser" :oprecision="false"></DataTableAdviser>
    </DataTableDialogAdviser>

    <!-- 选项卡 | 顾问 | -->
    <el-tabs activeName="first" type="border-card">
      <el-tab-pane label="顾问" name="first">
        <el-container>
          <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
              <el-button type="success" icon="el-icon-plus" @click="OnNewBtnClick">新增</el-button>
            </el-header>
            <!-- <DataTableAdviser :oqueryItemKey="query_key_adviser" :oqueryItemName="data_adviser.id == null ? '':data_adviser.id + ''" @select="OnSelectTableAdviser" :oprecision="false"></DataTableAdviser> -->
          </el-aside>
        </el-container>
      </el-tab-pane>
    </el-tabs>

    <!-- 单数据编辑窗口 | 顾问 | -->
    <DataFormEditDialogAdviser>
      <DataFormEditAdviser></DataFormEditAdviser>
    </DataFormEditDialogAdviser>
    
  </div>
</template>


<script>
import { deepClone } from "@/utils";
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";

import DataItemAdviser from "./DataItemAdviser";
import DataTableDialogAdviser from "./DataTableDialogAdviser";
import DataTableAdviser from "./DataTableAdviser";
import DataFormAdviser from "./DataFormAdviser";
import DataFormEditAdviser from "./DataFormEditAdviser";
import DataFormEditDialogAdviser from "./DataFormEditDialogAdviser";
//import DataTableAdviserReserve from "./DataTableAdviser_Reserve";
import xxevent from "./xxevent";
export default {
  name: "complex",
  // 声明导入的控件
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore,
    
    DataItemAdviser,
    DataTableDialogAdviser,
    DataTableAdviser,
    DataFormAdviser,
    DataFormEditAdviser,
    DataFormEditDialogAdviser,
    //DataTableAdviserReserve
  },
  data() {
    return {
      query_key_adviser: "",
      query_item_adviser: "",
      data_adviser: {},
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
		* @brief 选择某一行的时候 | Adviser | 
		*
		* @param: row
		*/

    OnSelectTableAdviser(row) {
      this.data_adviser = row;
    },

		/**
		* @brief 查询数据 | Adviser | 
		*/
    OnQueryAdviserClick() {
      xxevent.emit("QueryTableDialogShow_Adviser", true); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Adviser", this.query_key_adviser, this.query_item_adviser)); // 查询数据项
    },

		/**
		* @brief 新增数据 | Adviser | 
		*/
    OnNewAdviserBtnClick() {
      xxevent.emit("EditDialogShow_Adviser", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Adviser")); // 新增数据
    },

  }
};
</script>
<style>
</style>


