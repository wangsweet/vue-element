<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <!-- <el-table-column
        :prop="item.porp"
        :label="item.label"
        width="220"
        v-for="(item,index) in data"
        :key="index"
        v-if="index > 0"
      ></el-table-column>
      <el-table-column
        :prop="item.porp"
        :label="item.label"
        width="155"
        v-for="(item,index) in data"
        :key="index"
        v-if="index == 0"
      >
        <template slot-scope="scope">
          <img width="90px" height="90px" :src="scope.row.userPic" />
        </template>
      </el-table-column> -->
      <el-table-column prop="userPic" label="用户头像"  width="240">
        <!--插入图片链接的代码-->
        <template slot-scope="scope">
          <img :src="scope.row.userPic" alt style="width: 90px;height: 90px" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="用户昵称"  width="200"></el-table-column>
      <el-table-column prop="username" label="用户账户"  width="200"></el-table-column>
      <el-table-column prop="registerTime" label="注册时间"  width="240"></el-table-column>

      <el-table-column prop="status" label="用户状态"  width="200"></el-table-column>
      
    </el-table>
  </div>
</template>

<script>
import { usercontent } from "@api/usercontent";
export default {
  data() {
    return {
      // data: [
      //   { label: "用户头像", porp: "userPic" },
      //   { label: "用户昵称", porp: "name" },
      //   { label: "用户账户", porp: "username" },
      //   { label: "注册时间", porp: "registerTime" },
      //   { label: "用户状态", porp: "status" }
      // ],
      tableData: [],
    };
  },
  async created() {
    let data = await usercontent(1, 20);
    for(var i=0;i<data.data.list.length;i++){
      if(data.data.list[i].status==true){
        data.data.list[i].status="未冻结"
      }
    }
    this.tableData = data.data.list;
    console.log(this.tableData);
  },
  methods: {
    handleClick(row) {
      // console.log(row);
    }
  }
};
</script>

<style>
.el-table td,
.el-table th {
  text-align: center;
}
.el-table .cell{
  display: flex;
  justify-content: center;
}
</style>