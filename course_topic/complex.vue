<template>
  <div class="app-container">
    <el-input v-model="query_item_course_topic" style="width:auto;" :placeholder="'请输入姓名'"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="OnQueryCourse_topicClick">查询</el-button>
    <el-button type="success" icon="el-icon-plus" @click="OnNewCourse_topicBtnClick">新增课程主题</el-button>
    <!-- 单数据 | 课程主题 | -->
    <DataItemCoursetopic :odata="data_course_topic"></DataItemCoursetopic>
    
    <!-- 多数据窗口 | 课程主题 | -->
    <DataTableDialogCoursetopic>
      <DataTableCoursetopic :oqueryItemKey="query_key_course_topic" :oqueryItemName="query_item_course_topic || ''" @select="OnSelectTableCourse_topic" :oprecision="false"></DataTableCoursetopic>
    </DataTableDialogCoursetopic>

    <!-- 选项卡 | 课程主题 | -->
    <el-tabs activeName="first" type="border-card">
      <el-tab-pane label="课程主题" name="first">
        <el-container>
          <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
              <el-button type="success" icon="el-icon-plus" @click="OnNewBtnClick">新增</el-button>
            </el-header>
            <!-- <DataTableCoursetopic :oqueryItemKey="query_key_course_topic" :oqueryItemName="data_course_topic.id == null ? '':data_course_topic.id + ''" @select="OnSelectTableCourse_topic" :oprecision="false"></DataTableCoursetopic> -->
          </el-aside>
        </el-container>
      </el-tab-pane>
    </el-tabs>

    <!-- 单数据编辑窗口 | 课程主题 | -->
    <DataFormEditDialogCoursetopic>
      <DataFormEditCoursetopic></DataFormEditCoursetopic>
    </DataFormEditDialogCoursetopic>
    
  </div>
</template>


<script>
import { deepClone } from "@/utils";
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";

import DataItemCoursetopic from "./DataItemCourse_topic";
import DataTableDialogCoursetopic from "./DataTableDialogCourse_topic";
import DataTableCoursetopic from "./DataTableCourse_topic";
import DataFormCoursetopic from "./DataFormCourse_topic";
import DataFormEditCoursetopic from "./DataFormEditCourse_topic";
import DataFormEditDialogCoursetopic from "./DataFormEditDialogCourse_topic";
//import DataTableCoursetopicReserve from "./DataTableCourse_topic_Reserve";
import xxevent from "./xxevent";
export default {
  name: "complex",
  // 声明导入的控件
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore,
    
    DataItemCoursetopic,
    DataTableDialogCoursetopic,
    DataTableCoursetopic,
    DataFormCoursetopic,
    DataFormEditCoursetopic,
    DataFormEditDialogCoursetopic,
    //DataTableCoursetopicReserve
  },
  data() {
    return {
      query_key_course_topic: "",
      query_item_course_topic: "",
      data_course_topic: {},
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
		* @brief 选择某一行的时候 | Course_topic | 
		*
		* @param: row
		*/

    OnSelectTableCourse_topic(row) {
      this.data_course_topic = row;
    },

		/**
		* @brief 查询数据 | Course_topic | 
		*/
    OnQueryCourse_topicClick() {
      xxevent.emit("QueryTableDialogShow_Course_topic", true); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Course_topic", this.query_key_course_topic, this.query_item_course_topic)); // 查询数据项
    },

		/**
		* @brief 新增数据 | Course_topic | 
		*/
    OnNewCourse_topicBtnClick() {
      xxevent.emit("EditDialogShow_Course_topic", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Course_topic")); // 新增数据
    },

  }
};
</script>
<style>
</style>


