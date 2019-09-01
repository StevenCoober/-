<template>
  <div class="app-container">
    <el-input v-model="query_item_member" style="width:auto;" :placeholder="'请输入姓名'"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="OnQueryMemberClick">查询</el-button>
    <el-button icon="el-icon-plus" type="success" @click="OnNewMemberBtnClick">新增微信会员用户</el-button>
    <!-- 单数据 | 会员用户 | -->
    <DataItemMember :odata="data_member"></DataItemMember>
    
    <!-- 多数据窗口 | 会员用户 | -->
    <DataTableDialogMember>
      <DataTableMember :oprecision="false"  @select="OnSelectTableMember"></DataTableMember>
    </DataTableDialogMember>

    <!-- 选项卡 | 会员用户 | -->
    <el-tabs activeName="first" type="border-card">
      <el-tab-pane label="会员卡" name="first">
        <el-container>
          <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
          <!--     <el-button icon="el-icon-plus" type="success" style="float:right" @click="OnNewMember_CardBtnClick">新增会员卡</el-button> -->
            </el-header>
            <!-- 多数据窗口 | 会员卡 | -->
            <DataTableMemberCard :oprecision="true"  :ocanSelect="true" :oqueryItemKey="query_key_member_card" :oqueryItemName="data_member.id == null ? '':data_member.id + ''" @select="OnSelectTableMember_Card1"></DataTableMemberCard>
            <div class="un-handle-layout">
              <div class="layout-title">私教课管理</div>
              <el-button type="success" icon="el-icon-plus" @click="OnNewPrivate_CourseBtn1Click">新增私教课购买</el-button>
            </div>
            <DataTablePrivateCourse :oprecision="true" :ocanSelect="false" :oqueryItemKey="query_key_private_course" :oqueryItemName="data_member_card1.id == null ? '':data_member_card1.id + ''"></DataTablePrivateCourse>
           
          </el-aside>
        </el-container>
      </el-tab-pane>
      <el-tab-pane label="会员卡类型" name="second">
        <el-container>
          <el-aside width="15%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
              <el-button type="success" icon="el-icon-plus" @click="OnNewMember_Card_TypeBtnClick">新增会员卡类型</el-button>
            </el-header>
            <DataTableMemberCardType :oprecision="true"  @select="OnSelectTableMemberType"> </DataTableMemberCardType>

          </el-aside>
          <el-aside width="85%" style="background-color: rgb(238, 241, 246)">
            <!-- <el-header style="font-size: 12px;  background-color: #f2f6fc;">
             
            </el-header> -->
            
            <!-- 多数据窗口 | 会员卡 | -->
            <DataTableMemberCard :oprecision="true"  :oqueryItemKey="query_key_member_card_type" :oqueryItemName="data_member_card_type == null ? '':data_member_card_type + ''" @select="OnSelectTableMember_Card"></DataTableMemberCard>
            <div class="un-handle-layout">
              <div class="layout-title">私教课管理</div>
              <el-button type="success" icon="el-icon-plus" @click="OnNewPrivate_CourseBtn2Click">新增私教课购买</el-button>
            </div>
            <DataTablePrivateCourse :oprecision="true" :ocanSelect="false" :oqueryItemKey="query_key_private_course" :oqueryItemName="data_member_card.id == null ? '':data_member_card.id + ''"></DataTablePrivateCourse>
          </el-aside>
        </el-container>
      </el-tab-pane>
      <el-tab-pane label="会员录入" name="third">
        <el-container>
          <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
              <el-button type="success" style="float:right" icon="el-icon-plus" @click="OnNewMember_RecordBtnClick">新会员录入</el-button>
            </el-header>
            <DataTableMemberRecord :oprecision="true"  ></DataTableMemberRecord>
          </el-aside>
          
        </el-container>
      </el-tab-pane>
      <el-tab-pane label="健身房请假" name="fourth">
        <el-container>
          <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
              <el-button type="success" icon="el-icon-plus" @click="OnNewLeaveBtnClick">新增健身房请假</el-button>
            </el-header>
            <DataTableLeave  :oqueryItemKey="query_key_leave" :oqueryItemName="data_leave.id == null ? '':data_leave.id + ''" :oprecision="false"></DataTableLeave>
          </el-aside>
        </el-container>
      </el-tab-pane>



    </el-tabs>

    <!-- 单数据编辑窗口 | 会员用户 | -->
    <DataFormEditDialogMember>
      <DataFormEditMember></DataFormEditMember>
    </DataFormEditDialogMember>

    <!-- 单数据编辑窗口 | 会员用户重置版 | -->
    <DataFormEditDialogMemberMore>
      <DataFormEditMemberMore></DataFormEditMemberMore>
    </DataFormEditDialogMemberMore>
    
    <!-- 单数据编辑窗口 | 会员卡 | -->
    <DataFormEditDialogMemberCard>
      <DataFormEditMemberCard></DataFormEditMemberCard>
    </DataFormEditDialogMemberCard>

    <!-- 单数据编辑窗口 | 会员卡类型 | -->
    <DataFormEditDialogMemberCardType>
      <DataFormEditMemberCardType></DataFormEditMemberCardType>
    </DataFormEditDialogMemberCardType>

    <!-- 单数据编辑窗口 | 会员用户录入 | -->
    <DataFormEditDialogMemberRecord>
      <DataFormEditMemberRecord></DataFormEditMemberRecord>
    </DataFormEditDialogMemberRecord>

    <!-- 单数据编辑窗口 | 会员用户录入More | -->
    <DataFormEditDialogMemberRecordMore>
      <DataFormEditMemberRecordMore></DataFormEditMemberRecordMore>
    </DataFormEditDialogMemberRecordMore>

    <!-- 单数据编辑窗口 | 健身房请假 | -->
    <DataFormEditDialogLeave>
      <DataFormEditLeave></DataFormEditLeave>
    </DataFormEditDialogLeave>

    <!-- 单数据编辑窗口 | 私教课购买 | -->
    <DataFormEditDialogPrivateCourse>
      <DataFormEditPrivateCourse></DataFormEditPrivateCourse>
    </DataFormEditDialogPrivateCourse>
  </div>
