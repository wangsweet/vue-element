<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="_id" label="书籍ID" width="200" height="100"></el-table-column>
      <el-table-column prop="booksAuth" label="书籍作者" width="160" height="100"></el-table-column>
      <el-table-column prop="booksName" label="书籍名称" width="180" height="100"></el-table-column>
      <el-table-column prop="booksStatus" label="书籍状态" width="135" height="100"></el-table-column>

      <el-table-column prop="booksPrice" label="书籍价格" sortable width="130" height="100"></el-table-column>
      <el-table-column prop="booksLogo" label="图片路径" width="180" height="100">
        <!--插入图片链接的代码-->
        <template slot-scope="scope">
          <img :src="scope.row.booksLogo" alt style="width: 90px;height:90px" />
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleChange(true,scope.$index, tableData)" type="text" size="small">修改</el-button>
          <el-dialog title="书籍修改" :visible.sync="drawer" size="50%" :append-to-body="true">
            <el-form ref="form" label-width="100px">
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
                <el-button type="primary" @click="onSubmit(false)">保存修改</el-button>
                <el-button @click="drawer = false">取消</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
          <el-button
            type="text"
            size="small"
            @click.native.prevent="deleteRow(scope.$index, tableData)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { booklist, booklistdete, booklistchange } from "@api/booklist";
export default {
  name: "Booklist",
  data() {
    return {
      id: "",
      drawer: false,
      tableData: [],
      bookauth: "",
      bookname: "",
      status: "",
      bookprice: "",
      imageUrl: ""
    };
  },
  created() {
    this.handlebooklist();
  },
  methods: {
    async handlebooklist() {
      let data = await booklist(1, 20);
      this.tableData = data.data.list;
    },
    async deleteRow(index, rows) {
      let datas = await booklistdete(rows[index]._id);
      if (datas.data.status == 1) {
        alert(datas.data.info);
        rows.splice(index, 1);
      } else {
        alert(datas.data.info);
      }
      // console.log(rows[index]._id)
    },
     handleChange(drawer, index, rows) {
      this.drawer = drawer;
      this.id = rows[index]._id;
      this.bookauth = rows[index].booksAuth;
      this.bookname = rows[index].booksName;
      this.status = rows[index].booksStatus;
      this.bookprice = rows[index].booksPrice;
      this.imageUrl = rows[index].booksLogo;
    },
    async onSubmit(drawer) {
      let data = await booklistchange(
        this.bookauth,
        this.bookname,
        this.status,
        this.bookprice,
        this.imageUrl,
        this.id
      );
      if (data.data.status == 1) {
        alert(data.data.info);
        this.handlebooklist();
        this.drawer = drawer;
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
.el-table td,
.el-table th {
  text-align: center;
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
.el-table .cell {
  display: flex;
  justify-content: center;
}
</style>