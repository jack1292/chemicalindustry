<template>
  <div class="header">
    <div class="header-top">
      <div class="bx-content flex align-center justify-end top-box">
        <a href="https://www.tmlsystem.cn/search/#/login/" class="xitong">工业催化信息系统</a>
        <router-link to="/login" class="blur" v-if="!isLogin"><i class="iconfont icongerenzhongxin-zhong"></i>登录</router-link>
        <router-link to="/home/user" class="blur" v-if="isLogin"><i class="iconfont icongerenzhongxin-zhong"></i>个人中心</router-link>
        <span class="blur" v-if="isLogin" style="margin-left: 30px;" @click="sginOut">退出</span>
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
      <router-link to="/home/exhibit_expert" class="nav-item" :class="{active : navIndex === 1}">会员风采</router-link>
<!--      <router-link to="/home/demand" class="nav-item" :class="{active : navIndex === 2}">技术需求</router-link>-->
      <div class="nav-item" :class="{active : navIndex === 2}">
        <router-link to="/home/techneed" class="nav-item">技术需求</router-link>
        <div class="nav-item-child-box">
          <router-link to="/home/techneed?type=1" class="nav-item-child" :class="{active : navIndex === 2 && itemType === 1}">合作开发</router-link>
          <router-link to="/home/techneed?type=2" class="nav-item-child" :class="{active : navIndex === 2 && itemType === 2}">合作兴办新企业</router-link>
          <router-link to="/home/techneed?type=3" class="nav-item-child" :class="{active : navIndex === 2 && itemType === 3}">科技服务</router-link>
          <router-link to="/home/techneed?type=0" class="nav-item-child" :class="{active : navIndex === 2 && itemType === 0}">综合类</router-link>
          <router-link to="/home/addNeed?type=-1" class="nav-item-child" :class="{active : navIndex === 2 && itemType === -1}">我有需求</router-link>
        </div>
      </div>
<!--      <router-link to="/home/meet" class="nav-item" :class="{active : navIndex === 3}">会议活动</router-link>-->
      <div class="nav-item" :class="{active : navIndex === 3}">
        <router-link to="/home/activity" class="nav-item">会议活动</router-link>
        <div class="nav-item-child-box">
          <router-link to="/home/activity?type=1" class="nav-item-child" :class="{active : navIndex === 3 && itemType === 1}">科技交流</router-link>
          <router-link to="/home/activity?type=2" class="nav-item-child" :class="{active : navIndex === 3 && itemType === 2}">人才培养</router-link>
          <router-link to="/home/activity?type=3" class="nav-item-child" :class="{active : navIndex === 3 && itemType === 3}">知识产权</router-link>
          <router-link to="/home/activity?type=0" class="nav-item-child" :class="{active : navIndex === 3 && itemType === 0}">综合类</router-link>
        </div>
      </div>
      <router-link to="/home/expert" class="nav-item" :class="{active : navIndex === 4}">专家展示</router-link>
<!--      <router-link to="/home/newest" class="nav-item" :class="{active : navIndex === 5}">最新技术</router-link>-->
      <div class="nav-item" :class="{active : navIndex === 5}">
        <router-link to="/home/newest" class="nav-item">最新技术</router-link>
        <div class="nav-item-child-box">
          <router-link to="/home/exhibit_technology?type=1" class="nav-item-child" :class="{active : navIndex === 5 && itemType === 1}">发明专利</router-link>
          <router-link to="/home/exhibit_technology?type=2" class="nav-item-child" :class="{active : navIndex === 5 && itemType === 2}">科技论文</router-link>
          <router-link to="/home/exhibit_technology?type=3" class="nav-item-child" :class="{active : navIndex === 5 && itemType === 3}">研究报告</router-link>
          <router-link to="/home/exhibit_technology?type=4" class="nav-item-child" :class="{active : navIndex === 5 && itemType === 4}">新产品</router-link>
          <router-link to="/home/exhibit_technology?type=0" class="nav-item-child" :class="{active : navIndex === 5 && itemType === 0}">综合类</router-link>
        </div>
      </div>
      <div class="nav-item" :class="{active : navIndex === 6}">
        <router-link to="/home/catalysis?type=1" class="nav-item">催化情报</router-link>
        <div class="nav-item-child-box">
          <router-link to="/home/catalysis?type=1" class="nav-item-child" :class="{active : navIndex === 6 && itemType === 1}">化工及医药中间体</router-link>
          <router-link to="/home/catalysis?type=2" class="nav-item-child" :class="{active : navIndex === 6 && itemType === 2}">先进催化材料</router-link>
          <router-link to="/home/catalysis?type=3" class="nav-item-child" :class="{active : navIndex === 6 && itemType === 3}">石油炼制催化行业</router-link>
          <router-link to="/home/catalysis?type=4" class="nav-item-child" :class="{active : navIndex === 6 && itemType === 4}">专用化学品催化</router-link>
          <router-link to="/home/catalysis?type=5" class="nav-item-child" :class="{active : navIndex === 6 && itemType === 5}">煤催化转化</router-link>
          <router-link to="/home/catalysis?type=6" class="nav-item-child" :class="{active : navIndex === 6 && itemType === 6}">生物催化</router-link>
          <router-link to="/home/catalysis?type=7" class="nav-item-child" :class="{active : navIndex === 6 && itemType === 7}">环境催化</router-link>
        </div>
      </div>













    </div>
  </div>
</template>

<script>
export default {
  name: "headerView",
  data() {
    return {
      isLogin:false,
      itemType:''
    }
  },
  props: {
    navIndex: {
      type: Number
    }
  },
  created() {
    if(this.$store.state.user){
      this.isLogin = true
    }
    if(this.$route.query.type){
      this.itemType = Number(this.$route.query.type)
    }
  },
  methods: {
    sginOut(){
      this.$store.state.user = null;
      window.localStorage.clear();
      let sessionid = '';
      document.cookie = 'sessionid=' + sessionid + ";path=/;"
      this.$router.push('/login')
    },

  },
  watch: {
    $route(){
      this.itemType = ''
      if(this.$route.query.type){
        this.itemType = Number(this.$route.query.type)
      }
    }
  }
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
      a.xitong{
        margin-right: 20px;
        color: #00327b;
      }
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
      position: relative;
      cursor: pointer;
      &.active {
        background-color: #ffba39;
      }
      &:hover{
        background-color: #ffba39;
        .nav-item-child-box{
          display: block;
        }
      }
      .nav-item-child-box{
        display: none;
        position: absolute;
        top: 40px;
        left: 0;
        width: 100%;
        background-color: #2882db;
        z-index: 9;
        .nav-item-child{
          display: block;
          width: 130px;
          height: 40px;
          text-align: center;
          line-height: 40px;
          color: #fff;
          font-size: 14px;
          &:hover{
            background-color: #ffba39;
          }
          &.active{
            background-color: #ffba39;
          }
        }
      }
    }
  }
}
</style>