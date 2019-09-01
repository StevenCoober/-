<template>
  <div class="app-container">
    <el-input v-model="query_item_member_card" style="width:auto;" :placeholder="'请输入会员卡卡号'"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="OnQueryMember_CardClick">查询</el-button>
    <el-button type="success" icon="el-icon-plus" @click="OnNewMember_CardBtnClick">新增会员卡</el-button>

    <!-- 单数据 | 会员卡 | -->
    <DataItemMemberCard :odata="data_member_card"></DataItemMemberCard>
    
    <!-- 多数据窗口 | 会员卡 | -->
    <DataTableDialogMemberCard>
      <DataTableMemberCard :oqueryItemKey="query_key_member_card" :oqueryItemName="query_item_member_card || ''" @select="OnSelectTableMember_Card" :oprecision="false"></DataTableMemberCard>
    </DataTableDialogMemberCard>

    <!-- 选项卡 | 健身房请假 | -->
    <el-tabs activeName="first" type="border-card">
      <el-tab-pane label="健身房请假" name="first">
        <el-container>
          <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
              <el-button type="success" icon="el-icon-plus" @click="OnNewLeaveBtnClick">新增健身房请假</el-button>
            </el-header>
            <DataTableLeave :oqueryItemKey="query_key_leave" :oqueryItemName="data_member_card.id == null ? '':data_member_card.id + ''"></DataTableLeave>
          </el-aside>
        </el-container>
      </el-tab-pane>
    </el-tabs>

    <!-- 单数据编辑窗口 | 健身房请假 | -->
    <DataFormEditDialogLeave>
      <DataFormEditLeave></DataFormEditLeave>
    </DataFormEditDialogLeave>

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

import DataItemLeave from "./DataItemLeave";
import DataTableDialogLeave from "./DataTableDialogLeave";
import DataTableLeave from "./DataTableLeave";
import DataFormLeave from "./DataFormLeave";
import DataFormEditLeave from "./DataFormEditLeave";
import DataFormEditDialogLeave from "./DataFormEditDialogLeave";
//import DataTableLeaveReserve from "./DataTableLeave_Reserve";

import DataItemMemberCard from "./DataItemMember_Card";
import DataTableDialogMemberCard from "./DataTableDialogMember_Card";
import DataTableMemberCard from "./DataTableMember_Card";
import DataFormMemberCard from "./DataFormMember_Card";
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
    
    DataItemLeave,
    DataTableDialogLeave,
    DataTableLeave,
    DataFormLeave,
    DataFormEditLeave,
    DataFormEditDialogLeave,
    //DataTableLeaveReserve

    DataItemMemberCard,
    DataTableDialogMemberCard,
    DataTableMemberCard,
    DataFormMemberCard,
    DataFormEditMemberCard,
    DataFormEditDialogMemberCard,
  },
  data() {
    return {
      query_key_leave: "member_card_id",
      query_item_leave: "",
      data_leave: {},

      query_key_member_card: "card_num",
      query_item_member_card: "",
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
		* @brief 选择某一行的时候 | Leave | 
		*
		* @param: row
		*/

    OnSelectTableLeave(row) {
      this.data_leave = row;
    },

		/**
		* @brief 新增数据 | Leave | 
		*/
    OnNewLeaveBtnClick() {
      xxevent.emit("EditDialogShow_Leave", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Leave", {
        member_card_id: this.data_member_card.id
      })); // 新增数据
    },

		/**
		* @brief 查询数据 | Leave | 
		*/
    OnQueryLeaveClick() {
      xxevent.emit("QueryTableDialogShow_Leave"); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Leave", this.query_key_leave, this.query_item_leave)); // 查询数据项
    },


     /**
    * @brief 查询数据 | Member_Card | 
    */
    async OnQueryMember_CardClick() {
      xxevent.emit("QueryTableDialogShow_Member_Card"); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Member_Card", this.query_key_member_card, this.query_item_member_card)); // 查询数据项
    },


    /**
    * @brief 新增数据 | Member_Card | 
    */
    OnNewMember_CardBtnClick() {
      xxevent.emit("EditDialogShow_Member_Card", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Member_Card")); // 新增数据
    },

    /**
    * @brief 选择某一行的时候 | Member_Card | 
    *
    * @param: row
    */

    OnSelectTableMember_Card(row) {
      this.data_member_card = row;
    },

  }
};
</script>
<style>
</style>


