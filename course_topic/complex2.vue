<template>
  <div class="app-container">
    <el-input v-model="query_item_coach" style="width:auto;" :placeholder="'请输入姓名'"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="OnQueryCoachClick">查询</el-button>
    <el-button icon="el-icon-plus" type="success" @click="OnNewCoachBtnClick">新增教练</el-button>
    <!-- 单数据 | 教练 | -->
    <DataItemCoach :odata="data_coach"></DataItemCoach>
    
    <!-- 多数据窗口 | 教练 | -->
    <DataTableDialogCoach>
      <DataTableCoach :oprecision="false" :oqueryItemKey="query_key_coach" :oqueryItemName="query_item_coach || ''" @select="OnSelectTableCoach"></DataTableCoach>
    </DataTableDialogCoach>

    <!-- 选项卡 | 教练 | -->
    <el-tabs activeName="first" type="border-card">
      <el-tab-pane label="公开课" name="first">
        <el-container>
          <el-aside width="33%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
             课程管理
             <el-input v-model="query_item_course_topic" style="width:auto;" :placeholder="'请输入课程名称'"></el-input>
             <el-button type="primary" icon="el-icon-search" @click="OnQueryCourse_topicClick">查询</el-button>
             <el-button icon="el-icon-plus" type="success" @click="OnNewCourse_topicBtnClick">新增教练公开课程主题</el-button>
             <!-- <el-button icon="el-icon-plus" type="success" @click="OnNewCourse_topicBtnClick">新增教练公开课程主题</el-button> -->
            </el-header>
            <DataTableCoursetopic :oprecision="course_topic_oprecision"  :oqueryItemKey="query_key_course_topic" :oqueryItemName="data_coach.id + ''" @select="OnSelectTableCourse_topic"></DataTableCoursetopic>
            
          </el-aside>
          <el-aside width="33%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
            公开课时间
            <el-button icon="el-icon-plus" type="success" style="float:right" @click="OnNewCourse_Topic_TimeBtnClick">新增课程主题时间管理</el-button>
            </el-header>
            <DataTableCourseTopicTime :oprecision="true"   :oqueryItemKey="query_key_course_topic_time" :oqueryItemName="data_course_topic.id == null ? '': data_course_topic.id +  ''" @select="OnSelectTableCourse_Topic_Time_Left"></DataTableCourseTopicTime>
            
          </el-aside>
          <el-aside width="33%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc; align:center;">
             课程预定情况
             <el-button icon="el-icon-plus" type="success" style="float:right" @click="OnNewCourse_Topic_Time_OrderBtnClick">新增课程主题用户预定情况管理</el-button>
            </el-header>
            <DataTableCourseTopicTimeOrder :oprecision="true"   :ocanSelect="false" :oqueryItemKey="query_key_course_topic_time_order" :oqueryItemName="data_course_topic_time_left.id == null ? '': data_course_topic_time_left.id +  ''"></DataTableCourseTopicTimeOrder>
          </el-aside>
        </el-container>
      </el-tab-pane>
      <el-tab-pane label="公开课类型" name="second">
        <el-container>
          <el-aside width="20%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc; align:center;">
             公开课类型
             <el-button icon="el-icon-plus" type="success" style="float:right" @click="OnNewCourse_Topic_TypeBtnClick">新增课程主题类型</el-button>
            </el-header>
            <DataTableCourseTopicType :oprecision="true"  @select="OnSelectTableCourse_Topic_Type">
            </DataTableCourseTopicType>

          </el-aside>
          <el-aside width="40%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc; align:center;">
             公开课时间
             <el-button icon="el-icon-plus" type="success" style="float:right" @click="OnNewCourse_Topic_TimeBtnClick">新增课程主题时间管理</el-button>
            </el-header>
            <DataTableCourseTopicTime :oprecision="true"  :oqueryItemKey="query_key_course_topic_type_id" :oqueryItemName="data_course_topic_type.id == null ? '': data_course_topic_type.id +  ''" @select="OnSelectTableCourse_Topic_Time_Right" ></DataTableCourseTopicTime>
            
          </el-aside>
          <el-aside width="40%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc; align:center;">
             课程预定情况
             <el-button icon="el-icon-plus" type="success" style="float:right" @click="OnNewCourse_Topic_Time_OrderBtnClick">新增课程主题用户预定情况管理</el-button>
            </el-header>
            <DataTableCourseTopicTimeOrder :oprecision="true"   :ocanSelect="false" :oqueryItemKey="query_key_course_topic_time_order" :oqueryItemName="data_course_topic_time_right.id == null ? '': data_course_topic_time_right.id +  ''"></DataTableCourseTopicTimeOrder>
          </el-aside>
        </el-container>
      </el-tab-pane>
    </el-tabs>

    <!-- 单数据编辑窗口 | 教练 | -->
    <DataFormEditDialogCoach>
      <DataFormEditCoach></DataFormEditCoach>
    </DataFormEditDialogCoach>
    
    <!-- 单数据编辑窗口 | 课程主题 | -->
    <DataFormEditDialogCoursetopic>
      <DataFormEditCoursetopic></DataFormEditCoursetopic>
    </DataFormEditDialogCoursetopic>

    <!-- 单数据编辑窗口 | 课程主题时间管理 | -->
    <DataFormEditDialogCourseTopicTime>
      <DataFormEditCourseTopicTime></DataFormEditCourseTopicTime>
    </DataFormEditDialogCourseTopicTime>

    <!-- 单数据编辑窗口 | 课程主题类型 | -->
    <DataFormEditDialogCourseTopicType>
      <DataFormEditCourseTopicType></DataFormEditCourseTopicType>
    </DataFormEditDialogCourseTopicType>

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

