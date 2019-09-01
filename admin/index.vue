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
        <el-button @click="OnClickAddItem" icon="el-icon-plus" type="success">新增健身房管理员</el-button>

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
                  <el-form-item label="管理员id" style="width:100%;">
                    <span>{{props.row.id}}</span>
                  </el-form-item>
                  <el-form-item label="管理员用户名" style="width:100%;">
                    <span>{{props.row.username}}</span>
                  </el-form-item>
<!--                   <el-form-item label="管理员密码" style="width:100%;">
                    <span>{{props.row.password}}</span>
                  </el-form-item> -->
<!--                   <el-form-item label="管理员秘钥" style="width:100%;">
                    <span>{{props.row.password_salt}}</span>
                  </el-form-item> -->
                  <el-form-item label="昵称" style="width:100%;">
                    <span>{{props.row.nickname}}</span>
                  </el-form-item>
                  <el-form-item label="上次登录ip" style="width:100%;">
                    <span>{{props.row.last_login_ip}}</span>
                  </el-form-item>
                  <el-form-item label="上次登录时间" style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{props.row.last_login_time}}</span>
                  </el-form-item>
                  <el-form-item label="添加时间" style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{props.row.add_time}}</span>
                  </el-form-item>
                  <el-form-item label="更新时间" style="width:100%;">
                    <el-icon name="time"></el-icon>
                    <span>{{props.row.update_time}}</span>
                  </el-form-item>
                  <el-form-item label="角色" style="width:100%;">
                    <el-card class="box-card">
                      <div class="component-item">
                        <pan-thumb
                          width="100px"
                          height="100px"
                          :image="props.row.avatar"
                        ></pan-thumb>
                      </div>
                    </el-card>
                  </el-form-item>
                  <el-form-item label="管理员权限"  style="width:100%;">
                    <span>{{rolePermissionOptions[props.row.admin_role_permission]}}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>

            <!--++隐藏的项++-->
            <!--++显示的项++-->
            <el-table-column label="管理员id" prop="id"></el-table-column>
            <el-table-column label="管理员用户名" prop="username"></el-table-column>
<!--             <el-table-column label="管理员密码" prop="password"></el-table-column>
            <el-table-column label="管理员秘钥" prop="password_salt"></el-table-column> -->
            <el-table-column label="昵称" prop="nickname"></el-table-column>
            <el-table-column label="上次登录ip" prop="last_login_ip"></el-table-column>
            <el-table-column label="上次登录时间" prop="last_login_time">
              <template slot-scope="props">
                    <el-icon name="time"></el-icon>
                    <span>{{props.row.last_login_time}}</span>
              </template>
            </el-table-column>
            <el-table-column label="添加时间" prop="add_time">
              <template slot-scope="props">
                    <el-icon name="time"></el-icon>
                    <span>{{props.row.add_time}}</span>
              </template>
            </el-table-column>
            <el-table-column label="更新时间" prop="update_time">
              <template slot-scope="props">
                    <el-icon name="time"></el-icon>
                    <span>{{props.row.update_time}}</span>
              </template>
            </el-table-column>
            <el-table-column label="角色" prop="avatar">
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
            <el-table-column label="管理员权限" prop="admin_role_permission">
              <template slot-scope="props">
                <span>{{rolePermissionOptions[props.row.admin_role_permission]}}</span>
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
          :page-sizes="[10, 30, 50, 100]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalDataLen"
        ></el-pagination>
      </el-col>

      <!--Edit It Begin -->
      <el-dialog title="健身房管理员" :visible.sync="dialogFormVisible">
        <el-form :model="editTableData" :rules="rules" ref="editTableData"
>
          <el-form-item v-show="!editTableDataNew" label="管理员id" :label-width="formLabelWidth" prop="id">
            <el-input placeholder="请输入管理员id" type="number" :disabled="true" v-model="editTableData.id"></el-input>
          </el-form-item>
          <el-form-item label="管理员用户名" :label-width="formLabelWidth" prop="username">
            <el-input placeholder="请输入管理员用户名" v-model="editTableData.username"></el-input>
          </el-form-item>
          <el-form-item label="管理员密码" :label-width="formLabelWidth" prop="password">
            <el-input placeholder="请输入管理员密码" v-model="editTableData.password"></el-input>
          </el-form-item>
