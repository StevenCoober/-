<template>
  <div>
    <el-form :model="editTableData" :rules="rules" ref="editTableData">
          <el-form-item  v-show="!editTableDataNew" label="课程主题id" :label-width="formLabelWidth" prop="id">
              <el-input placeholder="请输入课程主题id" type="number" :disabled="true" v-model="editTableData.id"></el-input>
          </el-form-item>
          <el-form-item label="详细名称" :label-width="formLabelWidth" prop="name">
              <el-input placeholder="请输入详细名称" v-model="editTableData.name"></el-input>
          </el-form-item>
          <el-form-item label="顶部导航" :label-width="formLabelWidth" prop="top_ad">
              <image-cropper-more :single="false" v-model="editTableData.top_ad" :disabled="false"></image-cropper-more>
          </el-form-item>
<!--           <el-form-item label="教练id" :label-width="formLabelWidth" prop="coach_id">
              <el-input placeholder="请输入教练id" type="number" v-model="editTableData.coach_id"></el-input>
          </el-form-item> -->
          <el-form-item label="教练" :label-width="formLabelWidth" prop="coach_id">
              <el-select v-model="editTableData.coach_id" class="filter-item">
                <el-option
                  v-for="(item, idx) in coachOptions"
                  :key="idx"
                  :label="item"
                  :value="idx"
                />
              </el-select>
          </el-form-item>
          <!-- <el-form-item label="课程主题类型id" :label-width="formLabelWidth" prop="topic_type_id">
              <el-input placeholder="请输入课程主题类型id" type="number" v-model="editTableData.topic_type_id"></el-input>
          </el-form-item> -->
          <el-form-item label="课程主题类型" :label-width="formLabelWidth"  prop="topic_type_id">
              <el-select v-model="editTableData.topic_type_id" class="filter-item">
                <el-option
                  v-for="(item, idx) in course_topic_typeOptions"
                  :key="idx"
                  :label="item"
                  :value="idx"
                />
              </el-select>
          </el-form-item>
          <el-form-item label="简介" :label-width="formLabelWidth" prop="desc">
            <el-input placeholder="请输入简介" :autosize="{minRow:3, maxRow:10}" type="textarea" v-model="editTableData.desc"></el-input>
          </el-form-item>
<!--           <el-form-item label="添加时间" :label-width="formLabelWidth" prop="add_time">
            <el-date-picker
              v-model="editTableData.add_time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="请选择日期时间"
            ></el-date-picker>
          </el-form-item> -->
          <!--TODO-->
          <el-form-item label="上课日期" :label-width="formLabelWidth" prop="course_topic_time_day">
            <el-date-picker
              v-model="editTableData.course_topic_time_day"
              type="daterange"
              value-format="yyyy-MM-dd"
              range-separator="至"
              start-placeholder="上课日期开始"
              end-placeholder="上课日期开始结束">
            </el-date-picker>
          </el-form-item>


          <el-form-item  label="上课时间" :label-width="formLabelWidth" prop="course_topic_time_hour">
            <el-time-picker
              is-range
              v-model="editTableData.course_topic_time_hour"
              range-separator="至"
              value-format="HH:mm:ss"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              placeholder="选择时间范围">
            </el-time-picker>
          </el-form-item>

          </el-form-item>
          <el-form-item label="生成时间" :label-width="formLabelWidth" prop="generate_way_validate">
              <el-radio v-model="editTableData.generate_way" label="0" style="display:block;">按星期生成
                <el-checkbox-group :disabled="editTableData.generate_way == 1 || !editTableDataNew" v-model="checkList">
                  <el-checkbox label="1">星期一</el-checkbox>
                  <el-checkbox label="2">星期二</el-checkbox>
                  <el-checkbox label="3">星期三</el-checkbox>
                  <el-checkbox label="4">星期四</el-checkbox>
                  <el-checkbox label="5">星期五</el-checkbox>
                  <el-checkbox label="6">星期六</el-checkbox>
                  <el-checkbox label="0">星期天</el-checkbox>
                </el-checkbox-group>
              </el-radio>
              
              <el-radio v-model="editTableData.generate_way" label="1" style="display:block;margin-left:0">按天生成
                 每隔 <el-input :disabled="editTableData.generate_way == 0 || !editTableDataNew" style="width:auto"  type="number" v-model="generate_day"></el-input>
                天生成一节课
              </el-radio>
          </el-form-item>

          <!--TODO-->
