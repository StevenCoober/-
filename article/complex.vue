<template>
  <div class="app-container">
    <el-input v-model="query_item_article" style="width:auto;" :placeholder="'请输入姓名'"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="OnQueryArticleClick">查询</el-button>
    <el-button type="primary" icon="el-icon-search" @click="OnNewArticleBtnClick">新增健身房文章</el-button>
    <!-- 单数据 | 健身房文章 | -->
    <DataItemArticle :data="data_article"></DataItemArticle>
    
    <!-- 多数据窗口 | 健身房文章 | -->
    <DataTableDialogArticle>
      <DataTableArticle :oqueryItemKey="query_key_article" :oqueryItemName="query_item_article || ''" @select="OnSelectTableArticle"></DataTableArticle>
    </DataTableDialogArticle>

    <!-- 选项卡 | 健身房文章 | -->
    <el-tabs activeName="first" type="border-card">
      <el-tab-pane label="健身房文章" name="first">
        <el-container>
          <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
              <el-button @click="OnNewBtnClick">新增</el-button>
            </el-header>
            <!-- <DataTableArticleReserve></DataTableArticleReserve> -->
          </el-aside>
        </el-container>
      </el-tab-pane>
    </el-tabs>

    <!-- 单数据编辑窗口 | 健身房文章 | -->
    <DataFormEditDialogArticle>
      <DataFormEditArticle></DataFormEditArticle>
    </DataFormEditDialogArticle>
    
  </div>
</template>


<script>
import { deepClone } from "@/utils";
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";

import DataItemArticle from "./DataItemArticle";
import DataTableDialogArticle from "./DataTableDialogArticle";
import DataTableArticle from "./DataTableArticle";
import DataFormArticle from "./DataFormArticle";
import DataFormEditArticle from "./DataFormEditArticle";
import DataFormEditDialogArticle from "./DataFormEditDialogArticle";
//import DataTableArticleReserve from "./DataTableArticle_Reserve";
import xxevent from "./xxevent";
export default {
  name: "complex",
  // 声明导入的控件
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore,
    
    DataItemArticle,
    DataTableDialogArticle,
    DataTableArticle,
    DataFormArticle,
    DataFormEditArticle,
    DataFormEditDialogArticle,
    //DataTableArticleReserve
  },
  data() {
    return {
      query_key_article: "",
      query_item_article: "",
      data_article: {},
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
		* @brief 选择某一行的时候 | Article | 
		*
		* @param: row
		*/

    OnSelectTableArticle(row) {
      this.data_article = row;
    },

		/**
		* @brief 新增数据 | Article | 
		*/
    OnNewArticleBtnClick() {
      xxevent.emit("EditDialogShow_Article", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Article")); // 新增数据
    },

		/**
		* @brief 查询数据 | Article | 
		*/
    OnQueryArticleClick() {
      xxevent.emit("QueryTableDialogShow_Article"); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Article", this.query_key_member, this.query_item_article)); // 查询数据项
    }

  }
};
</script>
<style>
</style>


