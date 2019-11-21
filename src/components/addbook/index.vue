<template>
  <div class="addbook">
    <el-form ref="form" label-width="100px" style="margin-top:64px;">
      <el-form-item label="书籍作者">
        <el-input v-model="bookauth"></el-input>
      </el-form-item>
      <el-form-item label="书籍名称">
        <el-input v-model="bookname"></el-input>
      </el-form-item>
      <el-form-item label="书籍状态">
        <el-select v-model="status" placeholder="请选择书籍状态">
          <el-option label="连载中" value="连载中"></el-option>
          <el-option label="已完结" value="已完结"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="书籍价格">
        <el-input type="number" v-model="bookprice"></el-input>
      </el-form-item>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加书籍</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addbook } from "@api/addbook";
export default {
  data() {
    return {
      bookauth: "",
      bookname: "",
      status: "",
      bookprice: "",
      imageUrl: ""
    };
  },
  methods: {
    async onSubmit() {
      let data = await addbook(
        this.bookauth,
        this.bookname,
        this.status,
        this.bookprice,
        this.imageUrl
      );
      if (data.data.status == 1) {
        alert(data.data.info);
      } else {
        alert(data.data.info);
      }
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style>
.addbook {
  display: flex;
  justify-content: center;
  align-items: center;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-left: 103px;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 224px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>