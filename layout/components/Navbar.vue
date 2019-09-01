<template>
  <div class="navbar">
    <hamburger
      :toggle-click="toggleSideBar"
      :is-active="sidebar.opened"
      class="hamburger-container"
    />
    <breadcrumb/>
    <el-dropdown @command="userOperation" class="avatar-container">
      <div class="avatar-wrapper">
        欢迎您:{{name}}
        <!-- <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar"> -->
        <img
          :src="avatar"
          class="user-avatar"
        >
        <i class="el-icon-caret-bottom"/>
      </div>
      <el-dropdown-menu slot="dropdown" class="user-dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>主页</el-dropdown-item>
        </router-link>
        <el-dropdown-item command="editPaw">修改密码</el-dropdown-item>
        <el-dropdown-item divided>
          <span style="display:block;" @click="logout">退出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dialog
      title="修改密码"
      :visible.sync="dialog.editPaw.show"
      :modal-append-to-body="false"
      custom-class="editPawDialog"
    >
      <el-form :model="editPaw" :rules="editPawRules" ref="editPaw" label-width="100px">
        <el-form-item label="旧密码" prop="oldPaw">
          <el-input v-model="editPaw.oldPaw" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPaw">
          <el-input v-model="editPaw.newPaw" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" prop="confirmNewPaw">
          <el-input v-model="editPaw.confirmNewPaw" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div class="textC">
        <el-button type="primary" @click="editPawSubmit">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";
// import getters from '../../../store/getters'
export default {
  components: {
    Breadcrumb,
    Hamburger
  },

  data() {
    return {
      dialog: {
        editPaw: {
          show: false
        }
      },
      editPaw: {
        oldPaw: "",
        newPaw: "",
        confirmNewPaw: ""
      },
      editPawRules: {
        oldPaw: [{ required: true, message: "请输入旧密码", trigger: "blur" }],
        newPaw: [
          { required: true, message: "请输入新密码", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur"
          },
          {
            // eslint-disable-next-line
            validator(rule, value, callback, source, options) {
              var errors = [];
              if (!/^[a-z0-9]+$/.test(value)) {
                console.log("不符合输入规则");
                errors.push("请输入字母或特殊字符");
              }
              callback(errors);
            }
          }
        ],
        confirmNewPaw: [
          { required: true, message: "请再次输入新密码", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur"
          },
          {
            // eslint-disable-next-line
            validator(rule, value, callback, source, options) {
              var errors = [];
              // if (!/^[a-z0-9]+$/.test(value)) {
              //   console.log("不符合输入规则");
              //   errors.push("请输入字母或特殊字符");
              // }
              callback(errors);
            }
          }
        ]
      }
    };
  },

  computed: {
    ...mapGetters(["sidebar", "avatar", "name"])
  },
  methods: {
    userOperation(command) {
      switch (command) {
        case "editPaw":
          this.dialog.editPaw.show = true;
          console.log("编辑密码");
          break;
      }
    },
    async editPawSubmit() {
      this.$refs.editPaw.validate(async valid => {
        if (valid) {
          let oldPaw = this.editPaw.oldPaw;
          let newPaw = this.editPaw.newPaw;
          let data = {
            oldPaw: oldPaw,
            newPaw: newPaw, // 管理员密码
          };

          let res = await this.request({
            url: "/admin/admin/modifypwd",
            data: data,
            method: "post"
          });
          
          this.editPaw.oldPaw = '';
          this.editPaw.newPaw = '';
          this.editPaw.confirmNewPaw = '';
          this.dialog.editPaw.show = false;
          if (res.errno == 0) {
            this.$message.success("修改成功");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    toggleSideBar() {
      this.$store.dispatch("ToggleSideBar");
    },
    logout() {
      this.$store.dispatch("LogOut").then(() => {
        location.reload(); // 为了重新实例化vue-router对象 避免bug
      });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 90px;
  line-height: 50px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      line-height: initial;
      .user-avatar {
        width: 80px;
        height: 80px;
        border-radius: 50px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -30px;
        top: 60px;
        font-size: 30px;
      }
    }
  }
}
</style>

