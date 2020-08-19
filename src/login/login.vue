<template>
<div class="login">
  <div class="bx-content flex align-center justify-between login-top">
    <img src="../assets/img/loginogo.png" alt="">
    <router-link to="/home" class="back" >
      返回首页
    </router-link>
  </div>

  <div class="login-box">
    <h3>微信登录</h3>
    <a href="">
      <img src="../assets/img/wx.png" alt="">
    </a>
    <p>请点击微信扫码登录</p>
  </div>


  <div class="login-footer">
    <p>主办单位：化工行业生产力促进中心</p>
    <p>地址：北京市朝阳区亚运村安慧里四区16号楼中国化工大厦721室    邮政编码：100723</p>
    <p>联系电话：010-84885052/010-84885721</p>
  </div>
</div>
</template>

<script>
export default {
name: "login"
}
</script>

<style scoped lang="scss">
  .login{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: url(../assets/img/loginbg.jpg)#fff no-repeat top center;
    background-size: cover;
    .login-top{
      padding-top: 30px;
      img{
        display: block;
      }
      .back{
        display: block;
        width: 112px;
        height: 42px;
        text-align: center;
        line-height: 40px;
        color: #fff;
        border-radius: 2px;
        border: solid 1px #ffffff;
      }
    }
    .login-box{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 462px;
      //height: 500px;
      background-color: #ffffff;
      border-radius: 3px;
      padding: 40px;
      h3{
        font-weight: normal;
        font-size: 20px;
      }
      img{
        display: block;
        margin: 40px auto;
      }
      p{
        text-align: center;
      }

    }
    .login-footer{
      position: fixed;
      left: 0;
      bottom: 0;
      right: 0;
      height: 100px;
      padding: 20px 0;
      background-color: #ffffff;
      p{
        line-height: 20px;
        text-align: center;
      }
    }
  }
</style>