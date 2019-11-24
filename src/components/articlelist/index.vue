<template>
  <div >
    <ul v-if="flag" class="box-card">
      <li v-for="(item,index) in articlelist" :key="index" class="text item" @click="handlecontent(index)">*{{item.articleTitle}}</li>
    </ul>
    <div v-if="!flag" class="articlecontent" v-html="content"></div>
  </div>
</template>

<script>
import {articlelist} from "@api/articlelist";
export default {
  data(){
    return{
      articlelist:[],
      flag:true,
      content:""
    }
  },
 async created () {
    let data=await articlelist(1,30);
    // console.log(data);
    this.articlelist=data.data.list;
  },
  methods: {
    handlecontent(index){
      this.content=this.articlelist[index].content;
      this.flag=false
    }
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

  .box-card,.articlecontent{
    width: 1114px;
    background: #fff;
    height: 100%;
  }
.articlecontent{
  text-indent: 28px;
  font-size: 14px;
  height: 580px;
}
</style>