<template>
  <div class="app-container">
    <el-input v-model="query_item_member_card_type" style="width:auto;" :placeholder="'请输入姓名'"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="OnQueryMember_Card_TypeClick">查询</el-button>
    <el-button type="primary" icon="el-icon-search" @click="OnNewMember_Card_TypeBtnClick">新增会员卡类型</el-button>
    <!-- 单数据 | 会员卡类型 | -->
    <DataItemMember_Card_Type :data="data_member_card_type"></DataItemMember_Card_Type>
    
    <!-- 多数据窗口 | 会员卡类型 | -->
    <DataTableDialogMember_Card_Type>
      <DataTableMember_Card_Type :oqueryItemKey="query_key_member_card_type" :oqueryItemName="query_item_member_card_type || ''" @select="OnSelectTableMember_Card_Type"></DataTableMember_Card_Type>
    </DataTableDialogMember_Card_Type>

    <!-- 选项卡 | 会员卡类型 | -->
    <el-tabs activeName="first" type="border-card">
      <el-tab-pane label="会员卡类型" name="first">
        <el-container>
          <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">
              <el-button @click="OnNewBtnClick">新增</el-button>
            </el-header>
            <!-- <DataTableMember_Card_TypeReserve></DataTableMember_Card_TypeReserve> -->
          </el-aside>
        </el-container>
      </el-tab-pane>
    </el-tabs>

    <!-- 单数据编辑窗口 | 会员卡类型 | -->
    <DataFormEditDialogMember_Card_Type>
      <DataFormEditMember_Card_Type></DataFormEditMember_Card_Type>
    </DataFormEditDialogMember_Card_Type>
    
  </div>
</template>


<script>
import { deepClone } from "@/utils";
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";

import DataItemMember_Card_Type from "./DataItemMember_Card_Type";
import DataTableDialogMember_Card_Type from "./DataTableDialogMember_Card_Type";
import DataTableMember_Card_Type from "./DataTableMember_Card_Type";
import DataFormMember_Card_Type from "./DataFormMember_Card_Type";
import DataFormEditMember_Card_Type from "./DataFormEditMember_Card_Type";
import DataFormEditDialogMember_Card_Type from "./DataFormEditDialogMember_Card_Type";
//import DataTableMember_Card_TypeReserve from "./DataTableMember_Card_Type_Reserve";
import xxevent from "./xxevent";
export default {
  name: "complex",
  // 声明导入的控件
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore,
    
    DataItemMember_Card_Type,
    DataTableDialogMember_Card_Type,
    DataTableMember_Card_Type,
    DataFormMember_Card_Type,
    DataFormEditMember_Card_Type,
    DataFormEditDialogMember_Card_Type,
    //DataTableMember_Card_TypeReserve
  },
  data() {
    return {
      query_key_member_card_type: "",
      query_item_member_card_type: "",
      data_member_card_type: {},
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
		* @brief 选择某一行的时候 | Member_Card_Type | 
		*
		* @param: row
		*/

    OnSelectTableMember_Card_Type(row) {
      this.data_member_card_type = row;
    },

		/**
		* @brief 新增数据 | Member_Card_Type | 
		*/
    OnNewMember_Card_TypeBtnClick() {
      xxevent.emit("EditDialogShow_Member_Card_Type", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("NewObj_Member_Card_Type")); // 新增数据
    },

		/**
		* @brief 查询数据 | Member_Card_Type | 
		*/
    OnQueryMember_Card_TypeClick() {
      xxevent.emit("QueryTableDialogShow_Member_Card_Type"); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Member_Card_Type", this.query_key_member, this.query_item_member_card_type)); // 查询数据项
    }

  }
};
</script>
<style>
</style>


