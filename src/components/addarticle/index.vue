<template>
  <div>
    <div class="inputtitle">
      <h3>章节标题</h3>
      <el-input v-model="inputtitle" placeholder="请输入章节标题"></el-input>
    </div>
    <div class="tinymce">
      <editor id="tinymce" v-model="tinymceHtml" :init="init"></editor>
      <el-button type="primary" @click="handlepush()">
        上传文章
        <i class="el-icon-upload el-icon--right"></i>
      </el-button>
    </div>
  </div>
</template>

<script>
import tinymce from "tinymce/tinymce";
import "tinymce/themes/silver/theme";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/skins/ui/oxide/skin.css";
import { addarticle } from "@api/addarticle";
export default {
  name: "tinymce",
  data() {
    return {
      inputtitle: "",
      tinymceHtml: "请输入章节内容",
      init: {
        skin_url: "../../../public/tinymce/skins/content",
        height: 440
      }
    };
  },
  mounted() {
    tinymce.init({});
  },
  components: { Editor },
  methods: {
    async handlepush() {
      console.log(this.tinymceHtml, this.inputtitle);
      let data = await addarticle(this.inputtitle, this.tinymceHtml);
      if (data.data.status == 1) {
        alert(data.data.info);
      } else {
        alert(data.data.info);
      }
    }
  }
};
</script>

<style>
.inputtitle {
  text-align: left;
  margin-bottom: 20px;
}
.inputtitle h3 {
  margin-bottom: 7px;
}
.el-button,
.el-main {
  text-align: right;
}
</style>