<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        :prop="item.porp"
        :label="item.label"
        width="155"
        v-for="item in data"
        :key="item.key"
      ></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { booklist } from "@api/booklist";
export default {
  name: "Booklist",
  data() {
    return {
      data: [
        { label: "书籍ID", porp: "_id" },
        { label: "书籍作者", porp: "booksAuth" },
        { label: "书籍名称", porp: "booksName" },
        { label: "书籍状态", porp: "booksStatus" },
        { label: "书籍Logo", porp: "booksLogo" },
        { label: "书籍价格", porp: "booksPrice" }
      ],
      tableData: []
    };
  },
  async created() {
    let data = await booklist(1, 20);
    this.tableData = data.data.list;
    // console.log(this.tableData);
  },
  methods: {
    handleClick(row) {
      // console.log(row);
    }
  }
};
</script>

<style>
.el-table td,.el-table th{
  text-align: center;
}
</style>