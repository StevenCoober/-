<template>
  <div>
  <el-table
    v-loading="loading"
    stripe
    :data="datas"
    ref="multipleTable"
    :header-cell-style="{background:'#eef1f6',color:'#606266'}"
    style="border:1px solid #dfe6ec;width: 100%;border-radius: 0px"
    border
    @row-click="OnClickRow"
    @select="OnSelect"
    highlight-current-row
  >
    <el-table-column type="selection" width="55">
    </el-table-column>
            <el-table-column label="教练id" prop="id">
            </el-table-column>
            <el-table-column label="微信用户id" prop="user_id">
            </el-table-column>
            <el-table-column label="姓名" prop="name">
            </el-table-column>
            <el-table-column label="联系电话" prop="mobile">
            </el-table-column>
<!--             <el-table-column label="生日" prop="birthday">
              <template slot-scope="props">
                    <el-icon name="time"></el-icon>
                    <span>{{props.row.birthday}}</span>
              </template>
            </el-table-column> -->
            <el-table-column label="联系地址" prop="address">
            </el-table-column>
            <!-- <el-table-column style="white-space: pre-line;" label="简介" prop="summary">
            </el-table-column> -->

<!--             <el-table-column label="特长" prop="skill">
            </el-table-column> -->
<!--             <el-table-column label="头像" prop="head_img">
              <template slot-scope="props">
                    <el-card class="box-card">
                      <div class="component-item">
                        <pan-thumb
                          width="100px"
                          height="100px"
                          :image="props.row.head_img"
                        ></pan-thumb>
                      </div>
                    </el-card>
              </template>
            </el-table-column> -->
<!--             <el-table-column label="浏览量" prop="views">
            </el-table-column> -->
            <el-table-column label="排序" prop="paixu">
            </el-table-column>
            <el-table-column label="是否是明星教练" prop="is_star">
            </el-table-column>
            <el-table-column label="性别" prop="gender">
            </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="props">
          <el-button
            v-if="props.row.user_id == 0"
            size="small"
            type="primary"
            icon="el-icon-edit"
            style="margin-left: 10px;"
            @click="OnClickSetCoach(props.$index, props.row)"
          >设为教练</el-button>
          <el-button
            v-if="props.row.user_id == user_id"
            size="small"
            type="danger"
            icon="el-icon-share"
            style="margin-left: 10px;"
            @click="OnClickUnSetCoach(props.$index, props.row)"
          >
          取消绑定
          </el-button>
          <el-button
            v-else-if="props.row.user_id != 0"
            size="small"
            type="danger"
            icon="el-icon-edit"
            style="margin-left: 10px;"
            @click="OnClickUnSetCoach(props.$index, props.row)"
          >
          取消绑定
          </el-button>
        </template>
      </el-table-column>
      <!-- <el-table-column label="操作">
        <template slot-scope="props">
          <el-button
            size="small"
            type="primary"
            icon="el-icon-edit"
            style="margin-left: 10px;"
            @click="OnClickEditItem(props.$index, props.row)"
          >编辑</el-button>
          <el-button
            size="small"
            style="margin-left: 10px;"
            type="danger"
            icon="el-icon-delete"
            @click="OnClickDeleteItem(props.$index, props.row)"
          >删除</el-button>
        </template>
      </el-table-column> -->
  </el-table>
    <el-col :span="24" class="toolbar" style="text-align:left">
      <el-pagination
        @size-change="HandleSizeChange"
        @current-change="HandleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[firstPageSize, 30, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalDataLen"
      ></el-pagination>
    </el-col>
  </div>
</template>

