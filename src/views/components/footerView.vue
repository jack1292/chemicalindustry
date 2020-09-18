<template>
<div class="footer">
  <div class="bx-content flex align-center justify-between">
    <div class="footer-left">
      <img src="../../assets/img/flogo.png" alt="">
      <p>版权所有：化工行业生产力促进中心</p>
      <p>联系方式：010-84885721</p>
    </div>
    <div class="footer-right">
      <img src="../../assets/img/ewm.png" alt="">
      <p>化工技术服务小助手</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "footerView"
}
</script>

<style scoped lang="scss">
.footer{
  padding: 30px 0;
  background-color: #2882db;
  .footer-left{
    width: 900px;
    p{
      line-height: 40px;
      font-size: 16px;
      color: #fff;
    }
  }
  .footer-right{
    margin: 0 30px;
    img{
      display: block;
      width: 102px;
      height: 102px;
      margin:  0 auto;
    }
    p{
      text-align: center;
      line-height: 40px;
      font-size: 16px;
      color: #fff;
    }
  }
}
</style>