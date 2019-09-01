<template>
  <div class="app-container">
    <div class="filter-container">
      <el-form :inline="true" class="demo-form-inline">
        <!--查询输入-->
        <el-form-item>
          <el-input v-model="queryItemName" :placeholder="'请输入' +importanceOptions[importance]"></el-input>
        </el-form-item>

        <!--查询类型-->
        <el-select v-model="importance" class="filter-item">
          <el-option
            v-for="(item, idx) in importanceOptions"
            :key="idx"
            :label="item"
            :value="idx"
          />
        </el-select>

        <!--查询按钮-->
        <el-form-item>
<el-button type="primary" icon="el-icon-search" @click="()=>{currentPage=1; this.FetchIndexList()}">查询</el-button>
        </el-form-item>

        <!--新增按钮-->
        <el-button @click="OnClickAddItem" type="success" icon="el-icon-plus">新增会员卡</el-button>

        <template>
          <el-table
            v-loading="loading"
            :data="tableData"
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
            style="border:1px solid #dfe6ec;width: 100%;border-radius: 0px"
            border
            highlight-current-row
          >
            <!--props是必须的-->
            <!--++隐藏的项++-->
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="会员卡id" style="width:100%;">
                    <span>{{props.row.id}}</span>
                  </el-form-item>
                  <el-form-item label="会员用户id" style="width:100%;">
                    <span>{{props.row.user_id}}</span>
                  </el-form-item>
                  <el-form-item label="会员卡类型id" style="width:100%;">
                    <span>{{props.row.card_type_id}}</span>
                  </el-form-item>
                  <el-form-item label="创建时间" style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{props.row.create_time}}</span>
                  </el-form-item>
                  <el-form-item label="会员卡到期时间" style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{props.row.end_time}}</span>
                  </el-form-item>
                  <el-form-item label="使用次数" style="width:100%;">
                    <span>{{props.row.use_times}}</span>
                  </el-form-item>
                  <el-form-item label="剩余次数" style="width:100%;">
                    <span>{{props.row.left_times}}</span>
                  </el-form-item>
                  <el-form-item label="卡号" style="width:100%;">
                    <span>{{props.row.card_num}}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>

            <!--++隐藏的项++-->
            <!--++显示的项++-->
            <el-table-column label="会员卡id" prop="id">
            </el-table-column>
            <el-table-column label="会员用户id" prop="user_id">
            </el-table-column>
            <el-table-column label="会员卡类型id" prop="card_type_id">
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
                  type="danger"
                  icon="el-icon-delete"
                  style="margin-left: 10px;"
                  @click="OnClickDeleteItem(props.$index, props.row)"
                >删除</el-button>
              </template>
            </el-table-column>
            <!--++显示的项++-->
          </el-table>
        </template>
      </el-form>
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

      <!--Edit It Begin -->
      <el-dialog title="会员卡" :visible.sync="dialogFormVisible">
        <el-form :model="editTableData" :rules="rules" ref="editTableData"
