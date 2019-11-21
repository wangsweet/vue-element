<template>
  <div class="registe">
    <div class="registe_form_container">
      <div class="qf_logo">
        <img src="https://cas.1000phone.net/cas/images/login/logo.png" />
      </div>
      <el-form
        label-width="100px"
        class="demo-ruleForm registe_form"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="password" autocomplete="off"></el-input>
        </el-form-item>
        <router-link tag="p" :to="{name:'login'}" class="text-info">已有账号，立即登录</router-link>
        <el-form-item>
          <el-button type="primary" @click="submitForm()" class="registe_btn">立即注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {registe} from "@api/registe"
export default {
  name: "Registe",
  data() {
    return {
        password:"",
        username:""
      }
  },
  methods: {
  async submitForm() {
     let data=await registe(this.username,this.password);
      if(data.data.status==1){
        alert(data.data.info)
        this.$router.push("/login")
      }else if(data.data.status==2){
        alert(data.data.info)
      }
    }
  }
};
</script>

<style>
.registe {
  background: url(../../../public/images/bg.png) no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.registe_form_container {
  width: 324px;
  height: 350px;
  background: #fff;
  border-radius: 10px;
  padding: 30px;
}
.qf_logo {
  text-align: center;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.registe_btn {
  width: 100%;
  margin-top: 20px;
}
.text-info {
  margin-top: 20px;
  font-size: 13px;
  color: blue;
}
.registe_form div{
    margin-left:0!important;
    width:300px;
    margin-bottom: 7px!important;
}
.el-form-item__label{
    width:70px!important;
    text-align: left;
}
</style>