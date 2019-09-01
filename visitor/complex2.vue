<template>
  <div class="app-container">
    <el-input v-model="query_item_member" style="width:auto;" :placeholder="'请输入姓名'"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="OnQueryMemberClick">查询</el-button>
    <!-- <el-input v-model="query_item_visitor" style="width:auto;" :placeholder="'请输入姓名'"></el-input> -->
    <!-- <el-button type="primary" icon="el-icon-search" @click="OnQueryVisitorClick">查询</el-button> -->
    <el-button type="primary" icon="el-icon-search" @click="OnNewVisitorBtnClick">新增访客</el-button>
    <!-- 单数据 | 会员用户 | -->
    <DataItemMember :odata="data_member"></DataItemMember>

    <!-- 单数据 | 会员卡 | -->
    <DataItemMemberCard :odata="data_member_card"></DataItemMemberCard>
    
    <!-- 多数据窗口 | 访客 | -->
    <DataTableDialogVisitor>
      <DataTableVisitor :oprecision="false" :oqueryItemKey="query_key_visitor" :oqueryItemName="query_item_visitor || ''" @select="OnSelectTableVisitor"></DataTableVisitor>
    </DataTableDialogVisitor>

    <!-- 多数据窗口 | 会员用户 | -->
    <DataTableDialogMember>
        <DataTableMember :oprecision="false" @select="OnSelectTableMember"></DataTableMember>
        <DataTableMemberCard :oprecision="true" :oqueryItemKey="query_key_member_card" :oqueryItemName="query_item_member_card || ''" @select="OnSelectTableMember_Card"></DataTableMemberCard>
    </DataTableDialogMember>

    <!-- 多数据窗口 | 会员卡 | -->
<!--     <DataTableDialogMemberCard>
      <DataTableMemberCard :oqueryItemKey="query_key_member_card" :oqueryItemName="query_item_member_card || ''" @select="OnSelectTableMember_Card"></DataTableMemberCard>
    </DataTableDialogMemberCard> -->

    <!-- 选项卡 | 访客 | -->
    <el-tabs activeName="first" type="border-card">
      <el-tab-pane label="会员到访记录" name="first">
        <el-container>
          <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
              <!-- <el-button @click="OnNewBtnClick">新增</el-button> -->
            </el-header>
            <!-- 多数据窗口 | 访客 | -->
              <DataTableVisitor :oprecision="true" :ocanSelect="false" :oqueryItemKey="query_key_visitor" :oqueryItemName="query_item_visitor || ''" @select="OnSelectTableVisitor"></DataTableVisitor>
          </el-aside>
        </el-container>
      </el-tab-pane>
    </el-tabs>

    <!-- 单数据编辑窗口 | 访客 | -->
    <DataFormEditDialogVisitor>
      <DataFormEditVisitor></DataFormEditVisitor>
    </DataFormEditDialogVisitor>
    


    <!-- 单数据编辑窗口 | 会员用户 | -->
    <DataFormEditDialogMember>
      <DataFormEditMember></DataFormEditMember>
    </DataFormEditDialogMember>

    <!-- 单数据编辑窗口 | 会员卡 | -->
    <DataFormEditDialogMemberCard>
      <DataFormEditMemberCard></DataFormEditMemberCard>
    </DataFormEditDialogMemberCard>
  </div>
</template>


<script>
import { deepClone } from "@/utils";
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";

import DataItemVisitor from "./DataItemVisitor";
import DataTableDialogVisitor from "./DataTableDialogVisitor";
import DataTableVisitor from "./DataTableVisitor";
import DataFormVisitor from "./DataFormVisitor";
import DataFormEditVisitor from "./DataFormEditVisitor";
import DataFormEditDialogVisitor from "./DataFormEditDialogVisitor";

import DataItemMember from "./DataItemMember";
import DataTableDialogMember from "./DataTableDialogMember";
import DataTableMember from "./DataTableMember";

import DataFormEditMember from "./DataFormEditMember";
import DataFormEditDialogMember from "./DataFormEditDialogMember";
//import DataTableVisitorReserve from "./DataTableVisitor_Reserve";

import DataItemMemberCard from "./DataItemMember_Card";
import DataTableDialogMemberCard from "./DataTableDialogMember_Card";
import DataTableMemberCard from "./DataTableMember_Card";
import DataFormEditMemberCard from "./DataFormEditMember_Card";
import DataFormEditDialogMemberCard from "./DataFormEditDialogMember_Card";

import xxevent from "./xxevent";
export default {
  name: "complex",
  // 声明导入的控件
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore,
    
    DataItemVisitor,
    DataTableDialogVisitor,
    DataTableVisitor,
    DataFormVisitor,
    DataFormEditVisitor,
    DataFormEditDialogVisitor,
    //DataTableVisitorReserve
    DataItemMember,
    DataTableDialogMember,
    DataTableMember,
    DataFormEditMember,
    DataFormEditDialogMember,

    DataItemMemberCard,
    DataTableDialogMemberCard,
    DataTableMemberCard,
    DataFormEditMemberCard,
    DataFormEditDialogMemberCard,
  },
  data() {
    return {
      query_key_member: "name",
      query_item_member: "",
      data_member: {},
      tdata_member: {},
      query_key_member_card: "user_id",
      query_item_member_card: "",
      data_member_card: {},
      query_key_visitor: "member_card_id",
      query_item_visitor: "",
      data_visitor: {},
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
		* @brief 选择某一行的时候 | Visitor | 
		*
		* @param: row
		*/

    OnSelectTableVisitor(row) {
      this.data_visitor = row;
    },

		/**
		* @brief 新增数据 | Visitor | 
		*/
    OnNewVisitorBtnClick() {
      xxevent.emit("EditDialogShow_Visitor", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Visitor")); // 新增数据
    },

		/**
		* @brief 查询数据 | Visitor | 
		*/
    OnQueryVisitorClick() {
      xxevent.emit("QueryTableDialogShow_Visitor"); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Visitor", this.query_item_visitor, this.query_item_visitor)); // 查询数据项
    },



    /**
    * @brief 查询数据 | Member | 
    */
    OnQueryMemberClick() {
      xxevent.emit("QueryTableDialogShow_Member"); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Member", this.query_key_member, this.query_item_member)); // 查询数据项
    },

    /**
    * @brief 选择某一行的时候 | Member | 
    *
    * @param: row
    */

    async OnSelectTableMember(row) {

      let res = await this.request({
        url: "/admin/user/info",
        data: {
          id: row.user_id
        },
        method: "post"
      });
      row.user_name  = res.data.nickname;

      
      this.tdata_member = row;

      
      this.query_item_member_card = row.id + '';
    },

    /**
    * @brief 选择某一行的时候 | Member_Card | 
    *
    * @param: row
    */

    async OnSelectTableMember_Card(row) {
      

      let res = await this.request({
        url: "/admin/visitor/allTimes",
        data: {
          member_card_id: row.id
        },
        method: "post"
      });

      row.visit_times = res.data;

      this.query_item_visitor = row.id + '';
      this.data_member = this.tdata_member;
      this.data_member_card = row;
    },

  }
};
</script>
<style>
</style>


