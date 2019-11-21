<template>
   <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        :prop="item.porp"
        :label="item.label"
        width="220"
        v-for="item in data"
        :key="item.key"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { usercontent } from "@api/usercontent";
export default {
   data() {
    return {
      data: [
        { label: "用户昵称", porp: "name" },
        { label: "用户头像", porp: "userPic" },
        { label: "用户账户", porp: "username" },
        { label: "注册时间", porp: "registerTime" },
        { label: "用户状态", porp: "status"},
      ],
      tableData: []
    };
  },
  async created() {
    let data = await usercontent(1, 20);
    this.tableData = data.data.list;
    // console.log(this.tableData);
  },
   methods: {
    handleClick(row) {
      // console.log(row);
    }
  }

}
</script>

<style>
.el-table td,.el-table th{
  text-align: center;
}
</style>