<!--           <el-form-item label="节数" :label-width="formLabelWidth" prop="class_num">
              <el-input placeholder="请输入节数" type="number" v-model="editTableData.class_num"></el-input>
          </el-form-item> -->
<!--           <el-form-item label="金额" :label-width="formLabelWidth" prop="class_price">
              <el-input placeholder="请输入金额" type="number" v-model="editTableData.class_price"></el-input>
          </el-form-item> -->
          <el-form-item label="详细描述" :label-width="formLabelWidth">
            <div v-html="editTableData.detail" />
            <el-button type="primary" icon="el-icon-edit" style="margin-left: 10px;" @click= "tinymceDialogFormVisible=true;pushKeyForEditTableDataTinymce('detail');">编辑</el-button>
          </el-form-item>
    </el-form>
    <div slot="footer" style="text-align: right;" class="dialog-footer">
      <el-button @click="OnClickCancleForm">取 消</el-button>
      <el-button type="primary" @click="OnClickOkForm">确 定</el-button>
    </div>
    <el-dialog :modal-append-to-body="false" title="课程主题" :visible.sync="tinymceDialogFormVisible" width="100%">
        <template>
          <div class="components-container">
            <div>
              <tinymce ref="editor" v-model="tinymceEditText"/>
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
</template>
<script>
import {
  ID as CONSTS_ID,
  Item as CONSTS_Item,
  Item_Of_VALUE as CONSTS_ITEM_OF_VALUE,
  Item_Of_DESC as CONSTS_ITEM_OF_DESC,
} from '@/utils/jianshenfang_consts.js';

