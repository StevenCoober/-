<template>
  <div class="app-container">
    <div class="filter-container">
      <!-- 多数据窗口 | 教练 | -->
      <DataTableDialogCoach>
        <!-- <DataTableCoach :queryItemKey.sync="query_key_coach" :queryItemName.sync="query_item_coach" @select="OnSelectTableCoach"></DataTableCoach> -->
        <DataTableCoach :oprecision="false"></DataTableCoach>
      </DataTableDialogCoach>

      <!-- 多数据窗口 | 会员用户 | -->
      <DataTableDialogMember>
        <DataTableMember :oprecision="false"></DataTableMember>
      </DataTableDialogMember>


      <!-- 多数据窗口 | 顾问 | -->
    <DataTableDialogAdviser>
      <DataTableAdviser :oprecision="false"></DataTableAdviser>
    </DataTableDialogAdviser>

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
        <!-- <el-button @click="OnClickAddItem" icon="el-icon-plus" type="success">新增人员</el-button> -->

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
                  <el-form-item label="人员id" style="width:100%;">
                    <span>{{props.row.id}}</span>
                  </el-form-item>
                  <!-- <el-form-item label="名称" style="width:100%;">
                    <span>{{props.row.username}}</span>
                  </el-form-item>
                  <el-form-item label="密码" style="width:100%;">
                    <span>{{props.row.password}}</span>
                  </el-form-item> -->
                  <el-form-item label="注册时间" style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{props.row.register_time}}</span>
                  </el-form-item>
                  <el-form-item label="注册ip" style="width:100%;">
                    <span>{{props.row.register_ip}}</span>
                  </el-form-item>
                  <el-form-item label="上次登录时间" style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{props.row.last_login_time}}</span>
                  </el-form-item>
                  <el-form-item label="上次登录ip" style="width:100%;">
                    <span>{{props.row.last_login_ip}}</span>
                  </el-form-item>
                  <!-- <el-form-item label="微信openid" style="width:100%;">
                    <span>{{props.row.weixin_openid}}</span>
                  </el-form-item> -->
                  <el-form-item label="头像" style="width:100%;">
                    <el-card class="box-card">
                      <div class="component-item">
                        <pan-thumb width="100px" height="100px" :image="props.row.avatar"></pan-thumb>
                      </div>
                    </el-card>
                  </el-form-item>
                  <el-form-item label="性别">
                    <span>{{["无性别", "男", "女"][props.row.gender]}}</span>
                  </el-form-item>
                  <el-form-item label="昵称">
                    <span>{{props.row.nickname}}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>

            <!--++隐藏的项++-->
            <!--++显示的项++-->
            <el-table-column label="人员id" prop="id"></el-table-column>
            <!-- <el-table-column label="名称" prop="username"></el-table-column> -->
            <!-- <el-table-column label="密码" prop="password"></el-table-column> -->
            <el-table-column label="注册时间" prop="register_time">
              <template slot-scope="props">
                    <el-icon name="time"></el-icon>
                    <span>{{props.row.register_time}}</span>
              </template>
            </el-table-column>
            <el-table-column label="注册ip" prop="register_ip"></el-table-column>
            <el-table-column label="上次登录时间" prop="last_login_time">
              <template slot-scope="props">
                    <el-icon name="time"></el-icon>
                    <span>{{props.row.last_login_time}}</span>
              </template>
            </el-table-column>
            <el-table-column label="上次登录ip" prop="last_login_ip"></el-table-column>
            <!-- <el-table-column label="微信openid" prop="weixin_openid"></el-table-column> -->
            <el-table-column label="头像" prop="avatar">
              <template slot-scope="props">
                    <el-card class="box-card">
                      <div class="component-item">
                        <pan-thumb
                          width="100px"
                          height="100px"
                          :image="props.row.avatar"
                        ></pan-thumb>
                      </div>
                    </el-card>
              </template>
            </el-table-column>
            <el-table-column label="性别">
              <template slot-scope="props">
                <span>{{["无性别", "男", "女"][props.row.gender]}}</span>
              </template>
            </el-table-column>
            <el-table-column label="昵称" prop="nickname"></el-table-column>
            <el-table-column label="已经绑定的角色">
              <template slot-scope="props">
                <el-tag v-if="props.row.is_coach" effect="dark" style="margin-left: 10px;">教练 </el-tag>
                <el-tag v-if="props.row.is_member" type="success" effect="plain" style="margin-left: 10px;">会员</el-tag>
                <el-tag v-if="props.row.is_adviser" type="warning" effect="plain" style="margin-left: 10px;">顾问</el-tag>
                <el-tag v-if="!props.row.is_coach && !props.row.is_member && !props.row.is_adviser" type="danger" effect="plain" style="margin-left: 10px;">无</el-tag>
              </template>
            </el-table-column>
            <el-table-column label="绑定">
              <template slot-scope="props">
                <div >
                  <el-button
                    size="small"
                    type="primary"
                    style="margin-left: 10px;"
                    icon="el-icon-edit"
                    @click="OnClickSetCoach(props.$index, props.row)"
                  >设为教练</el-button>
                  <el-button
                    size="small"
                    type="success"
                    style="margin-left: 10px;"
                    icon="el-icon-edit"
                    @click="OnClickSetMember(props.$index, props.row)"
                  >设为会员</el-button>
                  <el-button
                    size="small"
                    type="warning"
                    style="margin-left: 10px;"
                    icon="el-icon-edit"
                    @click="OnClickSetAdviser(props.$index, props.row)"
                  >设为顾问</el-button>
                </div>
                
              </template>
            </el-table-column>
            <!--++显示的项++-->
            <!-- <el-table-column label="操作">
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
            </el-table-column> -->
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
      <el-dialog title="微信用户" :visible.sync="dialogFormVisible">
        <el-form :model="editTableData" :rules="rules" ref="editTableData">
          <el-form-item v-show="!editTableDataNew" label="人员id" :label-width="formLabelWidth" >
            <el-input type="number" :disabled="true" v-model="editTableData.id"></el-input>
          </el-form-item>
          <el-form-item label="名称" :label-width="formLabelWidth">
            <el-input v-model="editTableData.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
            <el-input v-model="editTableData.password"></el-input>
          </el-form-item>
          <el-form-item label="注册时间" :label-width="formLabelWidth">
            <el-date-picker
              v-model="editTableData.register_time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="注册ip" :label-width="formLabelWidth">
            <el-input v-model="editTableData.register_ip"></el-input>
          </el-form-item>
          <el-form-item label="上次登录时间" :label-width="formLabelWidth">
            <el-date-picker
              v-model="editTableData.last_login_time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="上次登录ip" :label-width="formLabelWidth">
            <el-input v-model="editTableData.last_login_ip"></el-input>
          </el-form-item>
          <el-form-item label="微信openid" :label-width="formLabelWidth">
            <el-input v-model="editTableData.weixin_openid"></el-input>
          </el-form-item>
          <el-form-item label="头像" :label-width="formLabelWidth">
            <div class="component-item">
              <pan-thumb :image="editTableData.avatar || ''"></pan-thumb>
            </div>
            <el-button
              type="primary"
              icon="upload"
              style="margin-left:30px"
              @click="OnClickAvatar"
            >上传头像</el-button>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth">
            <el-input type="number" v-model="editTableData.gender"></el-input>
          </el-form-item>
          <el-form-item label="昵称" :label-width="formLabelWidth">
            <el-input v-model="editTableData.nickname"></el-input>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="OnClickCancleForm">取 消</el-button>
          <el-button type="primary" @click="OnClickOkForm">确 定</el-button>
        </div>
      </el-dialog>
      <!--Edit It End -->
      <el-dialog title="人员" :visible.sync="tinymceDialogFormVisible" width="100%">
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
          <el-button
            type="primary"
            @click="tinymceDialogFormVisible = false; popKeyForEditTableDataTinymce();"
          >确 定</el-button>
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
        url="/upload/avatarUpload"
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

