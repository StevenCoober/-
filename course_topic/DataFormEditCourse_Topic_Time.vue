<template>
  <div>
    <el-form :model="editTableData" :rules="rules" ref="editTableData">
          <el-form-item  v-show="!editTableDataNew" label="课程时间id" :label-width="formLabelWidth" prop="id">
              <el-input placeholder="请输入课程时间id" type="number" :disabled="true" v-model="editTableData.id"></el-input>
          </el-form-item>
          <!-- <el-form-item label="课程主题id" :label-width="formLabelWidth" prop="course_topic_id">
              <el-input placeholder="请输入课程主题id" type="number" v-model="editTableData.course_topic_id"></el-input>
          </el-form-item> -->
          <el-form-item label="课程主题" :label-width="formLabelWidth" prop="course_topic_id">
              <el-select v-model="editTableData.course_topic_id" class="filter-item">
                <el-option
                  v-for="(item, idx) in course_topicOptions"
                  :key="idx"
                  :label="item"
                  :value="idx"
                />
              </el-select>
          </el-form-item>
          <el-form-item label="授课时间" :label-width="formLabelWidth" prop="course_topic_btime">
            <el-date-picker
              v-model="editTableData.course_topic_btime"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="请选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="授课结束时间" :label-width="formLabelWidth" prop="course_topic_etime">
            <el-date-picker
              v-model="editTableData.course_topic_etime"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="请选择日期时间"
            ></el-date-picker>
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
  name: "DataFormEditCourse_Topic_Time",
  components: {
    ImageCropper,
    PanThumb,
    Tinymce,
    ImageCropperMore
  },

  // 创建的时候
  async created() {
    xxevent.bindtarget(this);
    await this.FetchCoachOptions();
  },

  // 销毁的时候
  async destroyed() {
   xxevent.unbindtarget(this);
  },

  data() {
    return {
      tinymceDialogFormVisible: false,
      tinymceEditText: "",
      tinymceEditTextKey: "",
      editTableDataNew: false,
      editTableData: {},
      imagecropperKey: 0, //上传图片的key
      formLabelWidth: "120px", // 数据框的尺寸
      imagecropperShow: false, //上传控件是否显示
      course_topicOptions: {},
      rules: {
        id: [
          { required: true, message: "请输入课程时间id", trigger: "blur" },
        ],
        course_topic_id: [
          { required: true, message: "请输入课程主题id", trigger: "blur" },
        ],
        course_topic_btime: [
          { required: true, message: "请输入授课时间", trigger: "blur" },
        ],
        course_topic_etime: [
          { required: true, message: "请输入授课结束时间", trigger: "blur" },
        ],
      }
    };
  },

   methods: {
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

    InitNewData() {
      this.editTableData = {
        id: 0, // 课程时间id
        course_topic_id: null, // 课程主题id
        course_topic_btime: new Date(), // 授课时间
        course_topic_etime: new Date(), // 授课结束时间
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
      xxevent.emit("EditDialogShow_Course_Topic_Time", false); // 新增或编辑界面显示
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
        url: "/admin/course_topic_time/store",
        data: data,
        method: "post"
      });

      if (res.errno == 0) {
        if (this.editTableDataNew) {
          this.$message.success("添加成功");
        } else {
          this.$message.success("更新成功");
        }
        xxevent.emit("EditDialogShow_Course_Topic_Time", false); // 新增或编辑界面显示
        xxevent.emit("SendUpdateTableItem_Course_Topic_Time"); // 更新查询数据项
        xxevent.emit("SendUpdateItem_Course_Topic_Time", res.data); // 更新单个数据项
      }

    },

    async FetchCoachOptions() {
      let res = await this.request({
        url: "/admin/course_topic/all",
        method: "post"
      });
      if (res["data"] != null) {
          let resData = res["data"];
          let course_topicOptions = {};
          for (let i = 0; i < resData.length; i++) {
            const data = resData[i];
            const id = data.id; // 课程主题id
            const name = data.name; // 详细名称
            const top_ad = data.top_ad; // 顶部导航
            const coach_id = data.coach_id; // 教练id
            const topic_type_id = data.topic_type_id; // 课程主题类型id
            const desc = data.desc; // 简介
            const add_time = data.add_time; // 添加时间
            const class_num = data.class_num; // 节数
            const class_price = data.class_price; // 金额
            const detail = data.detail; // 详细描述
            course_topicOptions[id] = name;
          }
          this.course_topicOptions = course_topicOptions;
      }
    },

    /////////////////////////////////////////////////////

    // 新增数据
    onNewObj_Course_Topic_Time(obj) {
      this.editTableDataNew = true;
      this.InitNewData();
      if (obj != null) {
        for (let objKey in obj) {
          let objItem = obj[objKey];
          if(objItem != null) this.editTableData[objKey] = objItem;
        };
      }
    },

    // 编辑数据
    onEditObj_Course_Topic_Time(row) {
      this.editTableDataNew = false;
      this.editTableData = row;
      this.editTableData.course_topic_id += '';
    },
   }
    
};
</script>