import ImageCropper from "@/components/ImageCropper";
import PanThumb from "@/components/PanThumb";
import Tinymce from "@/components/Tinymce";
import ImageCropperMore from "@/components/ImageCropperMore";
import xxevent from "./xxevent";
export default {
  name: "DataFormEditCourse_topic",
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
    await this.FetchCourse_topic_typeOptions();
  },

  // 销毁的时候
  async destroyed() {
   xxevent.unbindtarget(this);
  },

  data() {
    const validateWay = (rule, value, callback) => {
      if (this.editTableData.generate_way == '0') {
        if (this.checkList.length == 0) {
          callback(new Error('请选择星期'));
          return;
        }
      } else if (this.editTableData.generate_way == '1') {
        if (this.generate_day == null || this.generate_day == '') {
          callback(new Error('请选择时间间隔'));
          return;
        }
      }
      else if (this.editTableData.generate_way == null) {
        callback(new Error('请选择生成时间方式'));
        return;
      }
      callback();
    }

    return {
      tinymceDialogFormVisible: false,
      tinymceEditText: "",
      tinymceEditTextKey: "",
      editTableDataNew: false,
      editTableData: {},
      checkList: [],
      generate_day: null,
      
      imagecropperKey: 0, //上传图片的key
      formLabelWidth: "120px", // 数据框的尺寸
      imagecropperShow: false, //上传控件是否显示
      coachOptions: {},
      course_topic_typeOptions: {},


      rules: {
        id: [
          { required: true, message: "请输入课程主题id", trigger: "blur" },
        ],
        name: [
          { required: true, message: "请输入详细名称", trigger: "blur" },
        ],
        top_ad: [
          { required: true, message: "请选择顶部导航图片", trigger: "blur" },
          { type: 'string', required: true, message: '请选择顶部导航图片', trigger: 'change' }
        ],
        coach_id: [
          { required: true, message: "请输入教练id", trigger: "blur" },
        ],
        topic_type_id: [
          { required: true, message: "请输入课程主题类型id", trigger: "blur" },
        ],
        desc: [
          { required: true, message: "请输入简介", trigger: "blur" },
        ],
        add_time: [
          { required: true, message: "请输入添加时间", trigger: "blur" },
        ],
        class_num: [
          { required: true, message: "请输入节数", trigger: "blur" },
        ],
        class_price: [
          { required: true, message: "请输入金额", trigger: "blur" },
        ],
        detail: [
          { required: true, message: "请输入详细描述", trigger: "blur" },
        ],
        course_topic_time_day: [
          // { required: true, message: "请输入上课日期", trigger: "blur" },
          { type: 'array', required: true, message: '请输入上课日期', trigger: 'change' }
        ],
        course_topic_time_hour: [
          // { required: true, message: "请输入上课时间", trigger: "blur" },
          { type: 'array', required: true, message: '请输入上课时间', trigger: 'change' }
        ],
        generate_way_validate: [
          { required: true, trigger: "blur", validator: validateWay},
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
        id: 0, // 课程主题id
        name: "", // 详细名称
        top_ad: "", // 顶部导航
        coach_id: null, // 教练id
        topic_type_id: null, // 课程主题类型id
        desc: "", // 简介
        add_time: new Date(), // 添加时间
        class_num: 0, // 节数
        class_price: 0.0, // 金额
        detail: "", // 详细描述
        generate_way: '0',
        generate_content: '',
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
      xxevent.emit("EditDialogShow_Course_topic", false); // 新增或编辑界面显示
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
      if (data.generate_way == 0) {
        data.generate_content = JSON.stringify(this.checkList);
      }
      else {
        data.generate_content = this.generate_day;
      }
      data.id = this.editTableDataNew ? 0 : this.editTableData.id;

      data.course_topic_time_bday = this.editTableData.course_topic_time_day[0];
      data.course_topic_time_eday = this.editTableData.course_topic_time_day[1];
      data.course_topic_time_bhour = this.editTableData.course_topic_time_hour[0];
      data.course_topic_time_ehour = this.editTableData.course_topic_time_hour[1];

      data.is_show = 1;
      let res = await this.request({
        url: "/admin/course_topic/store",
        data: data,
        method: "post"
      });

      if (res.errno == 0) {
        if (this.editTableDataNew) {
          this.$message.success("添加成功");
        } else {
          this.$message.success("更新成功");
        }
        xxevent.emit("EditDialogShow_Course_topic", false); // 新增或编辑界面显示
        xxevent.emit("SendUpdateTableItem_Course_topic"); // 更新查询数据项
	xxevent.emit("SendUpdateItem_Course_topic", res.data); // 更新单个数据项
      }

    },

    async FetchCoachOptions() {
      let res = await this.request({
        url: "/admin/coach/all",
        method: "post"
      });
      if (res["data"] != null) {
          let resData = res["data"];
          let coachOptions = {};
          for (let i = 0; i < resData.length; i++) {
            const data = resData[i]; // 人员
            const id = data.id; // 教练id
            const user_id = data.user_id; // 微信用户id
            const name = data.name; // 姓名
            const mobile = data.mobile; // 联系电话
            const birthday = data.birthday; // 生日
            const address = data.address; // 联系地址
            const summary = data.summary; // 简介
            const skill = data.skill; // 特长
            const head_img = data.head_img; // 头像
            const views = data.views; // 浏览量
            const paixu = data.paixu; // 排序
            const is_star = data.is_star; // 是否是明星教练
            coachOptions[id] = name;
          }
          this.coachOptions = coachOptions;
      }
    },

    
    async FetchCourse_topic_typeOptions() {
      let res = await this.request({
        url: "/admin/course_topic_type/all",
        method: "post"
      });
      if (res["data"] != null) {
          let resData = res["data"];
          let course_topic_typeOptions = {};
          for (let i = 0; i < resData.length; i++) {
            const data = resData[i];
            const id = data.id; // 课程主题类型id
            const type_name = data.type_name; // 类型名称, 比如瘦身课
            course_topic_typeOptions[id] = type_name;
          }
          this.course_topic_typeOptions = course_topic_typeOptions;
      }
    },

    /////////////////////////////////////////////////////

    // 新增数据
    onNewObj_Course_topic(obj) {
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
    onEditObj_Course_topic(row) {
      
      this.editTableDataNew = false;
      this.editTableData = row;

      this.editTableData.coach_id += '';
      this.editTableData.topic_type_id += '';
      this.editTableData.generate_way += '';

      if (this.editTableData.generate_way == 0) {
        this.checkList = JSON.parse(this.editTableData.generate_content);

      }
      else if (this.editTableData.generate_way == 1) {
        this.generate_day = this.editTableData.generate_content;
      }

      this.editTableData.course_topic_time_day = [
        this.editTableData.course_topic_time_bday,
        this.editTableData.course_topic_time_eday,
      ];

      this.editTableData.course_topic_time_hour = [
        this.editTableData.course_topic_time_bhour,
        this.editTableData.course_topic_time_ehour,
      ];
    },
   }
    
};
</script>
