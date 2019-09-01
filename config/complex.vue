<template>
  <div class="app-container">
    <el-input v-model="query_item_config" style="width:auto;" :placeholder="'请输入姓名'"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="OnQueryConfigClick">查询</el-button>
    <el-button type="primary" icon="el-icon-search" @click="OnNewConfigBtnClick">新增配置</el-button>
    <!-- 单数据 | 配置 | -->
    <DataItemConfig :data="data_config"></DataItemConfig>
    
    <!-- 多数据窗口 | 配置 | -->
    <DataTableDialogConfig>
      <DataTableConfig :oqueryItemKey="query_key_config" :oqueryItemName="query_item_config || ''" @select="OnSelectTableConfig"></DataTableConfig>
    </DataTableDialogConfig>

    <!-- 选项卡 | 配置 | -->
    <el-tabs activeName="first" type="border-card">
      <el-tab-pane label="配置" name="first">
        <el-container>
          <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
              <el-button @click="OnNewBtnClick">新增</el-button>
            </el-header>
            <!-- <DataTableConfigReserve></DataTableConfigReserve> -->
          </el-aside>
        </el-container>
      </el-tab-pane>
    </el-tabs>

    <!-- 单数据编辑窗口 | 配置 | -->
    <DataFormEditDialogConfig>
      <DataFormEditConfig></DataFormEditConfig>
    </DataFormEditDialogConfig>
    
  </div>
</template>


<script>
import { deepClone } from "@/utils";
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";

import DataItemConfig from "./DataItemConfig";
import DataTableDialogConfig from "./DataTableDialogConfig";
import DataTableConfig from "./DataTableConfig";
import DataFormConfig from "./DataFormConfig";
import DataFormEditConfig from "./DataFormEditConfig";
import DataFormEditDialogConfig from "./DataFormEditDialogConfig";
//import DataTableConfigReserve from "./DataTableConfig_Reserve";
import xxevent from "./xxevent";
export default {
  name: "complex",
  // 声明导入的控件
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore,
    
    DataItemConfig,
    DataTableDialogConfig,
    DataTableConfig,
    DataFormConfig,
    DataFormEditConfig,
    DataFormEditDialogConfig,
    //DataTableConfigReserve
  },
  data() {
    return {
      query_key_config: "",
      query_item_config: "",
      data_config: {},
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
		* @brief 选择某一行的时候 | Config | 
		*
		* @param: row
		*/

    OnSelectTableConfig(row) {
      this.data_config = row;
    },

		/**
		* @brief 新增数据 | Config | 
		*/
    OnNewConfigBtnClick() {
      xxevent.emit("EditDialogShow_Config", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Config")); // 新增数据
    },

		/**
		* @brief 查询数据 | Config | 
		*/
    OnQueryConfigClick() {
      xxevent.emit("QueryTableDialogShow_Config"); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Config", this.query_key_member, this.query_item_config)); // 查询数据项
    }

  }
};
</script>
<style>
</style>