</template>


<script>
import { deepClone } from "@/utils";
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";

import DataItemMember from "./DataItemMember";
import DataTableDialogMember from "./DataTableDialogMember";
import DataTableMember from "./DataTableMember";
import DataFormMember from "./DataFormMember";
import DataFormEditMember from "./DataFormEditMember";
import DataFormEditDialogMember from "./DataFormEditDialogMember";
//import DataTableMemberReserve from "./DataTableMember_Reserve";

import DataTableMemberCard from "./DataTableMember_Card";

import DataFormEditMemberCard from "./DataFormEditMember_Card";
import DataFormEditDialogMemberCard from "./DataFormEditDialogMember_Card";
import DataTableCardType from "./DataTableCardType";
import DataFormEditMemberCardType from "./DataFormEditMember_Card_Type";
import DataFormEditDialogMemberCardType from "./DataFormEditDialogMember_Card_Type";

import DataTableMemberCardType from "./DataTableMember_Card_Type";
import DataFormEditMemberMore from "./DataFormEditMemberMore";
import DataFormEditDialogMemberMore from "./DataFormEditDialogMemberMore";

import DataFormEditMemberRecord from "./DataFormEditMember_Record";
import DataFormEditDialogMemberRecord from "./DataFormEditDialogMember_Record";
import DataTableMemberRecord from "./DataTableMember_Record";
import DataFormEditMemberRecordMore from "./DataFormEditMember_Record_More";
import DataFormEditDialogMemberRecordMore from "./DataFormEditDialogMember_Record_More";

import DataItemLeave from "./DataItemLeave";
import DataTableDialogLeave from "./DataTableDialogLeave";
import DataTableLeave from "./DataTableLeave";
import DataFormLeave from "./DataFormLeave";
import DataFormEditLeave from "./DataFormEditLeave";
import DataFormEditDialogLeave from "./DataFormEditDialogLeave";

import DataItemPrivateCourse from "./DataItemPrivate_Course";
import DataTableDialogPrivateCourse from "./DataTableDialogPrivate_Course";
import DataTablePrivateCourse from "./DataTablePrivate_Course";
import DataFormPrivateCourse from "./DataFormPrivate_Course";
import DataFormEditPrivateCourse from "./DataFormEditPrivate_Course";
import DataFormEditDialogPrivateCourse from "./DataFormEditDialogPrivate_Course";

