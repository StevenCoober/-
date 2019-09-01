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
            <el-table-column label="健身房文章id" prop="id">
            </el-table-column>
            <el-table-column label="健身房文章标题" prop="title">
            </el-table-column>
            <el-table-column label="健身房文章缩略图" prop="article_img">
              <template slot-scope="props">
                <image-cropper-more :single="false" v-model="props.row.article_img" :disabled="true"></image-cropper-more>
              </template>
            </el-table-column>
            <el-table-column label="文章所属种类" prop="article_type">
            </el-table-column>
            <el-table-column label="浏览量" prop="view_count">
            </el-table-column>
            <el-table-column label="健身房文章内容">
              <template slot-scope="props">
                <div v-html="props.row.detail" />
              </template>
            </el-table-column>
            <el-table-column label="添加时间" prop="add_time">
              <template slot-scope="props">
                    <el-icon name="time"></el-icon>
                    <span>{{props.row.add_time}}</span>
              </template>
            </el-table-column>
            <el-table-column label="修改时间" prop="modify_time">
              <template slot-scope="props">
                    <el-icon name="time"></el-icon>
                    <span>{{props.row.modify_time}}</span>
              </template>
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
import xxevent from "./xxevent";
let firstPageSize = 10;
export default {
  name: "DataTableArticle",
  components: {
    ImageCropper,
    PanThumb,
    Tinymce
  },

  // 属性
  props: {
    ocanSelect: {
      type: Boolean,
      default: true
    },
    oqueryItemKey: {
      type: String,
      default: ''
    },
    oqueryItemName: {
      type: String,
      default: ''
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
  },

  data() {
    return {
      loading: false,
      canselect: true, // 是否可以选择
      precision: false, //精确查找
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
      xxevent.emit("SelectTableItem_Article", row || {}); // 选中查询结果某项
    },

    OnClickRow(row) {
      this.$refs.multipleTable.clearSelection();
      this.$refs.multipleTable.toggleRowSelection(row);
      this.$emit("select", row || {});
      xxevent.emit("SelectTableItem_Article", row || {});  // 选中查询结果某项
    },

    /**
     * @brief 点击编辑按钮
     *
     * @param: index
     * @param: row
     */
    OnClickEditItem(index, row) {
      xxevent.emit("EditDialogShow_Article", true); // 新增或编辑界面显示
      this.$nextTick(() => xxevent.emit("EditObj_Article", deepClone(row))); // 编辑数据
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
        url: "/admin/article/delete",
        data: { id: row.id }, // 健身房文章 id
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
        url: "/admin/article/index",
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
          const id = data.id; // 健身房文章id
          const title = data.title; // 健身房文章标题
          const article_img = data.article_img; // 健身房文章缩略图
          const article_type = data.article_type; // 文章所属种类
          const view_count = data.view_count; // 浏览量
          const detail = data.detail; // 健身房文章内容
          const add_time = data.add_time; // 添加时间
          const modify_time = data.modify_time; // 修改时间
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
        await this.FetchInfosList("article_id", row.id);
      }
    },
    /////////////////////////////////////////////////////
    // 查询数据项
    async onSendQueryTableItem_Article(queryItemKey, queryItemName) {
      this.currentPage = 1;
      this.queryItemKey = queryItemKey;
      this.queryItemName = queryItemName;
      await this.FetchIndexList();
    },

    // 更新查询数据项
    async onSendUpdateTableItem_Article() {
      await this.FetchIndexList();
    },
  }
};
</script>