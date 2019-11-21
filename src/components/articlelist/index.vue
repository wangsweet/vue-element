<template>
  <div>
    <el-card class="box-card">
      <div v-for="(item,index) in articlelist" :key="index" class="text item">*{{item.articleTitle}}</div>
    </el-card>
  </div>
</template>

<script>
import {articlelist} from "@api/articlelist";
export default {
  data(){
    return{
      articlelist:[]
    }
  },
 async created () {
    let data=await articlelist(1,30);
    // console.log(data);
    this.articlelist=data.data.list;
  }
};
</script>

<style>
 .text {
    font-size: 14px;
    text-align: left;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
  .box-card {
    width: 1112px;
}
</style>