import xxevent from "./xxevent";
export default {
  name: "complex",
  // 声明导入的控件
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore,
    
    DataItemMember,
    DataTableDialogMember,
    DataTableMember,
    DataFormMember,
    DataFormEditMember,
    DataFormEditDialogMember,
    //DataTableMemberReserve

    DataTableMemberCard,
    DataFormEditMemberCard,
    DataFormEditDialogMemberCard,
    DataTableCardType,
    DataFormEditMemberCardType,
    DataFormEditDialogMemberCardType,
    DataTableMemberCardType,
    DataFormEditMemberMore,
    DataFormEditDialogMemberMore,

    DataTableMemberRecord,
    DataFormEditMemberRecord,
    DataFormEditDialogMemberRecord,
    DataFormEditMemberRecordMore,
    DataFormEditDialogMemberRecordMore,

    DataItemLeave,
    DataTableDialogLeave,
    DataTableLeave,
    DataFormLeave,
    DataFormEditLeave,
    DataFormEditDialogLeave,

    DataItemPrivateCourse,
    DataTableDialogPrivateCourse,
    DataTablePrivateCourse,
    DataFormPrivateCourse,
    DataFormEditPrivateCourse,
    DataFormEditDialogPrivateCourse,
  },
  data() {
    return {
      query_key_member: "name",

      query_item_member: "",
      data_member: {},

      query_key_member_card: "user_id",
      
      query_key_member_card_type: "card_type_id",
      data_member_card_type: {},

      query_key_leave: "",
      query_item_leave: "",
      data_leave: {},

      query_key_private_course: "member_card_id",
      query_item_private_course: "",
      data_private_course: {},

      query_item_member_card: "",

      data_member_card1: {},
      data_member_card: {},
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
		* @brief 选择某一行的时候 | Member | 
		*
		* @param: row
		*/

    async OnSelectTableMember(row) {
      // this.data_member = row;


      let res = await this.request({
        url: "/admin/user/info",
        data: {
          id: row.user_id
        },
        method: "post"
      });
      row.user_name  = res.data.nickname;

      res = await this.request({
        url: "/admin/adviser/info",
        data: {
          id: row.adviser_id
        },
        method: "post"
      });
      row.adviser_name  = res.data.name;

      this.data_member = row;
    },

		/**
		* @brief 新增数据 | Member | 
		*/
    OnNewMemberBtnClick() {
      xxevent.emit("EditDialogShow_MemberMore", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_MemberMore")); // 新增数据
    },

		/**
		* @brief 查询数据 | Member | 
		*/
    OnQueryMemberClick() {
      xxevent.emit("QueryTableDialogShow_Member"); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Member", this.query_key_member, this.query_item_member)); // 查询数据项
    },

    /**
    * @brief 选择某一行的时候 | Member_Card | 
    *
    * @param: row
    */

    OnSelectTableMember_Card1(row) {
      this.data_member_card1 = row;
    },

    /**
    * @brief 选择某一行的时候 | Member_Card | 
    *
    * @param: row
    */

    OnSelectTableMember_Card(row) {
      this.data_member_card = row;
    },


    /**
    * @brief 新增数据 | Member_Card | 
    */
    OnNewMember_CardBtnClick() {
      xxevent.emit("EditDialogShow_Member_Card", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Member_Card")); // 新增数据
    },
    
    /**
    * @brief 会员卡类型 | Member_Card | 
    */
    OnSelectTableMemberType(row) {
      this.data_member_card_type = row.id;
    },

    /**
    * @brief 新增数据 | Member_Card_Type | 
    */
    OnNewMember_Card_TypeBtnClick() {
      xxevent.emit("EditDialogShow_Member_Card_Type", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Member_Card_Type")); // 新增数据
    },

    /**
    * @brief 新增数据 | Member_Record | 
    */
    OnNewMember_RecordBtnClick() {
      xxevent.emit("EditDialogShow_Member_Record_More", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Member_Record_More")); // 新增数据
    },

    /**
    * @brief 新增数据 | Leave | 
    */
    OnNewLeaveBtnClick() {
      xxevent.emit("EditDialogShow_Leave", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Leave")); // 新增数据
    },

    /**
    * @brief 新增数据 | Private_Course | 
    */
    OnNewPrivate_CourseBtn1Click() {
      xxevent.emit("EditDialogShow_Private_Course", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Private_Course", {
        member_card_id: this.data_member_card1.id==null?"":this.data_member_card1.id + ""
      })); // 新增数据
    },

    /**
    * @brief 新增数据 | Private_Course | 
    */
    OnNewPrivate_CourseBtn2Click() {
      xxevent.emit("EditDialogShow_Private_Course", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Private_Course", {
        member_card_id: this.data_member_card.id==null?"":this.data_member_card.id + ""
      })); // 新增数据
    },

    
  }
};
</script>
<style>
</style>