import DataItemCoach from "./DataItemCoach";
import DataTableDialogCoach from "./DataTableDialogCoach";
import DataTableCoach from "./DataTableCoach";
import DataFormCoach from "./DataFormCoach";
import DataFormEditCoach from "./DataFormEditCoach";
import DataFormEditDialogCoach from "./DataFormEditDialogCoach";

import DataTableCoursetopic from "./DataTableCourse_topic";
import DataFormEditCoursetopic from "./DataFormEditCourse_topic";
import DataFormEditDialogCoursetopic from "./DataFormEditDialogCourse_topic";

import DataTableCourseTopicTime from "./DataTableCourse_Topic_Time";
import DataFormCourseTopicTime from "./DataFormCourse_Topic_Time";
import DataFormEditCourseTopicTime from "./DataFormEditCourse_Topic_Time";
import DataFormEditDialogCourseTopicTime from "./DataFormEditDialogCourse_Topic_Time";

import DataTableCourseTopicType from "./DataTableCourse_Topic_Type";

import DataFormEditCourseTopicType from "./DataFormEditCourse_Topic_Type";
import DataFormEditDialogCourseTopicType from "./DataFormEditDialogCourse_Topic_Type";
import DataTableCourseTopicTimeOrder from "./DataTableCourse_Topic_Time_Order";
import DataFormEditCourseTopicTimeOrder from "./DataFormEditCourse_Topic_Time_Order";
import DataFormEditDialogCourseTopicTimeOrder from "./DataFormEditDialogCourse_Topic_Time_Order";
//import DataTableCoachReserve from "./DataTableCoach_Reserve";
import xxevent from "./xxevent";
export default {
  name: "complex",
  // 声明导入的控件
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore,
    
    DataItemCoach,
    DataTableDialogCoach,
    DataTableCoach,
    DataFormCoach,
    DataFormEditCoach,
    DataFormEditDialogCoach,
    //DataTableCoachReserve,
    DataTableCoursetopic,
    DataFormEditCoursetopic,
    DataFormEditDialogCoursetopic,

    DataTableCourseTopicTime,
    DataFormCourseTopicTime,
    DataFormEditCourseTopicTime,
    DataFormEditDialogCourseTopicTime,

    DataTableCourseTopicType,
    DataFormEditCourseTopicType,
    DataFormEditDialogCourseTopicType,

    DataTableCourseTopicTimeOrder,
    DataFormEditCourseTopicTimeOrder,
    DataFormEditDialogCourseTopicTimeOrder
  },
  data() {
    return {
      query_key_coach: "name",
      query_item_coach: "",

      course_topic_oprecision: true,
      query_key_course_topic: "coach_id",
      // query_key_course_topic: "name",
      query_item_course_topic: "",

      data_coach: {},
      
      data_course_topic: {},
      
      data_course_topic_time_left: {},

      query_key_course_topic_time: "course_topic_id",
      query_key_course_topic_type_id: "topic_type_id",
      data_course_topic_type: {},

      query_key_course_topic_time_order: "topic_time_id",
      data_course_topic_time_right: {},

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
		* @brief 选择某一行的时候 | Coach | 
		*
		* @param: row
		*/

    OnSelectTableCoach(row) {
      this.query_key_course_topic = "coach_id";
      this.course_topic_oprecision = true;
      this.data_coach = row;
    },

		/**
		* @brief 新增数据 | Coach | 
		*/
    OnNewCoachBtnClick() {
      xxevent.emit("EditDialogShow_Coach", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Coach")); // 新增数据
    },

		/**
		* @brief 查询数据 | Coach | 
		*/
    OnQueryCoachClick() {
      xxevent.emit("QueryTableDialogShow_Coach"); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Coach", this.query_key_coach, this.query_item_coach)); // 查询数据项
    },

    /**
    * @brief 选择某一行的时候 | Course_topic | 
    *
    * @param: row
    */

    OnSelectTableCourse_topic(row) {
      this.data_course_topic = row;
      this.data_course_topic_time_left = {};
    },

    /**
    * @brief 新增数据 | Course_topic | 
    */
    OnNewCourse_topicBtnClick() {
      xxevent.emit("EditDialogShow_Course_topic", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Course_topic")); // 新增数据
    },
    
    /**
    * @brief 新增数据 | Course_Topic_Type | 
    */
    OnNewCourse_Topic_TypeBtnClick() {
      xxevent.emit("EditDialogShow_Course_Topic_Type", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Course_Topic_Type")); // 新增数据
    },

    /**
    * @brief 选择某一行的时候 | Course_Topic_Type | 
    *
    * @param: row
    */

    OnSelectTableCourse_Topic_Type(row) {
      this.data_course_topic_type = row;
      this.data_course_topic_time_right = {};
    },

     /**
    * @brief 选择某一行的时候 左 | Course_Topic_Time | 
    *
    * @param: row
    */

    OnSelectTableCourse_Topic_Time_Left(row) {
      this.data_course_topic_time_left = row;
    },

    /**
    * @brief 选择某一行的时候 右 | Course_Topic_Time | 
    *
    * @param: row
    */

    OnSelectTableCourse_Topic_Time_Right(row) {
      this.data_course_topic_time_right = row;
    },


    /**
    * @brief 新增数据 | Course_Topic_Time | 
    */
    OnNewCourse_Topic_TimeBtnClick() {
      xxevent.emit("EditDialogShow_Course_Topic_Time", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Course_Topic_Time")); // 新增数据
    },

    /**
    * @brief 新增数据 | Course_Topic_Time_Order | 
    */
    OnNewCourse_Topic_Time_OrderBtnClick() {
      xxevent.emit("EditDialogShow_Course_Topic_Time_Order", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Course_Topic_Time_Order")); // 新增数据
    },

    /**
    * @brief 新增数据 | Course_Topic_Time | 
    */
    OnNewCourse_Topic_TimeBtnClick() {
      xxevent.emit("EditDialogShow_Course_Topic_Time", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Course_Topic_Time")); // 新增数据
    },

    /**
    * @brief 查询数据 | Course_topic | 
    */
    OnQueryCourse_topicClick() {
      this.query_key_course_topic = "name";
      this.course_topic_oprecision = false;
      xxevent.emit("QueryTableDialogShow_Course_topic", true); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Course_topic", this.query_key_course_topic, this.query_item_course_topic)); // 查询数据项
    },
  }
};
</script>
<style>
</style>


