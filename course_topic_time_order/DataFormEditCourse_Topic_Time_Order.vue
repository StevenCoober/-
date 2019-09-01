<template>
  <div>
    <el-form :model="editTableData" :rules="rules" ref="editTableData">
          <el-form-item  v-show="!editTableDataNew" label="用户预定情况id" :label-width="formLabelWidth" prop="id">
              <el-input placeholder="请输入用户预定情况id" type="number" :disabled="true" v-model="editTableData.id"></el-input>
          </el-form-item>
          <el-form-item label="课程时间id" :label-width="formLabelWidth" prop="topic_time_id">
              <el-input placeholder="请输入课程时间id" type="number" v-model="editTableData.topic_time_id"></el-input>
          </el-form-item>
          <el-form-item label="预定的用户" :label-width="formLabelWidth" prop="user_id">
              <el-input placeholder="请输入预定的用户" type="number" v-model="editTableData.user_id"></el-input>
          </el-form-item>
          <el-form-item label="预定日期" :label-width="formLabelWidth" prop="reserve_time">
            <el-date-picker
              v-model="editTableData.reserve_time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="请选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="订单状态//0未开始1进行中2已完成" :label-width="formLabelWidth" prop="order_state">
              <el-input placeholder="请输入订单状态//0未开始1进行中2已完成" type="number" v-model="editTableData.order_state"></el-input>
          </el-form-item>
    </el-form>
    <div slot="footer" style="text-align: right;" class="dialog-footer">
      <el-button @click="OnClickCancleForm">取 消</el-button>
      <el-button type="primary" @click="OnClickOkForm">确 定</el-button>
    </div>
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
</template>
<script>
import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";
import xxevent from "./xxevent";
export default {
  name: "DataFormEditCourse_Topic_Time_Order",
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore
  },

  // 创建的时候
  async created() {
    xxevent.bindtarget(this);
  },

  // 销毁的时候
  async destroyed() {
   xxevent.unbindtarget(this);
  },

  data() {
    return {
      editTableDataNew: false,
      editTableData: {},
      imagecropperKey: 0, //上传图片的key
      formLabelWidth: "120px", // 数据框的尺寸
      imagecropperShow: false, //上传控件是否显示
      rules: {
        id: [
          { required: true, message: "请输入用户预定情况id", trigger: "blur" },
        ],
        topic_time_id: [
          { required: true, message: "请输入课程时间id", trigger: "blur" },
        ],
        user_id: [
          { required: true, message: "请输入预定的用户", trigger: "blur" },
        ],
        reserve_time: [
          { required: true, message: "请输入预定日期", trigger: "blur" },
        ],
        order_state: [
          { required: true, message: "请输入订单状态//0未开始1进行中2已完成", trigger: "blur" },
        ],
      }
    };
  },

   methods: {
      /**
     * @brief 点击上传的按钮
     */
    OnClickAvatar() {
      this.imagecropperShow = true;
    },

    InitNewData() {
      this.editTableData = {
        id: 0, // 用户预定情况id
        topic_time_id: 0, // 课程时间id
        user_id: 0, // 预定的用户
        reserve_time: new Date(), // 预定日期
        order_state: 0, // 订单状态//0未开始1进行中2已完成
      };

      this.editTableDataNew = true;
    },

    // TODO More Image
    OnCropSuccess(resData) {
      this.imagecropperShow = false;
      this.editTableData.head_img = process.env.BASE_API + resData.fileUrl;
      this.imagecropperKey += 1;
    },

    /**
     * @brief 编辑取消
     */
    OnClickCancleForm() {
      xxevent.emit("EditDialogShow_Course_Topic_Time_Order", false); // 新增或编辑界面显示
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
        url: "/admin/course_topic_time_order/store",
        data: data,
        method: "post"
      });

      if (res.errno == 0) {
        if (this.editTableDataNew) {
          this.$message.success("添加成功");
        } else {
          this.$message.success("更新成功");
        }
        xxevent.emit("EditDialogShow_Course_Topic_Time_Order", false); // 新增或编辑界面显示
        xxevent.emit("SendUpdateTableItem_Course_Topic_Time_Order"); // 更新查询数据项
      }

    },

    

    /////////////////////////////////////////////////////

    // 新增数据
    onNewObj_Course_Topic_Time_Order() {
      this.editTableDataNew = true;
      this.InitNewData();
    },

    // 编辑数据
    onEditObj_Course_Topic_Time_Order(row) {
      this.editTableDataNew = false;
      this.editTableData = row;
    },
   }
    
};
</script>
