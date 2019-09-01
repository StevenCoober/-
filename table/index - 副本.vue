<template>
  <div class="app-container">
    <div class="filter-container">
      <el-form :inline="true" class="demo-form-inline">
        <!--查询输入-->
        <el-form-item>
          <el-input v-model="queryItemName" :placeholder="'请输入' +importanceOptions[importance]"></el-input>
        </el-form-item>

        <!--查询类型-->
        <el-select v-model="importance" style="width: 90px" class="filter-item">
          <el-option
            v-for="(item, idx) in importanceOptions"
            :key="idx"
            :label="item"
            :value="idx"
          />
        </el-select>

        <!--查询按钮-->
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="FetchList">查询</el-button>
        </el-form-item>

        <!--新增按钮-->
        <el-button @click="OnClickAddItem" icon="el-icon-plus" type="success">新增商品</el-button>

        <template>
          <el-table
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
                  <el-form-item label="人员id">
                    <span>{{props.row.id}}</span>
                  </el-form-item>
                  <el-form-item label="姓名">
                    <span>{{props.row.name}}</span>
                  </el-form-item>
                  <el-form-item label="昵称">
                    <span>{{props.row.nickname}}</span>
                  </el-form-item>
                  <el-form-item label="联系电话">
                    <span>{{props.row.phone}}</span>
                  </el-form-item>
                  <el-form-item label="性别">
                    <span>{{props.row.gender}}</span>
                  </el-form-item>
                  <el-form-item label="微信号">
                    <span>{{props.row.weixin_openid}}</span>
                  </el-form-item>
                  <el-form-item label="是否删除">
                    <span>{{props.row.is_delete}}</span>
                  </el-form-item>
                  <el-form-item label="头像">
                    <el-card class="box-card">
                      <div class="component-item">
                        <pan-thumb width="100px" height="100px" :image="props.row.head_img"></pan-thumb>
                      </div>
                    </el-card>
                  </el-form-item>
                  <el-form-item label="头像2">
                    <el-card class="box-card">
                      <div class="component-item">
                        <pan-thumb width="100px" height="100px" :image="props.row.head_img2"></pan-thumb>
                      </div>
                    </el-card>
                  </el-form-item>
                  <el-form-item label="上次登录时间">
                    <el-icon name="time"></el-icon>
                    <span>{{props.row.last_login_time}}</span>
                  </el-form-item>
                  <el-form-item label="上次登录时间2">
                    <el-icon name="time"></el-icon>
                    <span>{{props.row.last_login_time2}}</span>
                  </el-form-item>
                  <el-form-item label="文章1">
                    <span>{{props.row.edit_text}}</span>
                  </el-form-item>
                  <el-form-item label="文章2">
                    <span>{{props.row.edit_text2}}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>

            <!--++隐藏的项++-->
            <!--++显示的项++-->
            <el-table-column label="人员id" prop="id"></el-table-column>
            <el-table-column label="姓名" prop="name"></el-table-column>
            <el-table-column label="昵称" prop="nickname"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="small"
                  type="primary"
                  @click="OnClickEditItem(scope.$index, scope.row)"
                >编辑</el-button>
                <el-button
                  size="small"
                  type="danger"
                  @click="OnClickDeleteItem(scope.$index, scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
            <!--++显示的项++-->
          </el-table>
        </template>
      </el-form>
      <div class="block">
        <el-pagination
          @size-change="HandleSizeChange"
          @current-change="HandleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 30, 50, 100]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalDataLen"
        ></el-pagination>
      </div>

      <!--Edit It Begin -->
      <el-dialog title="人员" :visible.sync="dialogFormVisible">
        <el-form ref="loginForm" :model="editTableData" :rules="numberRule">
          <el-form-item label="人员id" prop="id" :label-width="formLabelWidth">
            <el-input type="number" v-model="editTableData.id"></el-input>
          </el-form-item>
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="editTableData.name"></el-input>
          </el-form-item>
          <el-form-item label="昵称" :label-width="formLabelWidth">
            <el-input v-model="editTableData.nickname"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" :label-width="formLabelWidth">
            <el-input v-model="editTableData.phone"></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth">
            <el-input v-model="editTableData.gender"></el-input>
          </el-form-item>
          <el-form-item label="微信号" :label-width="formLabelWidth">
            <el-input v-model="editTableData.weixin_openid"></el-input>
          </el-form-item>
          <el-form-item label="是否删除" :label-width="formLabelWidth">
            <el-input v-model="editTableData.is_delete"></el-input>
          </el-form-item>
          <el-form-item label="头像" :label-width="formLabelWidth">
            <div class="component-item">
              <pan-thumb :image="editTableData.head_img"></pan-thumb>
            </div>
            <el-button
              type="primary"
              icon="upload"
              style="margin-left:30px"
              @click="OnClickAvatar"
            >上传头像</el-button>
          </el-form-item>
          <el-form-item label="头像2" :label-width="formLabelWidth">
            <div class="component-item">
              <pan-thumb :image="editTableData.head_img2"></pan-thumb>
            </div>
            <el-button
              type="primary"
              icon="upload"
              style="margin-left:30px"
              @click="OnClickAvatar"
            >上传头像2</el-button>
          </el-form-item>
          <el-form-item label="上次登录时间" :label-width="formLabelWidth">
            <el-date-picker
              v-model="editTableData.last_login_time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="上次登录时间2" :label-width="formLabelWidth">
            <el-date-picker
              v-model="editTableData.last_login_time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="文章1" :label-width="formLabelWidth">
            <el-input v-model="editTableData.edit_text"></el-input>
          </el-form-item>
          <el-form-item label="文章2" :label-width="formLabelWidth">
            <el-input v-model="editTableData.edit_text2"></el-input>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="OnClickCancleForm">取 消</el-button>
          <el-button type="primary" @click="OnClickOkForm">确 定</el-button>
        </div>
      </el-dialog>
      <el-dialog title="User" :visible.sync="dialogFormVisible2" width="100%">
        <template>
          <div class="components-container">
            <div>
              <tinymce :visible.sync="tinymceDialogFormVisible" v-model="content"/>
            </div>
            <div class="editor-content" v-html="content"/>
          </div>
        </template>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="OnClickOkForm">确 定</el-button>
        </div>
      </el-dialog>
      <!--Edit It End -->

      <!--上传控件-->
      <image-cropper
        v-show="imagecropperShow"
        :width="200"
                :height="200"
        langType="zh"
        :key="imagecropperKey"
        @close="imagecropperShow = false"
        @crop-upload-success="OnCropSuccess"
        url="/admin/upload/avatarUpload"
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

