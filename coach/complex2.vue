<template>
  <div class="app-container">
    <el-input v-model="queryTest" style="width:auto;" :placeholder="'请输入xx'"></el-input>
<el-button type="primary" icon="el-icon-search" @click="()=>{currentPage=1; this.FetchList()}">查询</el-button>
    <data-item :data="data__"></data-item>
    <data-item-dialog :visible.sync="dialogTableVisible">
      <data-table @select="OnSelect" :datas="tableData"></data-table>
    </data-item-dialog>

    
    <el-tabs activeName="first" type="border-card">
      <el-tab-pane label="教练预约订单" name="first">
        <el-container>
          <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
            <el-header style="font-size: 12px;  background-color: #f2f6fc;">教练预约订单
              <el-button  @click="()=>{this.$emit('update:visible', false);}">新增</el-button>
            </el-header>
            <data-table :datas="tableData"></data-table>
          </el-aside>
        </el-container>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import { deepClone } from "@/utils";
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";
import DataItem from "./DataItem";
import DataItemDialog from "./DataItemDialog";
import DataTable from "./DataTable";
import DataForm from "./DataForm";
export default {
  name: "UserPage",
  // 声明导入的控件
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore,
    DataItem,
    DataItemDialog,
    DataTable,
    DataForm
  },
  data() {
    return {
      dialogTableVisible: false,
      queryTest: "",
      data__: {},
      tableData: []
    };
  },

  // 创建的时候
  async created() {},

  methods: {
    /**
     * @brief 初始化
     */
    init() {},

    OnSelect(row) {
      this.data__ = row;
    },

    async TestQuery() {
      let data = {
        key: "id", // 查询的key
        name: this.queryTest// like商品名称
      };

      let res = await this.request({
        url: "/admin/coach_reserve/index",
        data: data,
        method: "post"
      });

      if (res["data"] != null) {
        let resData = res["data"];
        const count = resData["count"]; // 总数量
        const totalPages = resData["totalPages"]; // 一共多少页
        const pageSize = resData["pageSize"]; // 一页多少个
        const currentPage = resData["currentPage"]; // 当前第几页
        for (let i = 0; i < resData["data"].length; i++) {
          const data = resData["data"][i]; // 人员
          const id = data.id; // 教练预约订单id
          const user_id = data.user_id; // 预定的会员用户id
          const coach_id = data.coach_id; // 教练id
          const skill_id = data.skill_id; // 预约课程id
          const order_state = data.order_state; // 订单状态//0未开始1进行中2已完成
          const orde_result_state = data.orde_result_state; // 预约结果状态
          const reverse_btime = data.reverse_btime; // 预约开始时间 
          const reverse_etime = data.reverse_etime; // 预约结束时间 
        }

        this.totalDataLen = count;
        this.tableData = resData["data"];
      }
      this.loading = false;
      this.dialogTableVisible=true;
      
    }
  }
};
</script>
<style>
</style>
