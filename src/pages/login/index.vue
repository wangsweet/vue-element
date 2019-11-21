<template>
  <div class="login">
    <div class="form_container">
      <div class="qf_logo">
        <img src="https://cas.1000phone.net/cas/images/login/logo.png" />
      </div>
      <el-form
        label-width="100px"
        class="demo-ruleForm login_form"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="password" autocomplete="off"></el-input>
        </el-form-item>
        <router-link tag="p" :to="{name:'registe'}" class="text-info">没有账号，立即注册</router-link>
        <el-form-item>
          <el-button type="primary" @click="submitForm()" class="login_btn">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {login} from "@api/login"
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
     let data=await login(this.username,this.password);
      if(data.data.status==1){
        alert(data.data.info)
        this.$router.push("/list")
        sessionStorage.setItem('name', data.data.data.name)
      }else if(data.data.status==2){
        alert(data.data.info)
      }
    }
  }
};
</script>

<style>
.login {
  background: url(../../../public/images/bg.png) no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.form_container {
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
.login_btn {
  width: 100%;
  margin-top: 20px;
}
.text-info {
  margin-top: 20px;
  font-size: 13px;
  color: blue;
}
.login_form div{
    margin-left:0!important;
    width:300px;
    margin-bottom: 7px!important;
}
.el-form-item__label{
    width:70px!important;
    text-align: left;
}
</style>