import xxevent from "./xxevent";

import DataTableDialogCoach from "./DataTableDialogCoach";
import DataTableCoach from "./DataTableCoach";
import DataFormCoach from "./DataFormCoach";
import DataFormEditCoach from "./DataFormEditCoach";
import DataFormEditDialogCoach from "./DataFormEditDialogCoach";

import DataTableDialogMember from "./DataTableDialogMember";
import DataTableMember from "./DataTableMember";
import DataFormMember from "./DataFormMember";
import DataFormEditMember from "./DataFormEditMember";
import DataFormEditDialogMember from "./DataFormEditDialogMember";


import DataItemAdviser from "./DataItemAdviser";
import DataTableDialogAdviser from "./DataTableDialogAdviser";
import DataTableAdviser from "./DataTableAdviser";
import DataFormAdviser from "./DataFormAdviser";
import DataFormEditAdviser from "./DataFormEditAdviser";
import DataFormEditDialogAdviser from "./DataFormEditDialogAdviser";

export default {
  name: "UserPage",
  // 声明导入的控件
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore,

    DataTableDialogCoach,
    DataTableCoach,
    DataFormCoach,
    DataFormEditCoach,
    DataFormEditDialogCoach,

    DataTableDialogMember,
    DataTableMember,
    DataFormMember,
    DataFormEditMember,
    DataFormEditDialogMember,


    DataItemAdviser,
    DataTableDialogAdviser,
    DataTableAdviser,
    DataFormAdviser,
    DataFormEditAdviser,
    DataFormEditDialogAdviser,
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
        id: "人员id",
        username: "名称",
        password: "密码",
        register_time: "注册时间",
        register_ip: "注册ip",
        last_login_time: "上次登录时间",
        last_login_ip: "上次登录ip",
        weixin_openid: "微信openid",
        avatar: "头像",
        gender: "性别",
        nickname: "昵称"
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
        username: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
        ],
      }
    };
  },

  // 创建的时候
  async created() {
    xxevent.bindtarget(this);
    this.init();
    await this.FetchList();
  },

  // 销毁的时候
  async destroyed() {
    xxevent.unbindtarget(this);
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
    OnCropSuccess(resData) {
      this.imagecropperShow = false;
      this.editTableData.pic_url = process.env.BASE_API + resData.fileUrl;
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
        username: "", // 名称
        password: "", // 密码
        register_time: new Date(), // 注册时间
        register_ip: "", // 注册ip
        last_login_time: new Date(), // 上次登录时间
        last_login_ip: "", // 上次登录ip
        weixin_openid: "", // 微信openid
        avatar:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555575698912&di=4504a218f051995cb6ebba9967b61098&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fc75c10385343fbf26f28e948bc7eca8065388f51.jpg", // 头像
        gender: 0, // 性别
        nickname: "" // 昵称
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
      this.dialogFormVisible = false;

      let data = this.editTableData;
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
    },

    /**
     * @brief 拉取数据
     *
     * @returns:
     */
    async FetchList() {
      // let res_all = await this.request({
      //   url: "/admin/user/all",
      //   method: "post"
      // });
      // if (res_all["data"] != null) {
      //   for (let i = 0; i < res_all["data"].length; i++) {
      //     const data = res_all["data"][i]; // 人员
      //     const id = data.id; // 人员id
      //     const username = data.username; // 名称
      //     const password = data.password; // 密码
      //     const register_time = data.register_time; // 注册时间
      //     const register_ip = data.register_ip; // 注册ip
      //     const last_login_time = data.last_login_time; // 上次登录时间
      //     const last_login_ip = data.last_login_ip; // 上次登录ip
      //     const weixin_openid = data.weixin_openid; // 微信openid
      //     const avatar = data.avatar; // 头像
      //     const gender = data.gender; // 性别
      //     const nickname = data.nickname; // 昵称
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
          const username = data.username; // 名称
          const password = data.password; // 密码
          const register_time = data.register_time; // 注册时间
          const register_ip = data.register_ip; // 注册ip
          const last_login_time = data.last_login_time; // 上次登录时间
          const last_login_ip = data.last_login_ip; // 上次登录ip
          const weixin_openid = data.weixin_openid; // 微信openid
          const avatar = data.avatar; // 头像
          const gender = data.gender; // 性别
          const nickname = data.nickname; // 昵称

          let res = await this.request({
            url: "/admin/member/infos",
            data: {
              key: "user_id",
              name: id,
            },
            method: "post"
          });

          const is_member = Object.keys(res.data).length != 0;

          res = await this.request({
            url: "/admin/coach/infos",
            data: {
              key: "user_id",
              name: id,
            },
            method: "post"
          });

          const is_coach = Object.keys(res.data).length != 0;


          res = await this.request({
            url: "/admin/adviser/infos",
            data: {
              key: "user_id",
              name: id,
            },
            method: "post"
          });

          const is_adviser = Object.keys(res.data).length != 0;

          resData["data"][i].is_member = is_member;

          resData["data"][i].is_coach = is_coach;

          resData["data"][i].is_adviser = is_adviser;

        }

        this.totalDataLen = count;
        this.tableData = resData["data"];
      }
      this.loading = false;
    },

    // 更新查询数据项
    async onSendUpdateTableItem_User() {
      await this.FetchList();
    },

    /**
     * @brief 
     *
     * @param: index
     * @param: row
     */
    async OnClickSetCoach(index, row) {
      xxevent.emit("QueryTableDialogShow_Coach", true); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Coach", "name", "", row.id)); // 查询数据项
    },

    async OnClickSetMember(index, row) {
      xxevent.emit("QueryTableDialogShow_Member", true); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Member", "name", "", row.id)); // 查询数据项
    },

    async OnClickSetAdviser(index, row) {
      xxevent.emit("QueryTableDialogShow_Adviser", true); // 显示查询数据项窗体
      this.$nextTick(() => xxevent.emit("SendQueryTableItem_Adviser", "name", "", row.id)); // 查询数据项
    },

    
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


