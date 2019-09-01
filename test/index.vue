<template>
  <div class="app-container">
    <div class="filter-container">
      <!-- Table -->
      <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>
      <div class="un-handle-layout">
        <div class="layout-title">待处理事务</div>
        <div class="un-handle-content">
          <el-row :gutter="20">
            <el-col :span="4">
              <div class="un-handle-item">
                <span class="font-medium">待付款订单</span>
                <span class="color-danger">(10)</span>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="un-handle-item">
                <span class="font-medium">已完成订单</span>
                <span class="color-danger">(10)</span>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="un-handle-item">
                <span class="font-medium">待确认收货订单</span>
                <span class="color-danger">(10)</span>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="un-handle-item">
                <span class="font-medium">待确认收货订单</span>
                <span class="color-danger">(10)</span>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="un-handle-item">
                <span class="font-medium">待确认收货订单</span>
                <span class="color-danger">(10)</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <el-dialog
        title="收货地址"
        :close-on-click-modal="false"
        :modal="false"
        ref="test"
        :visible.sync="dialogTableVisible"
        v-dialogDrag
      >
        <el-table
          :data="tableData"
          ref="multipleTable"
          :header-cell-style="{background:'#eef1f6',color:'#606266'}"
          style="border:1px solid #dfe6ec;width: 100%;border-radius: 0px"
          border
          @row-click="(row)=> {this.$refs.multipleTable.clearSelection();this.$refs.multipleTable.toggleRowSelection(row);}"
          @select="(rows)=> {this.$refs.multipleTable.clearSelection();this.$refs.multipleTable.toggleRowSelection(rows.pop());}"
          highlight-current-row
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column property="date" label="日期" width="150"></el-table-column>
          <el-table-column property="name" label="姓名" width="200"></el-table-column>
          <el-table-column property="address" label="地址"></el-table-column>
        </el-table>
        <div slot="footer" class="dialog-footer">
          <el-button @click="()=>{this.dialogTableVisible = false;}">取 消</el-button>
          <el-button type="primary">确 定</el-button>
        </div>
      </el-dialog>

      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="用户管理" name="first">
          <el-container>
            <el-aside width="40%" style="background-color: rgb(238, 241, 246)">
              <el-header style="font-size: 12px;  background-color: #f2f6fc;">消费记录小</el-header>
              <el-table
                :data="tableData"
                ref="multipleTable"
                :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                style="border:1px solid #dfe6ec;width: 100%;border-radius: 0px"
                border
                @row-click="(row)=> {this.$refs.multipleTable.clearSelection();this.$refs.multipleTable.toggleRowSelection(row);}"
                @select="(rows)=> {this.$refs.multipleTable.clearSelection();this.$refs.multipleTable.toggleRowSelection(rows.pop());}"
                highlight-current-row
              >
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column property="date" label="日期" width="150"></el-table-column>
                <el-table-column property="name" label="姓名" width="200"></el-table-column>
                <el-table-column property="address" label="地址"></el-table-column>
              </el-table>
            </el-aside>
            <el-container>
              <el-header style="font-size: 12px">消费记录</el-header>
              <el-main>
                <el-table
                  :data="tableData"
                  ref="multipleTable"
                  :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                  style="border:1px solid #dfe6ec;width: 100%;border-radius: 0px"
                  border
                  @row-click="(row)=> {this.$refs.multipleTable.clearSelection();this.$refs.multipleTable.toggleRowSelection(row);}"
                  @select="(rows)=> {this.$refs.multipleTable.clearSelection();this.$refs.multipleTable.toggleRowSelection(rows.pop());}"
                  highlight-current-row
                >
                  <el-table-column type="selection" width="55"></el-table-column>
                  <el-table-column property="date" label="日期" width="150"></el-table-column>
                  <el-table-column property="name" label="姓名" width="200"></el-table-column>
                  <el-table-column property="address" label="地址"></el-table-column>
                </el-table>
              </el-main>
            </el-container>
          </el-container>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second"></el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
    
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    rowClick(...args) {
      console.log("++++++++", ...args);
    }
  }
};
</script>


