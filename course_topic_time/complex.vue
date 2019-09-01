<template>
  <div class="app-container">
    <el-input v-model="query_item_course_topic_time" style="width:auto;" :placeholder="'请输入姓名'"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="OnQueryCourse_Topic_TimeClick">查询</el-button>
    <el-button type="primary" icon="el-icon-search" @click="OnNewCourse_Topic_TimeBtnClick">新增课程主题时间管理</el-button>
    <!-- 单数据 | 课程主题时间管理 | -->
    <DataItemCourseTopicTime :data="data_course_topic_time"></DataItemCourseTopicTime>
    
    <!-- 多数据窗口 | 课程主题时间管理 | -->
    <DataTableDialogCourseTopicTime>
      <DataTableCourseTopicTime :oqueryItemKey="query_key_course_topic_time" :oqueryItemName="query_item_course_topic_time || ''" @select="OnSelectTableCourse_Topic_Time"></DataTableCourseTopicTime>
    </DataTableDialogCourseTopicTime>

    <!-- 选项卡 | 课程主题时间管理 | -->
    <el-tabs activeName="first" type="border-card">
      <el-tab-pane label="课程主题时间管理" name="first">
        <el-container>
          <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
              <el-button @click="OnNewBtnClick">新增</el-button>
            </el-header>
            <!-- <DataTableCourseTopicTimeReserve></DataTableCourse_Topic_TimeReserve> -->
          </el-aside>
        </el-container>
      </el-tab-pane>
    </el-tabs>

    <!-- 单数据编辑窗口 | 课程主题时间管理 | -->
    <DataFormEditDialogCourseTopicTime>
      <DataFormEditCourseTopicTime></DataFormEditCourseTopicTime>
    </DataFormEditDialogCourseTopicTime>
    
  </div>
</template>


<script>
import { deepClone } from "@/utils";
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";

import DataItemCourseTopicTime from "./DataItemCourse_Topic_Time";
import DataTableDialogCourseTopicTime from "./DataTableDialogCourse_Topic_Time";
import DataTableCourseTopicTime from "./DataTableCourse_Topic_Time";
import DataFormCourseTopicTime from "./DataFormCourse_Topic_Time";
import DataFormEditCourseTopicTime from "./DataFormEditCourse_Topic_Time";
import DataFormEditDialogCourseTopicTime from "./DataFormEditDialogCourse_Topic_Time";
//import DataTableCourseTopicTimeReserve from "./DataTableCourse_Topic_Time_Reserve";
import xxevent from "./xxevent";
export default {
  name: "complex",
  // 声明导入的控件
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore,
    
    DataItemCourseTopicTime,
    DataTableDialogCourseTopicTime,
    DataTableCourseTopicTime,
    DataFormCourseTopicTime,
    DataFormEditCourseTopicTime,
    DataFormEditDialogCourseTopicTime,
    //DataTableCourseTopicTimeReserve
  },
  data() {
    return {
      query_key_course_topic_time: "",
      query_item_course_topic_time: "",
      data_course_topic_time: {},
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
		* @brief 选择某一行的时候 | Course_Topic_Time | 
		*
		* @param: row
		*/

    OnSelectTableCourse_Topic_Time(row) {
      this.data_course_topic_time = row;
    },

		/**
		* @brief 新增数据 | Course_Topic_Time | 
		*/
    OnNewCourse_Topic_TimeBtnClick() {
      xxevent.emit("EditDialogShow_Course_Topic_Time", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Course_Topic_Time")); // 新增数据
    },

		/**
		* @brief 查询数据 | Course_Topic_Time | 
		*/
    OnQueryCourse_Topic_TimeClick() {
      xxevent.emit("QueryTableDialogShow_Course_Topic_Time"); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Course_Topic_Time", this.query_key_member, this.query_item_course_topic_time)); // 查询数据项
    }

  }
};
</script>
<style>
</style>


