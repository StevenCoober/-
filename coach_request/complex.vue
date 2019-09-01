<template>
  <div class="app-container">
    <el-input v-model="query_item_coach_request" style="width:auto;" :placeholder="'请输入姓名'"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="OnQueryCoach_RequestClick">查询</el-button>
    <el-button type="primary" icon="el-icon-search" @click="OnNewCoach_RequestBtnClick">新增教练申请请求</el-button>
    <!-- 单数据 | 教练申请请求 | -->
    <DataItemCoach_Request :data="data_coach_request"></DataItemCoach_Request>
    
    <!-- 多数据窗口 | 教练申请请求 | -->
    <DataTableDialogCoach_Request>
      <DataTableCoach_Request :oqueryItemKey="query_key_coach_request" :oqueryItemName="query_item_coach_request || ''" @select="OnSelectTableCoach_Request"></DataTableCoach_Request>
    </DataTableDialogCoach_Request>

    <!-- 选项卡 | 教练申请请求 | -->
    <el-tabs activeName="first" type="border-card">
      <el-tab-pane label="教练申请请求" name="first">
        <el-container>
          <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
              <el-button @click="OnNewBtnClick">新增</el-button>
            </el-header>
            <!-- <DataTableCoach_RequestReserve></DataTableCoach_RequestReserve> -->
          </el-aside>
        </el-container>
      </el-tab-pane>
    </el-tabs>

    <!-- 单数据编辑窗口 | 教练申请请求 | -->
    <DataFormEditDialogCoach_Request>
      <DataFormEditCoach_Request></DataFormEditCoach_Request>
    </DataFormEditDialogCoach_Request>
    
  </div>
</template>


<script>
import { deepClone } from "@/utils";
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";

import DataItemCoach_Request from "./DataItemCoach_Request";
import DataTableDialogCoach_Request from "./DataTableDialogCoach_Request";
import DataTableCoach_Request from "./DataTableCoach_Request";
import DataFormCoach_Request from "./DataFormCoach_Request";
import DataFormEditCoach_Request from "./DataFormEditCoach_Request";
import DataFormEditDialogCoach_Request from "./DataFormEditDialogCoach_Request";
//import DataTableCoach_RequestReserve from "./DataTableCoach_Request_Reserve";
import xxevent from "./xxevent";
export default {
  name: "complex",
  // 声明导入的控件
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore,
    
    DataItemCoach_Request,
    DataTableDialogCoach_Request,
    DataTableCoach_Request,
    DataFormCoach_Request,
    DataFormEditCoach_Request,
    DataFormEditDialogCoach_Request,
    //DataTableCoach_RequestReserve
  },
  data() {
    return {
      query_key_coach_request: "",
      query_item_coach_request: "",
      data_coach_request: {},
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
		* @brief 选择某一行的时候 | Coach_Request | 
		*
		* @param: row
		*/

    OnSelectTableCoach_Request(row) {
      this.data_coach_request = row;
    },

		/**
		* @brief 新增数据 | Coach_Request | 
		*/
    OnNewCoach_RequestBtnClick() {
      xxevent.emit("EditDialogShow_Coach_Request", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Coach_Request")); // 新增数据
    },

		/**
		* @brief 查询数据 | Coach_Request | 
		*/
    OnQueryCoach_RequestClick() {
      xxevent.emit("QueryTableDialogShow_Coach_Request"); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Coach_Request", this.query_key_member, this.query_item_coach_request)); // 查询数据项
    }

  }
};
</script>
<style>
</style>


