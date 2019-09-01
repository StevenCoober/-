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
          <el-button type="primary" icon="el-icon-search" @click="FetchList">查询</el-button>
        </el-form-item>

        <!--新增按钮-->
        <el-button @click="OnClickAddItem" icon="el-icon-plus" type="success">新增教练申请请求</el-button>

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
                  <el-form-item label="教练申请请求id" style="width:100%;">
                    <span>{{props.row.id}}</span>
                  </el-form-item>
                  <el-form-item label="微信用户id" style="width:100%;">
                    <span>{{props.row.user_id}}</span>
                  </el-form-item>
                  <el-form-item label="姓名" style="width:100%;">
                    <span>{{props.row.name}}</span>
                  </el-form-item>
                  <el-form-item label="联系电话" style="width:100%;">
                    <span>{{props.row.mobile}}</span>
                  </el-form-item>
                  <el-form-item label="生日" style="width:100%;">
                    <span>{{props.row.birthday}}</span>
                  </el-form-item>
                  <el-form-item label="联系地址" style="width:100%;">
                    <span>{{props.row.address}}</span>
                  </el-form-item>
                  <el-form-item label="价格" style="width:100%;">
                    <span>{{props.row.price}}</span>
                  </el-form-item>
                  <el-form-item label="简介" style="width:100%;">
                    <span style="white-space: pre-line;">{{props.row.summary}}</span>
                  </el-form-item>
                  <el-form-item label="带课量" style="width:100%;">
                    <span>{{props.row.num}}</span>
                  </el-form-item>
                  <el-form-item label="特长" style="width:100%;">
                    <span>{{props.row.skill}}</span>
                  </el-form-item>
                  <el-form-item label="头像" style="width:100%;">
                    <el-card class="box-card">
                      <div class="component-item">
                        <pan-thumb
                          width="100px"
                          height="100px"
                          :image="props.row.head_img"
                        ></pan-thumb>
                      </div>
                    </el-card>
                  </el-form-item>
                  <el-form-item label="收入" style="width:100%;">
                    <span>{{props.row.income}}</span>
                  </el-form-item>
                  <el-form-item label="浏览量" style="width:100%;">
                    <span>{{props.row.views}}</span>
                  </el-form-item>
                  <el-form-item label="排序" style="width:100%;">
                    <span>{{props.row.paixu}}</span>
                  </el-form-item>
                  <el-form-item label="是否是明星教练" style="width:100%;">
                    <span>{{props.row.is_star}}</span>
                  </el-form-item>
                  <el-form-item label="请求时间" style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{props.row.request_time}}</span>
                  </el-form-item>
                  <el-form-item label="请求状态//0未处理1已经处理" style="width:100%;">
                    <span>{{props.row.state}}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>

            <!--++隐藏的项++-->
            <!--++显示的项++-->
            <el-table-column label="教练申请请求id" prop="id"></el-table-column>
            <el-table-column label="微信用户id" prop="user_id"></el-table-column>
            <el-table-column label="姓名" prop="name"></el-table-column>
            <el-table-column label="联系电话" prop="mobile"></el-table-column>
            <el-table-column label="生日" prop="birthday"></el-table-column>
            <el-table-column label="联系地址" prop="address"></el-table-column>
            <el-table-column label="价格" prop="price"></el-table-column>
            <el-table-column style="white-space: pre-line;" label="简介" prop="summary"></el-table-column>
            <el-table-column label="带课量" prop="num"></el-table-column>
            <el-table-column label="特长" prop="skill"></el-table-column>
            <el-table-column label="头像" prop="head_img">
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
            </el-table-column>
            <el-table-column label="收入" prop="income"></el-table-column>
            <el-table-column label="浏览量" prop="views"></el-table-column>
            <el-table-column label="排序" prop="paixu"></el-table-column>
            <el-table-column label="是否是明星教练" prop="is_star"></el-table-column>
            <el-table-column label="请求时间" prop="request_time">
              <template slot-scope="props">
                    <el-icon name="time"></el-icon>
                    <span>{{props.row.request_time}}</span>
              </template>
            </el-table-column>
            <el-table-column label="请求状态//0未处理1已经处理" prop="state"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="props">
                <el-button
                  size="small"
                  type="primary"
                  icon="el-icon-edit"
                  @click="OnClickEditItem(props.$index, props.row)"
                >编辑</el-button>
                <el-button
                  size="small"
                  type="danger"
                  icon="el-icon-delete"
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
          :page-sizes="[10, 30, 50, 100]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalDataLen"
        ></el-pagination>
      </el-col>

      <!--Edit It Begin -->
      <el-dialog title="教练申请请求" :visible.sync="dialogFormVisible">
        <el-form :model="editTableData" :rules="rules" ref="editTableData"
