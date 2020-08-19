<template>
  <div class="expert bx-content">
    <div class="page-title">
      <i class="iconfont iconleft"></i>当前位置：首页 > 专家展示 > 陈建峰
    </div>
    <div class="expert-detail flex align-start">
      <img src="../../assets/img/zj.png" alt="" class="zj-logo">
      <div class="zj-info">
        <div class="zj-name">
          <h3 >陈建峰</h3>
          <p><span>出生年月：1965年8月</span><span>民族：汉族</span></p>
          <p><span>工作单位：中国工程院</span><span>籍贯：浙江省慈溪市</span></p>
          <p></p>
        </div>
        <div class="zj-desc">
          <p class="zj-desc-tit">
            <span>专家职称</span>
          </p>
          <div class="zj-desc-info">中国工程院党组成员、秘书长</div>
        </div>
        <div class="zj-desc">
          <p class="zj-desc-tit">
            <span>研究方向</span>
          </p>
          <div class="zj-desc-info">
            现任北京化工大学化工学院院长，纳米材料先进制备技术与应用科学教育部重点实验室主任，教育部超重力工程研究中心主任，校学术委员会委员，国家
            工业领域“节能减排”总体专家组成员，中国化工学会常务理事兼化学工程专业委员会副主任，中国颗粒学会理事超微颗粒专业委员会副主任，中国材料
            学会青年委员会常务理事，《The Canadian Journal of Chemical Engineering》副主编、《Chemical Engineering and Processing: Process Intensi
            fication》、《Particuology》、《化工学报》、《高校化学工程学报》、《功能材料》等刊物编委。
          </div>
        </div>
        <div class="zj-desc">
          <p class="zj-desc-tit">
            <span>主要成果</span>
          </p>
          <div class="zj-desc-info">主持承担过国家自然科学基金委重大项目、创新研究群体项目、国家“863”重点项目、国家科技攻关计划重点项目、国家高技术产业化示范工程项目等系
          列国家重大、重点项目和国际公司合作项目。</div>
        </div>
        <div class="zj-desc">
          <p class="zj-desc-tit">
            <span>获奖信息</span>
          </p>
          <div class="zj-desc-info">获何梁何利创新奖（2008），并作为第一完成人，获国家技术发明奖二等奖（2002）、国家科学技术进步奖二等奖（2007）共2次，省部级一等奖5次、二
          等奖2次，获北京市教学成果奖一等奖共2次，并获国家石油与化学工业优秀科技图书奖一等奖，美国DOW化学研究员基金奖，第八届中国青年科技奖，第八
          届中国高校霍英东青年教师奖，国家“863”计划十五周年突出贡献先进工作者，全国优秀教师和北京市创新标兵称号等荣誉。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "expertDetail",
  data() {
    return {}
  },
  created() {
    this.$emit('setIndex', 4)
  }
}
</script>

<style scoped lang="scss">
.expert{
  .expert-detail{
    border: solid 1px #aaccef;
    padding: 25px;
    margin-bottom: 25px;
    .zj-logo{
      display: block;
      width: 122px;
      height: 122px;
      border-radius: 122px;
      margin-right: 30px;
    }
    .zj-info{
      flex: 1;
      .zj-name{
        h3{
          font-size: 18px;
          margin-bottom: 20px;
        }
        p{
          display: flex;
          align-items: center;
          height: 40px;
          span{
            display: block;
            width: 50%;
          }
        }
      }
      .zj-desc{
        margin-bottom: 30px;
        .zj-desc-tit{
          height: 40px;
          line-height: 40px;
          border-bottom: 1px solid #ccc;
          margin-bottom: 10px;
          span{
            display: block;
            width: 80px;
            font-size: 18px;
            color: #2882db;
            line-height: 40px;
            border-bottom: 1px solid #2882db;
          }
        }
        .zj-desc-info{
          line-height: 150%;
        }
      }
    }
  }
}
</style>