<script>
import { deepClone } from "@/utils";
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import xxevent from "./xxevent";
let firstPageSize = 10;
export default {
  name: "DataTableCoach",
  components: {
    ImageCropper,
    PanThumb,
    Tinymce
  },

  // 属性
  props: {
    oqueryItemKey: {
      type: String,
      default: ''
    },
    oqueryItemName: {
      type: String,
      default: ''
    },
    ocanSelect: {
      type: Boolean,
      default: true
    },
    oprecision: {
      type: Boolean,
      default: true
    },
  },

  // 监视
  watch: {
    oqueryItemKey: {
      deep: true, // 深度监听
      async handler(newVal, oldVal) {
        this.queryItemKey = newVal;
      }
    },
    oqueryItemName: {
      deep: true, // 深度监听
      async handler(newVal, oldVal) {
        this.queryItemName = newVal;
        await this.FetchIndexList();
      }
    },
    ocanSelect: {
      deep: true, // 深度监听
      async handler(newVal, oldVal) {
        this.canselect = newVal;
      }
    },
    oprecision: {
      deep: true, // 深度监听
      async handler(newVal, oldVal) {
        this.precision = newVal;
      }
    },
  },

  data() {
    return {
      loading: false,
      canselect: true, // 是否可以选择
      precision: true, //精确查找
      queryItemKey: "", // 查询的类型名称
      queryItemName: "", // 查询的关键字
      currentPage: 1, // 当前查询第几页
      firstPageSize: firstPageSize,
      pageSize: firstPageSize, // 当前查询每页多少数据
      totalDataLen: 0, // 数据总量,用作分页
      datas: [],
      user_id: null,
    };
  },
  // 创建的时候
  async created() {
    this.canselect = this.ocanSelect;
    this.queryItemKey = this.oqueryItemKey;
    this.precision = this.oprecision;
    xxevent.bindtarget(this);
  },

  // 销毁的时候
  async destroyed() {
    xxevent.unbindtarget(this);
  },

  methods: {

		/**
		* @brief 选择某一行的时候
		*
		* @param: rows
		*/
    OnSelect(rows) {
      let row = rows.pop();
      this.$refs.multipleTable.clearSelection();
      this.$refs.multipleTable.toggleRowSelection(row);

      this.$emit("select", row || {});
      xxevent.emit("SelectTableItem_Coach", row || {}); // 选中查询结果某项
    },

    OnClickRow(row) {
      this.$refs.multipleTable.clearSelection();
      this.$refs.multipleTable.toggleRowSelection(row);
      this.$emit("select", row || {});
      xxevent.emit("SelectTableItem_Coach", row || {});  // 选中查询结果某项
    },

    /**
     * @brief 点击编辑按钮
     *
     * @param: index
     * @param: row
     */
    OnClickEditItem(index, row) {
      xxevent.emit("EditDialogShow_Coach", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("EditObj_Coach", deepClone(row))); // 编辑数据
    },

    /**
     * @brief 点击删除按钮
     *
     * @param: index
     * @param: row
     *
     * @returns:
     */
    async OnClickDeleteItem(index, row) {
      let data = row;
      let res = await this.request({
        url: "/admin/coach/delete",
        data: { id: row.id }, // 教练id
        method: "post"
      });
      if (res.errno == 0) {
        let index = this.datas.indexOf(row);
        this.datas.splice(index, 1);
        if (this.datas.length == 0) {
          this.currentPage -= 1;
        }
        this.$message.success("删除成功");
        await this.FetchIndexList();
      }
    },

    /**
     * @brief 每页数据量变动
     *
     * @param: val
     *
     * @returns:
     */
    async HandleSizeChange(val) {
      this.pageSize = val;
      await this.FetchIndexList();
    },

    /**
     * @brief 当前第几页变动了
     *
     * @param: val
     *
     * @returns:
     */
    async HandleCurrentChange(val) {
      this.currentPage = val;
      await this.FetchIndexList();
    },

    /**
     * @brief 拉取数据
     *
     * @param:
     *
     * @returns:
     */
    async FetchIndexList() {
      this.loading = true;
      let page = this.currentPage; // 第几页
      let size = this.pageSize; // 多长
      let key = this.queryItemKey; // 查询的key
      let name = this.queryItemName; // like商品名称
      let precision = this.precision; // 是否精确

      let data = {
        page: page, // 第几页
        size: size, // 多长
        key: key, // 查询的key
        name: name, // like商品名称
        precision: precision,  // 是否精确
      };

      let res = await this.request({
        url: "/admin/coach/index",
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
          const id = data.id; // 教练id
          const user_id = data.user_id; // 微信用户id
          const name = data.name; // 姓名
          const mobile = data.mobile; // 联系电话
          const birthday = data.birthday; // 生日
          const address = data.address; // 联系地址
          const summary = data.summary; // 简介
          const skill = data.skill; // 特长
          const head_img = data.head_img; // 头像
          const views = data.views; // 浏览量
          const paixu = data.paixu; // 排序
          const is_star = data.is_star; // 是否是明星教练
          const gender = data.gender; // 性别
        }

        this.totalDataLen = count;
        this.datas = resData["data"];
        this.loading = false;
      }
    },
    // 选中某项
    async onSelectItem(row) {
      if (row.id != null) {
        this.pageSize = 1;
        await this.FetchInfosList("coach_id", row.id);
      }
    },

    /////////////////////////////////////////////////////
    // 查询数据项
    async onSendQueryTableItem_Coach(queryItemKey, queryItemName, user_id) {
      this.currentPage = 1;
      this.queryItemKey = queryItemKey;
      this.queryItemName = queryItemName;

      await this.FetchIndexList();

      this.user_id = user_id;
    },

    // 更新查询数据项
    async onSendUpdateTableItem_Coach() {
      await this.FetchIndexList();
    },

     /**
     * @brief 
     *
     * @param: index
     * @param: row
     */
    async OnClickSetCoach(index, row) {
      let data = {
        id: row.id,
        user_id: this.user_id
      }
      
      let res = await this.request({
        url: "/admin/coach/store",
        data: data,
        method: "post"
      });

      if (res.errno == 0) {
        this.$message.success("更新成功");
        xxevent.emit("QueryTableDialogShow_Coach", false); // 新增或编辑界面显示
        xxevent.emit("SendUpdateTableItem_User"); // 更新查询数据项
        xxevent.emit("SendUpdateTableItem_Coach"); // 更新查询数据项
        xxevent.emit("SendUpdateItem_Coach", res.data); // 更新单个数据项
      }
    },

    async OnClickUnSetCoach(index, row) {
      let data = {
        id: row.id,
        user_id: 0
      }
      
      let res = await this.request({
        url: "/admin/coach/store",
        data: data,
        method: "post"
      });

      if (res.errno == 0) {
        this.$message.success("更新成功");
        xxevent.emit("QueryTableDialogShow_Coach", false); // 新增或编辑界面显示
        xxevent.emit("SendUpdateTableItem_User"); // 更新查询数据项
        xxevent.emit("SendUpdateTableItem_Coach"); // 更新查询数据项
        xxevent.emit("SendUpdateItem_Coach", res.data); // 更新单个数据项
      }
    },
  }
};
</script>