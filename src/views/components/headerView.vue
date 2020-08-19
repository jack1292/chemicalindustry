<template>
  <div class="header">
    <div class="header-top">
      <div class="bx-content flex align-center justify-end top-box">
        <router-link to="/login" class="blur"><i class="iconfont icongerenzhongxin-zhong"></i>登录</router-link>
        <router-link to="/home/user" class="blur"><i class="iconfont icongerenzhongxin-zhong"></i>个人中心</router-link>
      </div>
    </div>
    <div class="bx-content logo">
      <img src="../../assets/img/logo.png" alt="">
    </div>
    <div class="bx-content banner">
      <img src="../../assets/img/banner.jpg" alt="">
    </div>
    <div class="bx-content nav flex align-center">
      <router-link to="/home/index" class="nav-item" :class="{active : navIndex === 0}">首页</router-link>
      <router-link to="/home/demeanor" class="nav-item" :class="{active : navIndex === 1}">会员风采</router-link>
      <router-link to="/home/demand" class="nav-item" :class="{active : navIndex === 2}">技术需求</router-link>
      <router-link to="/home/meet" class="nav-item" :class="{active : navIndex === 3}">会议活动</router-link>
      <router-link to="/home/expert" class="nav-item" :class="{active : navIndex === 4}">专家展示</router-link>
      <router-link to="/home/newest" class="nav-item" :class="{active : navIndex === 5}">最新技术</router-link>
      <router-link to="/home/catalysis" class="nav-item" :class="{active : navIndex === 6}">催化情报</router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: "headerView",
  data() {
    return {}
  },
  props: {
    navIndex: {
      type: Number
    }
  },
  created() {
  },
  methods: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;

  .header-top {
    height: 30px;
    background-color: #f8f8f8;

    .top-box {
      height: 30px;

      .blur {
        color: #00327b;
      }
    }
  }

  .logo {
    img {
      display: block;
      max-width: 100%;
    }
  }

  .banner {
    img {
      display: block;
      max-width: 100%;
    }
  }

  .nav {
    height: 40px;
    background-color: #2882db;

    .nav-item {
      display: block;
      width: 130px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      color: #fff;
      font-size: 16px;

      &.active {
        background-color: #ffba39;
      }
    }
  }
}
</style>