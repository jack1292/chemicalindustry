<template>
  <div class="demand bx-content">
    <div class="page-title">
      <i class="iconfont iconleft"></i>当前位置：首页 > 技术需求 > 高盐工业废水深度处理技术
    </div>
    <div class="demand-detail">
      <div class="demand-detail-title">
        <h3>高盐工业废水深度处理技术</h3>
        <p>
          <span>项目编号：2020081288378</span>
          <span>发布时间：2020-08-06</span>
        </p>
      </div>
      <div class="detail-info">
        <div class="info-item">
          <span class="label">需求名称：</span>高盐工业废水深度处理技术
        </div>
        <div class="info-item">
          <span class="label">需求概述：</span>高盐工业废水深度处理技术
        </div>
        <div class="info-item">
          <span class="label">性能要求：</span>高盐工业废水深度处理技术
        </div>
        <div class="info-item">
          <span class="label">其他要求：</span>高盐工业废水深度处理技术
        </div>
        <div class="info-item">
          <span class="label">需求分类：</span>高盐工业废水深度处理技术
        </div>
        <div class="info-item">
          <span class="label">需求联系：</span>高盐工业废水深度处理技术
        </div>
        <div class="info-item">
          <span class="label">联系电话：</span>高盐工业废水深度处理技术
        </div>
        <div class="info-item">
          <span class="label">电子邮箱：</span>高盐工业废水深度处理技术
        </div>
        <div class="info-item">
          <span class="label">需求单位：</span>高盐工业废水深度处理技术
        </div>
        <div class="info-item">
          <span class="label">单位简介：</span>高盐工业废水深度处理技术
        </div>
        <el-button class="ican">我能解决</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "demandDetail",
  data() {
    return {
    }
  },
  created() {
    this.$emit('setIndex', 2)
  }
}
</script>

<style scoped lang="scss">
.demand{
  .demand-detail{
    border: solid 1px #aaccef;
    padding: 25px;
    margin-bottom: 25px;
    .demand-detail-title{
      padding: 20px 0;
      border-bottom: 1px solid #ccc;
      h3{
        font-size: 22px;
        font-weight: bold;
        line-height: 44px;
        color: #333333;
        text-align: center;
        margin-bottom: 15px;
      }
      p{
        text-align: center;
        span{
          padding: 0 30px;
        }
      }
    }
    .detail-info{
      margin-top: 30px;
      .info-item{
        margin-bottom: 10px;
        .label{
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
    .ican{
      display: block;
      width: 138px;
      height: 40px;
      margin: 20px auto;
      color: #fff;
      border: 1px solid #00b4d8;
      background-color: #00b4d8;
      border-radius: 4px;
    }
  }
}
</style>