>
          <el-form-item v-show="!editTableDataNew" label="教练申请请求id" :label-width="formLabelWidth" prop="id">
            <el-input placeholder="请输入教练申请请求id" type="number" :disabled="true" v-model="editTableData.id"></el-input>
          </el-form-item>
          <el-form-item label="微信用户id" :label-width="formLabelWidth" prop="user_id">
            <el-input placeholder="请输入微信用户id" type="number" v-model="editTableData.user_id"></el-input>
          </el-form-item>
          <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
            <el-input placeholder="请输入姓名" v-model="editTableData.name"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" :label-width="formLabelWidth" prop="mobile">
            <el-input placeholder="请输入联系电话" v-model="editTableData.mobile"></el-input>
          </el-form-item>
          <el-form-item label="生日" :label-width="formLabelWidth" prop="birthday">
            <el-input placeholder="请输入生日" v-model="editTableData.birthday"></el-input>
          </el-form-item>
          <el-form-item label="联系地址" :label-width="formLabelWidth" prop="address">
            <el-input placeholder="请输入联系地址" v-model="editTableData.address"></el-input>
          </el-form-item>
          <el-form-item label="价格" :label-width="formLabelWidth" prop="price">
            <el-input placeholder="请输入价格" type="number" v-model="editTableData.price"></el-input>
          </el-form-item>
          <el-form-item label="简介" :label-width="formLabelWidth" prop="summary">
            <el-input placeholder="请输入简介" :autosize="{minRow:3, maxRow:10}" type="textarea" v-model="editTableData.summary"></el-input>
          </el-form-item>
          <el-form-item label="带课量" :label-width="formLabelWidth" prop="num">
            <el-input placeholder="请输入带课量" type="number" v-model="editTableData.num"></el-input>
          </el-form-item>
          <el-form-item label="特长" :label-width="formLabelWidth" prop="skill">
            <el-input placeholder="请输入特长" v-model="editTableData.skill"></el-input>
          </el-form-item>
          <el-form-item label="头像" :label-width="formLabelWidth" prop="head_img">
            <div class="component-item">
              <pan-thumb :image="editTableData.head_img || ''"></pan-thumb>
            </div>
            <el-button
              type="primary"
              icon="upload"
              style="margin-left:30px"
              @click="OnClickAvatar"
            >上传头像</el-button>
          </el-form-item>
          <el-form-item label="收入" :label-width="formLabelWidth" prop="income">
            <el-input placeholder="请输入收入" type="number" v-model="editTableData.income"></el-input>
          </el-form-item>
          <el-form-item label="浏览量" :label-width="formLabelWidth" prop="views">
            <el-input placeholder="请输入浏览量" type="number" v-model="editTableData.views"></el-input>
          </el-form-item>
          <el-form-item label="排序" :label-width="formLabelWidth" prop="paixu">
            <el-input placeholder="请输入排序" type="number" v-model="editTableData.paixu"></el-input>
          </el-form-item>
          <el-form-item label="是否是明星教练" :label-width="formLabelWidth" prop="is_star">
            <el-input placeholder="请输入是否是明星教练" type="number" v-model="editTableData.is_star"></el-input>
          </el-form-item>
          <el-form-item label="请求时间" :label-width="formLabelWidth" prop="request_time">
            <el-date-picker
              v-model="editTableData.request_time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="请选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="请求状态//0未处理1已经处理" :label-width="formLabelWidth" prop="state">
            <el-input placeholder="请输入请求状态//0未处理1已经处理" type="number" v-model="editTableData.state"></el-input>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="OnClickCancleForm">取 消</el-button>
          <el-button type="primary" @click="OnClickOkForm">确 定</el-button>
        </div>
      </el-dialog>
      <!--Edit It End -->
      <el-dialog title="教练申请请求" :visible.sync="tinymceDialogFormVisible" width="100%">
        <template>
          <div class="components-container">
            <div>
              <tinymce :visible.sync="tinymceDialogFormVisible" v-model="tinymceEditText"/>
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
      pageSize: 10, // 当前查询每页多少数据
      totalDataLen: 0, // 数据总量,用作分页
      imagecropperKey: 0, //
      queryItemName: "", // 查询的关键字
      importanceOptions: { 
        id: "教练申请请求id", 
        user_id: "微信用户id", 
        name: "姓名", 
        mobile: "联系电话", 
        birthday: "生日", 
        address: "联系地址", 
        price: "价格", 
        summary: "简介", 
        num: "带课量", 
        skill: "特长", 
        head_img: "头像", 
        income: "收入", 
        views: "浏览量", 
        paixu: "排序", 
        is_star: "是否是明星教练", 
        request_time: "请求时间", 
        state: "请求状态//0未处理1已经处理", 
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
          { required: true, message: "请输入教练申请请求id", trigger: "blur" },
        ],
        user_id: [
          { required: true, message: "请输入微信用户id", trigger: "blur" },
        ],
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
        ],
        mobile: [
          { required: true, message: "请输入联系电话", trigger: "blur" },
        ],
        birthday: [
          { required: true, message: "请输入生日", trigger: "blur" },
        ],
        address: [
          { required: true, message: "请输入联系地址", trigger: "blur" },
        ],
        price: [
          { required: true, message: "请输入价格", trigger: "blur" },
        ],
        summary: [
          { required: true, message: "请输入简介", trigger: "blur" },
        ],
        num: [
          { required: true, message: "请输入带课量", trigger: "blur" },
        ],
        skill: [
          { required: true, message: "请输入特长", trigger: "blur" },
        ],
        head_img: [
          { required: true, message: "请选择头像图片", trigger: "blur" },
        ],
        income: [
          { required: true, message: "请输入收入", trigger: "blur" },
        ],
        views: [
          { required: true, message: "请输入浏览量", trigger: "blur" },
        ],
        paixu: [
          { required: true, message: "请输入排序", trigger: "blur" },
        ],
        is_star: [
          { required: true, message: "请输入是否是明星教练", trigger: "blur" },
        ],
        request_time: [
          { required: true, message: "请输入请求时间", trigger: "blur" },
        ],
        state: [
          { required: true, message: "请输入请求状态//0未处理1已经处理", trigger: "blur" },
        ],
      },
    };
  },

  // 创建的时候
  async created() {
    this.init();
    await this.FetchList();
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
        id: 0, // 教练申请请求id
        user_id: 0, // 微信用户id
        name: "", // 姓名
        mobile: "", // 联系电话
        birthday: "", // 生日
        address: "", // 联系地址
        price: 0, // 价格
        summary: "", // 简介
        num: 0, // 带课量
        skill: "", // 特长
        head_img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555575698912&di=4504a218f051995cb6ebba9967b61098&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fc75c10385343fbf26f28e948bc7eca8065388f51.jpg", // 头像
        income: 0, // 收入
        views: 0, // 浏览量
        paixu: 0, // 排序
        is_star: 0, // 是否是明星教练
        request_time: new Date(), // 请求时间
        state: 0, // 请求状态//0未处理1已经处理
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
        url: "/admin/coach_request/delete",
        data: { id: row.id}, // 教练申请请求id
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
        url: "/admin/coach_request/store",
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
    },

    /**
     * @brief 拉取数据
     *
     * @returns:
     */
    async FetchList() {
      // let res_all = await this.request({
      //   url: "/admin/coach_request/all",
      //   method: "post"
      // });
      // if (res_all["data"] != null) {
      //   for (let i = 0; i < res_all["data"].length; i++) {
      //     const data = res_all["data"][i]; // 教练申请请求
      //     const id = data.id; // 教练申请请求id
      //     const user_id = data.user_id; // 微信用户id
      //     const name = data.name; // 姓名
      //     const mobile = data.mobile; // 联系电话
      //     const birthday = data.birthday; // 生日
      //     const address = data.address; // 联系地址
      //     const price = data.price; // 价格
      //     const summary = data.summary; // 简介
      //     const num = data.num; // 带课量
      //     const skill = data.skill; // 特长
      //     const head_img = data.head_img; // 头像
      //     const income = data.income; // 收入
      //     const views = data.views; // 浏览量
      //     const paixu = data.paixu; // 排序
      //     const is_star = data.is_star; // 是否是明星教练
      //     const request_time = data.request_time; // 请求时间
      //     const state = data.state; // 请求状态//0未处理1已经处理
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
        url: "/admin/coach_request/index",
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
          const id = data.id; // 教练申请请求id
          const user_id = data.user_id; // 微信用户id
          const name = data.name; // 姓名
          const mobile = data.mobile; // 联系电话
          const birthday = data.birthday; // 生日
          const address = data.address; // 联系地址
          const price = data.price; // 价格
          const summary = data.summary; // 简介
          const num = data.num; // 带课量
          const skill = data.skill; // 特长
          const head_img = data.head_img; // 头像
          const income = data.income; // 收入
          const views = data.views; // 浏览量
          const paixu = data.paixu; // 排序
          const is_star = data.is_star; // 是否是明星教练
          const request_time = data.request_time; // 请求时间
          const state = data.state; // 请求状态//0未处理1已经处理
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


