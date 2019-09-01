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
    <el-table-column v-if="canselect" type="selection" width="55">
    </el-table-column>
            <el-table-column label="会员卡id" prop="id">
            </el-table-column>
<!--             <el-table-column label="会员用户id" prop="user_id">
            </el-table-column> -->
            <el-table-column label="会员用户" prop="member_name">
            </el-table-column>
            <!-- <el-table-column label="会员卡类型id" prop="card_type_id">
            </el-table-column> -->
            <el-table-column label="会员卡类型" prop="member_card_name">
            </el-table-column>
            
            <el-table-column label="创建时间" prop="create_time">
              <template slot-scope="props">
                    <el-icon name="time"></el-icon>
                    <span>{{props.row.create_time}}</span>
              </template>
            </el-table-column>
            <el-table-column label="会员卡到期时间" prop="end_time">
              <template slot-scope="props">
                    <el-icon name="time"></el-icon>
                    <span>{{props.row.end_time}}</span>
              </template>
            </el-table-column>
            <el-table-column label="使用次数" prop="use_times">
            </el-table-column>
            <el-table-column label="剩余次数" prop="left_times">
            </el-table-column>
            <el-table-column label="卡号" prop="card_num">
            </el-table-column>
      <el-table-column label="操作">
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
      </el-table-column>
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
import ImageCropperMore from "@/components/ImageCropperMore";
import xxevent from "./xxevent";
import {
  ID as CONSTS_ID,
  Item as CONSTS_Item
} from '@/utils/jianshenfang_consts.js';

let firstPageSize = 10;
export default {
  name: "DataTableMember_Card",
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore
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
        this.precision = true;
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
      datas: []
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
      xxevent.emit("SelectTableItem_Member_Card", row || {}); // 选中查询结果某项
    },

    OnClickRow(row) {
      this.$refs.multipleTable.clearSelection();
      this.$refs.multipleTable.toggleRowSelection(row);
      this.$emit("select", row || {});
      xxevent.emit("SelectTableItem_Member_Card", row || {});  // 选中查询结果某项
    },

    /**
     * @brief 点击编辑按钮
     *
     * @param: index
     * @param: row
     */
    OnClickEditItem(index, row) {
      xxevent.emit("EditDialogShow_Member_Card", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("EditObj_Member_Card", deepClone(row))); // 编辑数据
      this.$emit("edit", row || {});
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
        url: "/admin/member_card/delete",
        data: { id: row.id }, // 会员卡 id
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
        url: "/admin/member_card/index",
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
          const data = resData["data"][i];
          const id = data.id; // 会员卡id
          const user_id = data.user_id; // 会员用户id
          const card_type_id = data.card_type_id; // 会员卡类型id
          const create_time = data.create_time; // 创建时间
          const end_time = data.end_time; // 会员卡到期时间
          const use_times = data.use_times; // 使用次数

          let res = await this.request({
            url: '/admin/member/info',
            data: {
              id: user_id, // 会员用户id
            },
            method: "post"
          });
          // const value = res.data;
          // const id = value.id; // 会员用户id
          // const user_id = value.user_id; // 微信用户id
          const member_name = res.data.name; // 姓名
          // const mobile = value.mobile; // 联系电话
          // const birthday = value.birthday; // 生日
          // const address = value.address; // 联系地址
          // const create_time = value.create_time; // 创建日期
          resData["data"][i].member_name = member_name;
          res = await this.request({
            url: '/admin/member_card_type/info',
            data: {
              id: card_type_id, // 会员用户id
            },
            method: "post"
          });

          resData["data"][i].member_card_name = res.data.card_name;
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
        await this.FetchInfosList("member_card_id", row.id);
      }
    },
    /////////////////////////////////////////////////////
    // 查询数据项
    async onSendQueryTableItem_Member_Card(queryItemKey, queryItemName) {
      this.currentPage = 1;
      this.queryItemKey = queryItemKey;
      this.queryItemName = queryItemName;
      await this.FetchIndexList();
    },

    // 更新查询数据项
    async onSendUpdateTableItem_Member_Card() {
      await this.FetchIndexList();
    },
  }
};
</script>