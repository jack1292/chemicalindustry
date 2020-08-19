<template>
<div class="meet bx-content">
  <div class="page-title">
    <i class="iconfont iconleft"></i>当前位置：首页 > 会议活动 > ICIF China 2020第十九届中国国际化工展览会
  </div>
  <div class="meet-detail">
    <div class="meet-info">
      <img src="../../assets/img/meet.png" alt="">
      <div class="meet-some">
        <h3 class="meet-title">ICIF China 2020第十九届中国国际化工展览会</h3>
        <p class="meet-label"><span>会议时间：</span>2020-05-06 19:30:30</p>
        <p class="meet-label"><span>会议规模：</span>1200</p>
        <p class="meet-label"><span>会议类别：</span>科技</p>
        <p class="meet-label"><span>会议时主办单位：</span>中国石油和化学工业联合会</p>
        <div class="bm-box">
          <el-button class="bm-btn active">我要报名</el-button>
          <el-button class="bm-btn">已报名</el-button>
        </div>
      </div>
    </div>
    <div class="meet-desc-title">会议概况</div>
    <p class="meed-desc">
      中国国际化工展览会（ICIF China），创办于1992年，由中国石油和化学工业联合会、中国国际贸易促进委员会化工行业分会和中国化工信息中心三大化工行业权威机构组织。集中展示当今石油和化学工业的产品和先进技术，涵盖了整个石油、石化、化工及其相关产业领域；已成为国内外石油和化工界广泛认可、企业踊跃参与、影响力较高的行业品牌展会。展会以“智慧化工—创新引领未来”为主题，研究探讨石油和化工行业绿色、安全、环保、能效、科学发展方向，展示化工全产业链最新的产品与理念，为行业发展发挥助力，搭建协同发展共赢平台。
    </p>
    <div class="meet-desc-title">会议地点</div>
    <p class="meed-desc">
      上海新国际博览中心
    </p>
    <div class="meet-desc-title">报名人数</div>
    <p class="meed-desc">
      1000
    </p>
  </div>
</div>
</template>

<script>
export default {
name: "meetDetail",
  data() {
    return {

    }
  },
  created() {
    this.$emit('setIndex', 3)
  }
}
</script>

<style scoped lang="scss">
.meet{
  .meet-detail{
    border: solid 1px #aaccef;
    padding: 25px;
    margin-bottom: 25px;
    .meet-info{
      display: flex;
      align-items: center;
      justify-content: space-between;
      img{
        display: block;
        width: 440px;
        margin-right: 36px;
      }
      .meet-some{
        flex: 1;
        .meet-title{
          font-size: 24px;
          line-height: 150%;
          margin-bottom: 20px;
        }
        .meet-label{
          line-height: 36px;
          color: #999999;
          span{
            color: #333;
          }
        }
      }
      .bm-box{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .bm-btn{
          width: 138px;
          height: 40px;
          color: #333;
          border: #e4e4e4;
          background-color: #e4e4e4;
          border-radius: 2px;
          &.active{
            border: #ff5304;
            color: #fff;
            background-color: #ff5304;
          }
        }
      }
    }


    .meet-desc-title{
      display: block;
      width: 82px;
      height: 40px;
      font-size: 20px;
      line-height: 40px;
      text-align: center;
      margin: 30px 0 15px;
      color: #2882db;
      border-bottom: 2px solid #2882db;
    }
  }
}
</style>