export default {
  name: "UserPage",
  // 声明导入的控件
  components: {
    ImageCropper,
    PanThumb,
    Tinymce
  },
  data() {
    return {
      importance: "", // 查询的类型id
      currentPage: 1, // 当前查询第几页
      pageSize: 10, // 当前查询每页多少数据
      totalDataLen: 0, // 数据总量,用作分页
      imagecropperKey: 0, //
      queryItemName: "", // 查询的关键字
      intA: 2,
      numberRule: {
        id: [
          {
            required: true,
            message: "请输入正整数",
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (Number.isInteger(value)) {
                callback();
              } else {
                callback(new Error("请输入正整数"));
              }
            }
          }
        ]
      },

      importanceOptions: {
        id: "人员id",
        name: "姓名",
        nickname: "昵称",
        phone: "联系电话",
        gender: "性别",
        weixin_openid: "微信号",
        is_delete: "是否删除",
        head_img: "头像",
        head_img2: "头像2",
        last_login_time: "上次登录时间",
        last_login_time2: "上次登录时间2",
        edit_text: "文章1",
        edit_text2: "文章2"
      }, // 查询类型索引数据
      tableData: [], // 查询的数据结果
      imagecropperShow: false, //上传控件是否显示
      editTableData: [], // 正在编辑或者添加的数据
      editTableDataNew: true, // 是否是新增数据
      editTableDataAdd: false, // 是否是添加数据
      dialogFormVisible: false, // 正在编辑或者添加的数据框是否显示
      dialogFormVisible2: false,
      formLabelWidth: "120px", // 数据框的尺寸
      content: ""
    };
  },

  // 创建的时候
  created() {
    this.init();
    this.FetchList();
  },

  methods: {
    /**
     * @brief 初始化
     */
    init() {
      this.importance = Object.getOwnPropertyNames(this.importanceOptions)[0];
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
    OnCropSuccess(resData) {
      this.imagecropperShow = false;
      this.editTableData.head_img = process.env.BASE_API + resData.fileUrl;
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
      await this.FetchList();
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
      await this.FetchList();
    },

    /**
     * @brief 点击添加数据按钮
     */
    OnClickAddItem() {
      this.dialogFormVisible = true;
      this.editTableData = {
        id: 0, // 人员id
        name: "", // 姓名
        nickname: "", // 昵称
        phone: "", // 联系电话
        gender: 0, // 性别
        weixin_openid: "", // 微信号
        is_delete: 0, // 是否删除
        head_img: "", // 头像
        head_img2: "", // 头像2
        last_login_time: "", // 上次登录时间
        last_login_time2: "", // 上次登录时间2
        edit_text: "", // 文章1
        edit_text2: "" // 文章2
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
        url: "/admin/user/delete",
        data: { id: row.id }, // 人员id
        method: "post"
      });
      if (res.errno == 0) {
        let index = this.tableData.indexOf(row);
        this.tableData.splice(index, 1);
        if (this.tableData.length == 0) {
          this.currentPage -= 1;
        }
        this.$message.success("删除成功");
        await this.FetchList();
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
      try {
        let rr = await this.$refs.loginForm.validate().then();
        this.dialogFormVisible = false;
        let data = this.editTableData;
        data.is_new = this.editTableDataNew ? 1 : 0;
        data.id = this.editTableDataNew ? 0 : this.editTableData.id;
        data.is_show = 1;
        let res = await this.request({
          url: "/admin/user/store",
          data: data,
          method: "post"
        });

        if (res.errno == 0) {
          if (this.editTableDataNew) {
            this.$message.success("添加成功");
          } else {
            this.$message.success("更新成功");
          }
          await this.FetchList();
        }
      } catch (e) {
        this.$message.error("添加失败");
      }
    },

    /**
     * @brief 拉取数据
     *
     * @returns:
     */
    async FetchList() {
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
        url: "/admin/user/index",
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
          const id = data.id; // 人员id
          const name = data.name; // 姓名
          const nickname = data.nickname; // 昵称
          const phone = data.phone; // 联系电话
          const gender = data.gender; // 性别
          const weixin_openid = data.weixin_openid; // 微信号
          const is_delete = data.is_delete; // 是否删除
          const head_img = data.head_img; // 头像
          const head_img2 = data.head_img2; // 头像2
          const last_login_time = data.last_login_time; // 上次登录时间
          const last_login_time2 = data.last_login_time2; // 上次登录时间2
          const edit_text = data.edit_text; // 文章1
          const edit_text2 = data.edit_text2; // 文章2
        }

        this.totalDataLen = count;
        this.tableData = resData["data"];
      }
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


