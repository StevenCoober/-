<template>
  <div class="app-container">
    <el-input v-model="query_item_course_topic_time_order" style="width:auto;" :placeholder="'请输入姓名'"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="OnQueryCourse_Topic_Time_OrderClick">查询</el-button>
    <el-button type="primary" icon="el-icon-search" @click="OnNewCourse_Topic_Time_OrderBtnClick">新增课程主题用户预定情况管理</el-button>
    <!-- 单数据 | 课程主题用户预定情况管理 | -->
    <DataItemCourseTopicTimeOrder :data="data_course_topic_time_order"></DataItemCourseTopicTimeOrder>
    
    <!-- 多数据窗口 | 课程主题用户预定情况管理 | -->
    <DataTableDialogCourseTopicTimeOrder>
      <DataTableCourseTopicTimeOrder :oqueryItemKey="query_key_course_topic_time_order" :oqueryItemName="query_item_course_topic_time_order || ''" @select="OnSelectTableCourse_Topic_Time_Order"></DataTableCourseTopicTimeOrder>
    </DataTableDialogCourseTopicTimeOrder>

    <!-- 选项卡 | 课程主题用户预定情况管理 | -->
    <el-tabs activeName="first" type="border-card">
      <el-tab-pane label="课程主题用户预定情况管理" name="first">
        <el-container>
          <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
              <el-button @click="OnNewBtnClick">新增</el-button>
            </el-header>
            <!-- <DataTableCourseTopicTimeOrderReserve></DataTableCourse_Topic_Time_OrderReserve> -->
          </el-aside>
        </el-container>
      </el-tab-pane>
    </el-tabs>

    <!-- 单数据编辑窗口 | 课程主题用户预定情况管理 | -->
    <DataFormEditDialogCourseTopicTimeOrder>
      <DataFormEditCourseTopicTimeOrder></DataFormEditCourseTopicTimeOrder>
    </DataFormEditDialogCourseTopicTimeOrder>
    
  </div>
</template>


<script>
import { deepClone } from "@/utils";
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";

import DataItemCourseTopicTimeOrder from "./DataItemCourse_Topic_Time_Order";
import DataTableDialogCourseTopicTimeOrder from "./DataTableDialogCourse_Topic_Time_Order";
import DataTableCourseTopicTimeOrder from "./DataTableCourse_Topic_Time_Order";
import DataFormCourseTopicTimeOrder from "./DataFormCourse_Topic_Time_Order";
import DataFormEditCourseTopicTimeOrder from "./DataFormEditCourse_Topic_Time_Order";
import DataFormEditDialogCourseTopicTimeOrder from "./DataFormEditDialogCourse_Topic_Time_Order";
//import DataTableCourseTopicTimeOrderReserve from "./DataTableCourse_Topic_Time_Order_Reserve";
import xxevent from "./xxevent";
export default {
  name: "complex",
  // 声明导入的控件
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore,
    
    DataItemCourseTopicTimeOrder,
    DataTableDialogCourseTopicTimeOrder,
    DataTableCourseTopicTimeOrder,
    DataFormCourseTopicTimeOrder,
    DataFormEditCourseTopicTimeOrder,
    DataFormEditDialogCourseTopicTimeOrder,
    //DataTableCourseTopicTimeOrderReserve
  },
  data() {
    return {
      query_key_course_topic_time_order: "",
      query_item_course_topic_time_order: "",
      data_course_topic_time_order: {},
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
		* @brief 选择某一行的时候 | Course_Topic_Time_Order | 
		*
		* @param: row
		*/

    OnSelectTableCourse_Topic_Time_Order(row) {
      this.data_course_topic_time_order = row;
    },

		/**
		* @brief 新增数据 | Course_Topic_Time_Order | 
		*/
    OnNewCourse_Topic_Time_OrderBtnClick() {
      xxevent.emit("EditDialogShow_Course_Topic_Time_Order", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Course_Topic_Time_Order")); // 新增数据
    },

		/**
		* @brief 查询数据 | Course_Topic_Time_Order | 
		*/
    OnQueryCourse_Topic_Time_OrderClick() {
      xxevent.emit("QueryTableDialogShow_Course_Topic_Time_Order"); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Course_Topic_Time_Order", this.query_key_member, this.query_item_course_topic_time_order)); // 查询数据项
    }

  }
};
</script>
<style>
</style>


