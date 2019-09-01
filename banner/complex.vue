<template>
  <div class="app-container">
    <el-input v-model="query_item_banner" style="width:auto;" :placeholder="'请输入姓名'"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="OnQueryBannerClick">查询</el-button>
    <el-button type="primary" icon="el-icon-search" @click="OnNewBannerBtnClick">新增广告位</el-button>
    <!-- 单数据 | 广告位 | -->
    <DataItemBanner :data="data_banner"></DataItemBanner>
    
    <!-- 多数据窗口 | 广告位 | -->
    <DataTableDialogBanner>
      <DataTableBanner :oqueryItemKey="query_key_banner" :oqueryItemName="query_item_banner || ''" @select="OnSelectTableBanner"></DataTableBanner>
    </DataTableDialogBanner>

    <!-- 选项卡 | 广告位 | -->
    <el-tabs activeName="first" type="border-card">
      <el-tab-pane label="广告位" name="first">
        <el-container>
          <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
              <el-button @click="OnNewBtnClick">新增</el-button>
            </el-header>
            <!-- <DataTableBannerReserve></DataTableBannerReserve> -->
          </el-aside>
        </el-container>
      </el-tab-pane>
    </el-tabs>

    <!-- 单数据编辑窗口 | 广告位 | -->
    <DataFormEditDialogBanner>
      <DataFormEditBanner></DataFormEditBanner>
    </DataFormEditDialogBanner>
    
  </div>
</template>


<script>
import { deepClone } from "@/utils";
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";

import DataItemBanner from "./DataItemBanner";
import DataTableDialogBanner from "./DataTableDialogBanner";
import DataTableBanner from "./DataTableBanner";
import DataFormBanner from "./DataFormBanner";
import DataFormEditBanner from "./DataFormEditBanner";
import DataFormEditDialogBanner from "./DataFormEditDialogBanner";
//import DataTableBannerReserve from "./DataTableBanner_Reserve";
import xxevent from "./xxevent";
export default {
  name: "complex",
  // 声明导入的控件
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore,
    
    DataItemBanner,
    DataTableDialogBanner,
    DataTableBanner,
    DataFormBanner,
    DataFormEditBanner,
    DataFormEditDialogBanner,
    //DataTableBannerReserve
  },
  data() {
    return {
      query_key_banner: "",
      query_item_banner: "",
      data_banner: {},
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
		* @brief 选择某一行的时候 | Banner | 
		*
		* @param: row
		*/

    OnSelectTableBanner(row) {
      this.data_banner = row;
    },

		/**
		* @brief 新增数据 | Banner | 
		*/
    OnNewBannerBtnClick() {
      xxevent.emit("EditDialogShow_Banner", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Banner")); // 新增数据
    },

		/**
		* @brief 查询数据 | Banner | 
		*/
    OnQueryBannerClick() {
      xxevent.emit("QueryTableDialogShow_Banner"); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Banner", this.query_key_member, this.query_item_banner)); // 查询数据项
    }

  }
};
</script>
<style>
</style>


