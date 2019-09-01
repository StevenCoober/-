<template>
  <div class="app-container">
    <el-input v-model="query_item_course_topic_type" style="width:auto;" :placeholder="'请输入姓名'"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="OnQueryCourse_Topic_TypeClick">查询</el-button>
    <el-button type="primary" icon="el-icon-search" @click="OnNewCourse_Topic_TypeBtnClick">新增课程主题类型</el-button>
    <!-- 单数据 | 课程主题类型 | -->
    <DataItemCourseTopicType :data="data_course_topic_type"></DataItemCourseTopicType>
    
    <!-- 多数据窗口 | 课程主题类型 | -->
    <DataTableDialogCourseTopicType>
      <DataTableCourseTopicType :oqueryItemKey="query_key_course_topic_type" :oqueryItemName="query_item_course_topic_type || ''" @select="OnSelectTableCourse_Topic_Type"></DataTableCourseTopicType>
    </DataTableDialogCourseTopicType>

    <!-- 选项卡 | 课程主题类型 | -->
    <el-tabs activeName="first" type="border-card">
      <el-tab-pane label="课程主题类型" name="first">
        <el-container>
          <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
              <el-button @click="OnNewBtnClick">新增</el-button>
            </el-header>
            <!-- <DataTableCourseTopicTypeReserve></DataTableCourse_Topic_TypeReserve> -->
          </el-aside>
        </el-container>
      </el-tab-pane>
    </el-tabs>

    <!-- 单数据编辑窗口 | 课程主题类型 | -->
    <DataFormEditDialogCourseTopicType>
      <DataFormEditCourseTopicType></DataFormEditCourseTopicType>
    </DataFormEditDialogCourseTopicType>
    
  </div>
</template>


<script>
import { deepClone } from "@/utils";
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";

import DataItemCourseTopicType from "./DataItemCourse_Topic_Type";
import DataTableDialogCourseTopicType from "./DataTableDialogCourse_Topic_Type";
import DataTableCourseTopicType from "./DataTableCourse_Topic_Type";
import DataFormCourseTopicType from "./DataFormCourse_Topic_Type";
import DataFormEditCourseTopicType from "./DataFormEditCourse_Topic_Type";
import DataFormEditDialogCourseTopicType from "./DataFormEditDialogCourse_Topic_Type";
//import DataTableCourseTopicTypeReserve from "./DataTableCourse_Topic_Type_Reserve";
import xxevent from "./xxevent";
export default {
  name: "complex",
  // 声明导入的控件
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore,
    
    DataItemCourseTopicType,
    DataTableDialogCourseTopicType,
    DataTableCourseTopicType,
    DataFormCourseTopicType,
    DataFormEditCourseTopicType,
    DataFormEditDialogCourseTopicType,
    //DataTableCourseTopicTypeReserve
  },
  data() {
    return {
      query_key_course_topic_type: "",
      query_item_course_topic_type: "",
      data_course_topic_type: {},
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
		* @brief 选择某一行的时候 | Course_Topic_Type | 
		*
		* @param: row
		*/

    OnSelectTableCourse_Topic_Type(row) {
      this.data_course_topic_type = row;
    },

		/**
		* @brief 新增数据 | Course_Topic_Type | 
		*/
    OnNewCourse_Topic_TypeBtnClick() {
      xxevent.emit("EditDialogShow_Course_Topic_Type", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Course_Topic_Type")); // 新增数据
    },

		/**
		* @brief 查询数据 | Course_Topic_Type | 
		*/
    OnQueryCourse_Topic_TypeClick() {
      xxevent.emit("QueryTableDialogShow_Course_Topic_Type"); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Course_Topic_Type", this.query_key_member, this.query_item_course_topic_type)); // 查询数据项
    }

  }
};
</script>
<style>
</style>