<!--           <el-form-item label="管理员秘钥" :label-width="formLabelWidth" prop="password_salt">
            <el-input placeholder="请输入管理员秘钥" v-model="editTableData.password_salt"></el-input>
          </el-form-item> -->
          <el-form-item label="昵称" :label-width="formLabelWidth" prop="nickname">
            <el-input placeholder="请输入昵称" v-model="editTableData.nickname"></el-input>
          </el-form-item>
          <!-- <el-form-item label="上次登录ip" :label-width="formLabelWidth" prop="last_login_ip">
            <el-input placeholder="请输入上次登录ip" v-model="editTableData.last_login_ip"></el-input>
          </el-form-item> -->
          <!-- <el-form-item label="上次登录时间" :label-width="formLabelWidth" prop="last_login_time">
            <el-date-picker
              v-model="editTableData.last_login_time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="请选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="添加时间" :label-width="formLabelWidth" prop="add_time">
            <el-date-picker
              v-model="editTableData.add_time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="请选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="更新时间" :label-width="formLabelWidth" prop="update_time">
            <el-date-picker
              v-model="editTableData.update_time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="请选择日期时间"
            ></el-date-picker>
          </el-form-item> -->
          <el-form-item label="角色" :label-width="formLabelWidth" prop="avatar">
            <div class="component-item">
              <pan-thumb :image="editTableData.avatar || ''"></pan-thumb>
            </div>
            <el-button
              type="primary"
              icon="upload"
              style="margin-left:30px"
              @click="OnClickAvatar"
            >上传角色</el-button>
          </el-form-item>
          <el-form-item
            label="管理员权限"
            :label-width="formLabelWidth"
	     prop="admin_role_permission"
          >
          <el-select placeholder="请输入管理员权限"  v-model="editTableData.admin_role_permission" class="filter-item">
            <el-option
              v-for="(item, idx) in rolePermissionOptions"
              :key="idx"
              :label="item"
              :value="idx"
            />
          </el-select>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="OnClickCancleForm">取 消</el-button>
          <el-button type="primary" @click="OnClickOkForm">确 定</el-button>
        </div>
      </el-dialog>
      <!--Edit It End -->
      <el-dialog title="健身房管理员" :visible.sync="tinymceDialogFormVisible" width="100%">
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
      rolePermissionOptions: {
        "admin": "超级管理员",
        "editor": "普通管理员"
      },
      importanceOptions: {
        id: "管理员id",
        username: "管理员用户名",
        password: "管理员密码",
        password_salt: "管理员秘钥",
        nickname: "昵称",
        last_login_ip: "上次登录ip",
        last_login_time: "上次登录时间",
        add_time: "添加时间",
        update_time: "更新时间",
        avatar: "角色",
        admin_role_permission: "管理员权限"
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
          { required: true, message: "请输入管理员id", trigger: "blur" },
        ],
        username: [
          { required: true, message: "请输入管理员用户名", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入管理员密码", trigger: "blur" },
        ],
        password_salt: [
          { required: true, message: "请输入管理员秘钥", trigger: "blur" },
        ],
        nickname: [
          { required: true, message: "请输入昵称", trigger: "blur" },
        ],
        last_login_ip: [
          { required: true, message: "请输入上次登录ip", trigger: "blur" },
        ],
        last_login_time: [
          { required: true, message: "请输入上次登录时间", trigger: "blur" },
        ],
        add_time: [
          { required: true, message: "请输入添加时间", trigger: "blur" },
        ],
        update_time: [
          { required: true, message: "请输入更新时间", trigger: "blur" },
        ],
        avatar: [
          { required: true, message: "请选择角色图片", trigger: "blur" },
        ],
        admin_role_permission: [
          { required: true, message: "请输入管理员权限", trigger: "blur" },
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
      this.editTableData.avatar = process.env.BASE_API + resData.fileUrl;
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
        id: 0, // 管理员id
        username: "", // 管理员用户名
        password: "", // 管理员密码
        password_salt: "", // 管理员秘钥
        nickname: "", // 昵称
        last_login_ip: "", // 上次登录ip
        last_login_time: new Date(), // 上次登录时间
        add_time: new Date(), // 添加时间
        update_time: new Date(), // 更新时间
        avatar:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555575698912&di=4504a218f051995cb6ebba9967b61098&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fc75c10385343fbf26f28e948bc7eca8065388f51.jpg", // 角色
        admin_role_permission: "admin" // 管理员权限
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
      this.editTableData.password = "";
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
        url: "/admin/admin/delete",
        data: { id: row.id }, // 管理员id
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

      let data = this.editTableData;
      data.id = this.editTableDataNew ? 0 : this.editTableData.id;
      data.is_show = 1;
      let res = await this.request({
        url: "/admin/admin/store",
        data: data,
        method: "post"
      });

      if (res.errno == 0) {
        if (this.editTableDataNew) {
          this.$message.success("添加成功");
        } else {
          this.$message.success("更新成功");
        }
        
        if (this.$store.getters.id == res.data.id) {
          this.$store.dispatch("UpdateUserInfo", res.data);
        }
        await this.FetchList();


        this.dialogFormVisible = false;
      }
    },

    /**
     * @brief 拉取数据
     *
     * @returns:
     */
    async FetchList() {
      // let res_all = await this.request({
      //   url: "/admin/admin/all",
      //   method: "post"
      // });
      // if (res_all["data"] != null) {
      //   for (let i = 0; i < res_all["data"].length; i++) {
      //     const data = res_all["data"][i]; // 健身房管理员
      //     const id = data.id; // 管理员id
      //     const username = data.username; // 管理员用户名
      //     const password = data.password; // 管理员密码
      //     const password_salt = data.password_salt; // 管理员秘钥
      //     const nickname = data.nickname; // 昵称
      //     const last_login_ip = data.last_login_ip; // 上次登录ip
      //     const last_login_time = data.last_login_time; // 上次登录时间
      //     const add_time = data.add_time; // 添加时间
      //     const update_time = data.update_time; // 更新时间
      //     const avatar = data.avatar; // 角色
      //     const admin_role_permission = data.admin_role_permission; // 管理员权限
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
        url: "/admin/admin/index",
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
          const id = data.id; // 管理员id
          const username = data.username; // 管理员用户名
          const password = data.password; // 管理员密码
          const password_salt = data.password_salt; // 管理员秘钥
          const nickname = data.nickname; // 昵称
          const last_login_ip = data.last_login_ip; // 上次登录ip
          const last_login_time = data.last_login_time; // 上次登录时间
          const add_time = data.add_time; // 添加时间
          const update_time = data.update_time; // 更新时间
          const avatar = data.avatar; // 角色
          const admin_role_permission = data.admin_role_permission; // 管理员权限
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


