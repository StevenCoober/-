<template>
  <div class="app-container">
    <el-input v-model="query_item_coach" style="width:auto;" :placeholder="'请输入姓名'"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="OnQueryCoachClick">查询</el-button>
    <el-button icon="el-icon-plus" type="success" @click="OnNewCoachBtnClick">新增教练</el-button>
    <!-- 单数据 | 教练 | -->
    <DataItemCoach :odata="data_coach"></DataItemCoach>
    
    <!-- 多数据窗口 | 教练 | -->
    <DataTableDialogCoach>
      <!-- <DataTableCoach :queryItemKey.sync="query_key_coach" :queryItemName.sync="query_item_coach" @select="OnSelectTableCoach"></DataTableCoach> -->
      <DataTableCoach :oprecision="false"  @select="OnSelectTableCoach"></DataTableCoach>
    </DataTableDialogCoach>

    <!-- 选项卡 | 教练 | -->
    <el-tabs activeName="first" type="border-card">
      <el-tab-pane label="教练的预约" name="first">
        <el-container>
          <el-aside width="50%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
              预约信息
              <el-button icon="el-icon-plus" type="success" style="float:right" @click="OnNewCoach_ReserveBtnClick">新增教练预约</el-button>
            </el-header>
            <DataTableCoachReserve :oprecision="true"   :oqueryItemKey.sync="query_key_coach_reserve" :oqueryItemName.sync="data_coach.id + ''" @select="OnSelectTableCoach_Reserve"></DataTableCoachReserve>
          </el-aside>
          <el-aside width="50%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
              预约的会员
<!--               <el-button icon="el-icon-plus" type="success" style="float:right" @click="OnNewMemberBtnClick">新增会员用户</el-button> -->
            </el-header>
            <DataTableMember :oprecision="true" :ocanSelect="false" :oqueryItemKey="query_key_member" :oqueryItemName="data_coach_reserve.user_id == null ? '':data_coach_reserve.user_id + ''" ></DataTableMember>
          </el-aside>
        </el-container>
      </el-tab-pane>
    </el-tabs>

    <!-- 单数据编辑窗口 | 教练 | -->
    <DataFormEditDialogCoach>
      <DataFormEditCoach></DataFormEditCoach>
    </DataFormEditDialogCoach>
    
    <!-- 单数据编辑窗口 | 教练预约订单 | -->
    <DataFormEditDialogCoachReserve>
      <DataFormEditCoachReserve></DataFormEditCoachReserve>
    </DataFormEditDialogCoachReserve>

    <!-- 单数据编辑窗口 | 会员用户 | -->
    <DataFormEditDialogMember>
      <DataFormEditMember></DataFormEditMember>
    </DataFormEditDialogMember>
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

import DataTableCoachReserve from "./DataTableCoach_Reserve";
import DataFormEditCoachReserve from "./DataFormEditCoach_Reserve";
import DataFormEditDialogCoachReserve from "./DataFormEditDialogCoach_Reserve";
import DataTableMember from "./DataTableMember";

import DataFormEditMember from "./DataFormEditMember";
import DataFormEditDialogMember from "./DataFormEditDialogMember";

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
    
    DataTableCoachReserve,
    DataFormEditCoachReserve,
    DataFormEditDialogCoachReserve,
    DataTableMember,
    DataFormEditMember,
    DataFormEditDialogMember,
  },
  data() {
    return {
      query_key_coach: "name",
      query_item_coach: "",
      query_key_coach_reserve: "coach_id",
      query_key_member: "id",
      data_coach: {},
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
		* @brief 选择某一行的时候 | Coach | 
		*
		* @param: row
		*/
    async OnSelectTableCoach(row) {
      // this.data_coach = row;
      this.data_coach_reserve = {};

      let res = await this.request({
        url: "/admin/user/info",
        data: {
          id: row.user_id
        },
        method: "post"
      });
      row.user_name  = res.data.nickname;

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
    * @brief 选择某一行的时候 | Coach_Reserve | 
    *
    * @param: row
    */
    async OnSelectTableCoach_Reserve(row) {
      this.data_coach_reserve = row;
    },

    /**
    * @brief 新增数据 | Coach_Reserve | 
    */
    OnNewCoach_ReserveBtnClick() {
      xxevent.emit("EditDialogShow_Coach_Reserve", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Coach_Reserve", {coach_id : this.data_coach.id ? this.data_coach.id + '' : ''})); // 新增数据
    },

    /**
    * @brief 新增数据 | Member | 
    */
    OnNewMemberBtnClick() {
      xxevent.emit("EditDialogShow_Member", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Member")); // 新增数据
    },
  }
};
</script>
<style>
</style>