>
          <el-form-item  v-show="!editTableDataNew" label="会员卡id" :label-width="formLabelWidth" prop="id">
              <el-input placeholder="请输入会员卡id" type="number" :disabled="true" v-model="editTableData.id"></el-input>
          </el-form-item>
          <el-form-item label="会员用户id" :label-width="formLabelWidth" prop="user_id">
              <el-input placeholder="请输入会员用户id" type="number" v-model="editTableData.user_id"></el-input>
          </el-form-item>
          <el-form-item label="会员卡类型id" :label-width="formLabelWidth" prop="card_type_id">
              <el-input placeholder="请输入会员卡类型id" type="number" v-model="editTableData.card_type_id"></el-input>
          </el-form-item>
          <el-form-item label="创建时间" :label-width="formLabelWidth" prop="create_time">
            <el-date-picker
              v-model="editTableData.create_time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="请选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="会员卡到期时间" :label-width="formLabelWidth" prop="end_time">
            <el-date-picker
              v-model="editTableData.end_time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="请选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="使用次数" :label-width="formLabelWidth" prop="use_times">
              <el-input placeholder="请输入使用次数" type="number" v-model="editTableData.use_times"></el-input>
          </el-form-item>
          <el-form-item label="剩余次数" :label-width="formLabelWidth" prop="left_times">
              <el-input placeholder="请输入剩余次数" type="number" v-model="editTableData.left_times"></el-input>
          </el-form-item>
          <el-form-item label="卡号" :label-width="formLabelWidth" prop="card_num">
              <el-input placeholder="请输入卡号" v-model="editTableData.card_num"></el-input>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="OnClickCancleForm">取 消</el-button>
          <el-button type="primary" @click="OnClickOkForm">确 定</el-button>
        </div>
      </el-dialog>
      <!--Edit It End -->
      <el-dialog title="会员卡" :visible.sync="tinymceDialogFormVisible" width="100%">
        <template>
          <div class="components-container">
            <div>
              <tinymce v-model="tinymceEditText"/>
            </div>
            <div class="editor-content" v-html="tinymceEditText"/>
          </div>
        </template>
        <div slot="footer" class="dialog-footer">
          <el-button @click="tinymceDialogFormVisible = false;">取 消</el-button>
          <el-button type="primary" @click="tinymceDialogFormVisible = false; popKeyForEditTableDataTinymce();">确 定</el-button>
        </div>
      </el-dialog>

      <!--上传控件-->
      <image-cropper
        v-show="imagecropperShow"
        :width="200"
        :height="200"
        :key="imagecropperKey"
        @close="imagecropperShow = false"
        @crop-upload-success="OnCropSuccess"
        url="admin/upload/avatarUpload"
        lang-type="cn"
      />
    </div>
  </div>
</template>


<script>
import { deepClone } from "@/utils";
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";

