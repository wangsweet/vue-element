<template>
  <div>
    <el-container>
      <el-header>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="Vue后台管理系统" name="first" ></el-tab-pane>
          <el-tab-pane label="首页" name="second"></el-tab-pane>
          <el-tab-pane label="招生" name="third"></el-tab-pane>
        </el-tabs>
        <el-dropdown  @command="handleCommand">
          <span class="el-dropdown-link">
            {{name}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item >退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>

      <el-container>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu @select="handleOpen">
            <el-menu-item-group>
              <el-menu-item index="/list/homepage">首页</el-menu-item>
              <el-menu-item index="/list/addbook">添加书籍</el-menu-item>
              <el-menu-item index="/list/booklist">书籍列表</el-menu-item>
              <el-menu-item index="/list/addarticle">添加文章</el-menu-item>
              <el-menu-item index="/list/articlelist">文章列表</el-menu-item>
              <el-menu-item index="/list/usercontent">用户中心</el-menu-item>
            </el-menu-item-group>
          </el-menu>
        </el-aside>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Vue from "vue";
import { setCookie, getCookie, delCookie } from "@utils/manage.js";
export default {
  name: "List",
  data() {
    return {
      activeName: "second",
      tabPosition: "left",
      name:sessionStorage.getItem("name")
    };
  },
  beforeMount() {
    Vue.prototype.$cookieStore = {
      setCookie,
      getCookie,
      delCookie
    };
  },
  methods: {
    handleClick(tab, event) {},
    handleOpen(...rest) {
      this.$router.push(rest[0]);
      // console.log(rest)
    },
    handleCommand(command) {
       this.$cookieStore.delCookie( 'token');
       this.$router.push("/login");
       sessionStorage.removeItem("name");
      }
  }
};
</script>

<style>
.el-header {
  color: #333;
  text-align: center;
  height: 60px;
  background-color: #222;
  border-color: #080808;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-dropdown {
  color: #fff;
}
.el-tabs {
  width: 300px;
  height: 60px;
}
.el-tabs__header {
  height: 45px;
}
.el-tabs--left {
  width: 200px;
}
.el-tabs--left .el-tabs__header.is-left {
  width: 200px;
}
.el-tabs--left .el-tabs__active-bar.is-left {
  width: 0;
}
.el-tabs__active-bar {
  background: #fff;
}
.el-tabs__nav-wrap {
  top: 10px;
}
.el-tabs__nav-wrap::after {
  width: 100% !important;
}
.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  height: 100%;
}

.el-main {
  background: #f5f5f5f5;
  color: #333;
  text-align: center;
  height: 100%;
}

body > .el-container {
  margin-bottom: 40px;
}
.el-tabs__item {
  color: #9d9d9d;
}
.el-tabs__nav-wrap::after {
  background: none;
}
.el-tabs__item.is-active,
.el-tabs__item:hover {
  color: #fff;
}
.el-tabs__active-bar {
  background-color: #222;
}
</style>