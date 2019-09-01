<template>
  <div class="app-container">
    <el-input v-model="query_item_member_record" style="width:auto;" :placeholder="'请输入姓名'"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="OnQueryMember_RecordClick">查询</el-button>
    <el-button type="success" icon="el-icon-plus" @click="OnNewMember_RecordBtnClick">新增会员用户录入</el-button>
    <!-- 单数据 | 会员用户录入 | -->
    <DataItemMemberRecord :data="data_member_record"></DataItemMemberRecord>
    
    <!-- 多数据窗口 | 会员用户录入 | -->
    <DataTableDialogMemberRecord>
      <DataTableMemberRecord :oqueryItemKey="query_key_member_record" :oqueryItemName="query_item_member_record || ''" @select="OnSelectTableMember_Record"></DataTableMemberRecord>
    </DataTableDialogMemberRecord>

    <!-- 选项卡 | 会员用户录入 | -->
    <el-tabs activeName="first" type="border-card">
      <el-tab-pane label="会员用户录入" name="first">
        <el-container>
          <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
              <el-button @click="OnNewBtnClick">新增</el-button>
            </el-header>
            <!-- <DataTableMemberRecordReserve></DataTableMember_RecordReserve> -->
          </el-aside>
        </el-container>
      </el-tab-pane>
    </el-tabs>

    <!-- 单数据编辑窗口 | 会员用户录入 | -->
    <DataFormEditDialogMemberRecord>
      <DataFormEditMemberRecord></DataFormEditMemberRecord>
    </DataFormEditDialogMemberRecord>
    
  </div>
</template>


<script>
import { deepClone } from "@/utils";
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";

import DataItemMemberRecord from "./DataItemMember_Record";
import DataTableDialogMemberRecord from "./DataTableDialogMember_Record";
import DataTableMemberRecord from "./DataTableMember_Record";
import DataFormMemberRecord from "./DataFormMember_Record";
import DataFormEditMemberRecord from "./DataFormEditMember_Record";
import DataFormEditDialogMemberRecord from "./DataFormEditDialogMember_Record";
//import DataTableMemberRecordReserve from "./DataTableMember_Record_Reserve";
import xxevent from "./xxevent";
export default {
  name: "complex",
  // 声明导入的控件
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore,
    
    DataItemMemberRecord,
    DataTableDialogMemberRecord,
    DataTableMemberRecord,
    DataFormMemberRecord,
    DataFormEditMemberRecord,
    DataFormEditDialogMemberRecord,
    //DataTableMemberRecordReserve
  },
  data() {
    return {
      query_key_member_record: "",
      query_item_member_record: "",
      data_member_record: {},
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
		* @brief 选择某一行的时候 | Member_Record | 
		*
		* @param: row
		*/

    OnSelectTableMember_Record(row) {
      this.data_member_record = row;
    },

		/**
		* @brief 新增数据 | Member_Record | 
		*/
    OnNewMember_RecordBtnClick() {
      xxevent.emit("EditDialogShow_Member_Record", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Member_Record")); // 新增数据
    },

		/**
		* @brief 查询数据 | Member_Record | 
		*/
    OnQueryMember_RecordClick() {
      xxevent.emit("QueryTableDialogShow_Member_Record"); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Member_Record", this.query_key_member, this.query_item_member_record)); // 查询数据项
    }

  }
};
</script>
<style>
</style>