let firstPageSize = 10;
export default {
  name: "UserPage",
  // 声明导入的控件
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore
  },
  data() {
    return {
      loading: true,
      importance: "", // 查询的类型id
      currentPage: 1, // 当前查询第几页
      firstPageSize: firstPageSize, // 当前查询第几页
      pageSize: 10, // 当前查询每页多少数据
      totalDataLen: 0, // 数据总量,用作分页
      imagecropperKey: 0, //
      queryItemName: "", // 查询的关键字
      importanceOptions: { 
        id: "会员卡id", 
        user_id: "会员用户id", 
        card_type_id: "会员卡类型id", 
        create_time: "创建时间", 
        end_time: "会员卡到期时间", 
        use_times: "使用次数", 
        left_times: "剩余次数", 
        card_num: "卡号", 
      }, // 查询类型索引数据
      tableData: [], // 查询的数据结果
      imagecropperShow: false, //上传控件是否显示
      editTableData: {}, // 正在编辑或者添加的数据
      editTableDataNew: true, // 是否是新增数据
      editTableDataAdd: false, // 是否是添加数据
      dialogFormVisible: false, // 正在编辑或者添加的数据框是否显示
      tinymceEditText: "",
      tinymceEditTextKey: "",
      tinymceDialogFormVisible: false,
      formLabelWidth: "120px", // 数据框的尺寸
      rules: {
        id: [
          { required: true, message: "请输入会员卡id", trigger: "blur" },
        ],
        user_id: [
          { required: true, message: "请输入会员用户id", trigger: "blur" },
        ],
        card_type_id: [
          { required: true, message: "请输入会员卡类型id", trigger: "blur" },
        ],
        create_time: [
          { required: true, message: "请输入创建时间", trigger: "blur" },
        ],
        end_time: [
          { required: true, message: "请输入会员卡到期时间", trigger: "blur" },
        ],
        use_times: [
          { required: true, message: "请输入使用次数", trigger: "blur" },
        ],
        left_times: [
          { required: true, message: "请输入剩余次数", trigger: "blur" },
        ],
        card_num: [
          { required: true, message: "请输入卡号", trigger: "blur" },
        ],
      },
    };
  },

  // 创建的时候
  async created() {
    this.init();
    await this.FetchIndexList();
  },

  methods: {
    /**
     * @brief 初始化
     */
    init() {
      this.importance = Object.getOwnPropertyNames(this.importanceOptions)[0];
    },

    pushKeyForEditTableDataTinymce(key) {
      this.tinymceEditText = this.editTableData[key];
      this.tinymceEditTextKey = key;
    },
    popKeyForEditTableDataTinymce() {
      let key = this.tinymceEditTextKey;
      this.editTableData[key] = this.tinymceEditText;
      this.tinymceEditTextKey = "";
    },

    /**
     * @brief 点击上传的按钮
     */
    OnClickAvatar() {
      this.imagecropperShow = true;
    },

    /**
     * @brief 上传成功
     *
     * @param: resData
     */
    // TODO More Image
    OnCropSuccess(resData) {
      this.imagecropperShow = false;
      this.imagecropperKey += 1;
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
     * @brief 点击添加数据按钮
     */
    OnClickAddItem() {
      this.dialogFormVisible = true;
      this.editTableData = {
        id: 0, // 会员卡id
        user_id: 0, // 会员用户id
        card_type_id: 0, // 会员卡类型id
        create_time: new Date(), // 创建时间
        end_time: new Date(), // 会员卡到期时间
        use_times: 0, // 使用次数
        left_times: 0, // 剩余次数
        card_num: "", // 卡号
      };

      this.editTableDataNew = true;
      this.editTableDataAdd = !this.editTableDataNew;
    },

    /**
     * @brief 点击编辑按钮
     *
     * @param: index
     * @param: row
     */
    OnClickEditItem(index, row) {
      this.dialogFormVisible = true;
      this.editTableData = deepClone(row);
      this.editTableDataNew = false;
      this.editTableDataAdd = !this.editTableDataNew;
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
        data: { id: row.id}, // 会员卡id
        method: "post"
      });
      if (res.errno == 0) {
        let index = this.tableData.indexOf(row);
        this.tableData.splice(index, 1);
        if (this.tableData.length == 0) {
          this.currentPage -= 1;
        }
        this.$message.success("删除成功");
        await this.FetchIndexList();
      }
    },

    /**
     * @brief 编辑取消
     */
    OnClickCancleForm() {
      this.dialogFormVisible = false;
    },

    /**
     * @brief 确定编辑或新增完毕
     *
     * @returns:
     */
    async OnClickOkForm() {
       let is_validate = await (() => {
        return new Promise((resolve, reject) => {
          this.$refs['editTableData'].validate(valid => {
            if (valid) {
              resolve(true);
            } else {
              resolve(false);
            }
          });
        });
      })();
      if (!is_validate) return;
      this.dialogFormVisible = false;

      let data = this.editTableData;
      data.id = this.editTableDataNew ? 0 : this.editTableData.id;
      data.is_show = 1;
      let res = await this.request({
        url: "/admin/member_card/store",
        data: data,
        method: "post"
      });

      if (res.errno == 0) {
        if (this.editTableDataNew) {
          this.$message.success("添加成功");
        } else {
          this.$message.success("更新成功");
        }
        await this.FetchIndexList();
      }
    },

    /**
     * @brief 拉取数据
     *
     * @returns:
     */
    async FetchIndexList() {
      // let res_all = await this.request({
      //   url: "/admin/member_card/all",
      //   method: "post"
      // });
      // if (res_all["data"] != null) {
      //   for (let i = 0; i < res_all["data"].length; i++) {
      //     const data = res_all["data"][i]; // 会员卡
      //     const id = data.id; // 会员卡id
      //     const user_id = data.user_id; // 会员用户id
      //     const card_type_id = data.card_type_id; // 会员卡类型id
      //     const create_time = data.create_time; // 创建时间
      //     const end_time = data.end_time; // 会员卡到期时间
      //     const use_times = data.use_times; // 使用次数
      //     const left_times = data.left_times; // 剩余次数
      //     const card_num = data.card_num; // 卡号
      //   }
      // }
      this.loading = true;
      let page = this.currentPage; // 第几页
      let size = this.pageSize; // 多长
      let key = this.importance; // 查询的key
      let name = this.queryItemName; // like商品名称
      let data = {
        page: page, // 第几页
        size: size, // 多长
        key: key, // 查询的key
        name: name // like商品名称
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
          const left_times = data.left_times; // 剩余次数
          const card_num = data.card_num; // 卡号
        }

        this.totalDataLen = count;
        this.tableData = resData["data"];
      }
        this.loading = false;
    }
  }
};
</script>
<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.editor-content {
  margin-top: 20px;
}
/* .el-table--enable-row-hover .el-table__body tr:hover>td{
  background-color: #657a94 !important;
  color:white !important;
} */
</style>


