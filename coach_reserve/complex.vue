<template>
  <div class="app-container">
    <el-input v-model="query_item_coach_reserve" style="width:auto;" :placeholder="'请输入姓名'"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="OnQueryCoach_ReserveClick">查询</el-button>
    <el-button type="primary" icon="el-icon-search" @click="OnNewCoach_ReserveBtnClick">新增教练预约订单</el-button>
    <!-- 单数据 | 教练预约订单 | -->
    <DataItemCoach_Reserve :data="data_coach_reserve"></DataItemCoach_Reserve>
    
    <!-- 多数据窗口 | 教练预约订单 | -->
    <DataTableDialogCoach_Reserve>
      <DataTableCoach_Reserve :oqueryItemKey="query_key_coach_reserve" :oqueryItemName="query_item_coach_reserve || ''" @select="OnSelectTableCoach_Reserve"></DataTableCoach_Reserve>
    </DataTableDialogCoach_Reserve>

    <!-- 选项卡 | 教练预约订单 | -->
    <el-tabs activeName="first" type="border-card">
      <el-tab-pane label="教练预约订单" name="first">
        <el-container>
          <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
              <el-button @click="OnNewBtnClick">新增</el-button>
            </el-header>
            <!-- <DataTableCoach_ReserveReserve></DataTableCoach_ReserveReserve> -->
          </el-aside>
        </el-container>
      </el-tab-pane>
    </el-tabs>

    <!-- 单数据编辑窗口 | 教练预约订单 | -->
    <DataFormEditDialogCoach_Reserve>
      <DataFormEditCoach_Reserve></DataFormEditCoach_Reserve>
    </DataFormEditDialogCoach_Reserve>
    
  </div>
</template>


<script>
import { deepClone } from "@/utils";
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";

import DataItemCoach_Reserve from "./DataItemCoach_Reserve";
import DataTableDialogCoach_Reserve from "./DataTableDialogCoach_Reserve";
import DataTableCoach_Reserve from "./DataTableCoach_Reserve";
import DataFormCoach_Reserve from "./DataFormCoach_Reserve";
import DataFormEditCoach_Reserve from "./DataFormEditCoach_Reserve";
import DataFormEditDialogCoach_Reserve from "./DataFormEditDialogCoach_Reserve";
//import DataTableCoach_ReserveReserve from "./DataTableCoach_Reserve_Reserve";
import xxevent from "./xxevent";
export default {
  name: "complex",
  // 声明导入的控件
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore,
    
    DataItemCoach_Reserve,
    DataTableDialogCoach_Reserve,
    DataTableCoach_Reserve,
    DataFormCoach_Reserve,
    DataFormEditCoach_Reserve,
    DataFormEditDialogCoach_Reserve,
    //DataTableCoach_ReserveReserve
  },
  data() {
    return {
      query_key_coach_reserve: "",
      query_item_coach_reserve: "",
      data_coach_reserve: {},
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
		* @brief 选择某一行的时候 | Coach_Reserve | 
		*
		* @param: row
		*/

    OnSelectTableCoach_Reserve(row) {
      this.data_coach_reserve = row;
    },

		/**
		* @brief 新增数据 | Coach_Reserve | 
		*/
    OnNewCoach_ReserveBtnClick() {
      xxevent.emit("EditDialogShow_Coach_Reserve", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Coach_Reserve")); // 新增数据
    },

		/**
		* @brief 查询数据 | Coach_Reserve | 
		*/
    OnQueryCoach_ReserveClick() {
      xxevent.emit("QueryTableDialogShow_Coach_Reserve"); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Coach_Reserve", this.query_key_member, this.query_item_coach_reserve)); // 查询数据项
    }

  }
};
</script>
<style>
</style>


