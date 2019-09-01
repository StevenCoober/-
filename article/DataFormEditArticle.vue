<template>
  <div>
    <el-form :model="editTableData" :rules="rules" ref="editTableData">
          <el-form-item  v-show="!editTableDataNew" label="健身房文章id" :label-width="formLabelWidth" prop="id">
              <el-input placeholder="请输入健身房文章id" type="number" :disabled="true" v-model="editTableData.id"></el-input>
          </el-form-item>
          <el-form-item label="健身房文章标题" :label-width="formLabelWidth" prop="title">
              <el-input placeholder="请输入健身房文章标题" v-model="editTableData.title"></el-input>
          </el-form-item>
          <el-form-item label="健身房文章缩略图" :label-width="formLabelWidth" prop="article_img">
              <image-cropper-more :single="false" v-model="editTableData.article_img" :disabled="false"></image-cropper-more>
          </el-form-item>
          <el-form-item label="文章所属种类" :label-width="formLabelWidth" prop="article_type">
              <el-input placeholder="请输入文章所属种类" v-model="editTableData.article_type"></el-input>
          </el-form-item>
          <el-form-item label="浏览量" :label-width="formLabelWidth" prop="view_count">
              <el-input placeholder="请输入浏览量" type="number" v-model="editTableData.view_count"></el-input>
          </el-form-item>
          <el-form-item label="健身房文章内容" :label-width="formLabelWidth">
            <div v-html="editTableData.detail" />
            <el-button type="primary" icon="el-icon-edit" style="margin-left: 10px;" @click= "tinymceDialogFormVisible=true;pushKeyForEditTableDataTinymce('detail');">编辑</el-button>
          </el-form-item>
          <el-form-item label="添加时间" :label-width="formLabelWidth" prop="add_time">
            <el-date-picker
              v-model="editTableData.add_time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="请选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="修改时间" :label-width="formLabelWidth" prop="modify_time">
            <el-date-picker
              v-model="editTableData.modify_time"
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
  name: "DataFormEditArticle",
  components: {
    ImageCropper,
    PanThumb,
    Tinymce
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
          { required: true, message: "请输入健身房文章id", trigger: "blur" },
        ],
        title: [
          { required: true, message: "请输入健身房文章标题", trigger: "blur" },
        ],
        article_img: [
          { required: true, message: "请选择健身房文章缩略图图片", trigger: "blur" },
          { type: 'string', required: true, message: '请选择健身房文章缩略图图片', trigger: 'change' }
        ],
        article_type: [
          { required: true, message: "请输入文章所属种类", trigger: "blur" },
        ],
        view_count: [
          { required: true, message: "请输入浏览量", trigger: "blur" },
        ],
        detail: [
          { required: true, message: "请输入健身房文章内容", trigger: "blur" },
        ],
        add_time: [
          { required: true, message: "请输入添加时间", trigger: "blur" },
        ],
        modify_time: [
          { required: true, message: "请输入修改时间", trigger: "blur" },
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
        id: 0, // 健身房文章id
        title: "", // 健身房文章标题
        article_img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555575698912&di=4504a218f051995cb6ebba9967b61098&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fc75c10385343fbf26f28e948bc7eca8065388f51.jpg", // 健身房文章缩略图
        article_type: "", // 文章所属种类
        view_count: 0, // 浏览量
        detail: "", // 健身房文章内容
        add_time: new Date(), // 添加时间
        modify_time: new Date(), // 修改时间
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
      xxevent.emit("EditDialogShow_Article", false); // 新增或编辑界面显示
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
        url: "/admin/article/store",
        data: data,
        method: "post"
      });

      if (res.errno == 0) {
        if (this.editTableDataNew) {
          this.$message.success("添加成功");
        } else {
          this.$message.success("更新成功");
        }
        xxevent.emit("EditDialogShow_Article", false); // 新增或编辑界面显示
        xxevent.emit("SendUpdateTableItem_Article"); // 更新查询数据项
      }

    },

    

    /////////////////////////////////////////////////////

    // 新增数据
    onNewObj_Article() {
      this.editTableDataNew = true;
      this.InitNewData();
    },

    // 编辑数据
    onEditObj_Article(row) {
      this.editTableDataNew = false;
      this.editTableData = row;
    },
   }
    
};
</script>
