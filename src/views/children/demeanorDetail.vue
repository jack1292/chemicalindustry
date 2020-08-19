<template>
  <div class="fencai bx-content">
    <div class="page-title">
      <i class="iconfont iconleft"></i>当前位置：首页 > 会员风采 > 大连度达理工安全系统有限公司
    </div>
    <div class="fc-info">
      <div class="org-title flex align-center">
        <img src="../../assets/img/fencai.png" alt="">
        <h2>大连度达理工安全系统有限公司</h2>
      </div>
      <div class="fc-info-label">公司介绍</div>
      <div class="fc-info-desc">
        <p>大连度达理工安全系统有限公司创建于1988年，是国内最早从事安全泄放技术研究和安全泄放装置生产的高新技术企业。大连理工度达安全工程有限公司，是大连度达理工安全系统有限公司的全资子公司。
          公司业务范围涵盖工业安全与爆炸控制系统及装备制造、安全检测、智能化安全系统设计、安全工程及服务等版块，致力于为客户提供全链条防超压、防爆、抑爆、隔爆技术产品和安全工程解决方案，为客户提供安全管家式的全程服务。</p>
        <p>公司坚持以质量管理为先。取得了爆破片最高级A级和安全阀特种设备制造许可证；获得了欧盟CE认证；通过了ISO&nbsp;9001、ISO14001、OSHMS18001以及核设备附件管理体系认证。
          公司坚持以产品质量为本。开发的超压泄放产品（爆破片、安全阀、呼吸阀等）以及爆炸防护产品（阻火器、隔爆阀、无焰泄放装置、爆炸抑制系统、火花探测及熄灭系统等）达到了国内国际领先水平，并远销意大利、德国</p>
        <p>公司拥有6项发明专利、12项专有技术、3项软件著作权及50余项实用新型专利，四种产品被评为国家级新产品。
          公司坚持以技术研发为基础。拥有独立进行研发试验的工程研究中心，是大连理工大学产学研合作与人才培养基地。拥有高水平科研设施如爆炸特性试验平台、高温疲劳试验平台、高速爆破试验平台、防爆产品检测平台等，能够开展常规及特殊需求的产品性能试验和科学研究。
          公司研究成果丰硕。是我国强制性标准GB567《爆破片安全装置》的起草和编制者，也是我国大容规和移动规等的编制单位。先后参与了国家科技攻关项目《压力容器防爆抑爆研究》、科技部重点研究项目《易燃易爆危险源抑爆隔爆防护关键技术研究》、国家重点研发项目《特种设备安全防护系统功能安全保障关键技术研究》、国家火炬计划项目等国家及省部级项目。研究成果先后获国家科学技术进步三等奖，国家教委科技进步一等奖、辽宁省科技进步二等奖、中国石油化学工业联合会科学进步二等奖。</p>
      </div>
      <div class="fc-info-label">产品展示</div>
      <div class="fc-info-pro">
        <p>环氧结构胶: 适用于金属材料、复合材料、陶瓷材料、碳材料等的粘结，恶劣情况下需要保持粘结强度，可使用本产品。</p>
        <img src="../../assets/img/meet.png" alt="">
      </div>
      <div class="fc-info-label">联系我们</div>
      <div class="fc-info-call">
        <p>联系电话：<b>66778185</b></p>
        <p>厂址：辽宁省大连经济技术开发区双D港辽河东路26号</p>
        <p>办公室：辽宁省大连经济技术开发区双D港辽河东路26号</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "demeanorDetail",
  data() {
    return {}
  },
  created() {
    this.$emit('setIndex', 1)
  }
}
</script>

<style scoped lang="scss">
.fc-info {
  border: solid 1px #aaccef;
  padding: 25px;
  margin-bottom: 25px;

  .org-title {
    padding-bottom: 25px;
    border-bottom: 1px solid #ccc;

    img {
      display: block;
      width: 138px;
      height: 138px;
      background-color: #ffffff;
      box-shadow: 0px 3px 7px 0px rgba(25, 141, 255, 0.35);
    }

    h2 {
      margin-left: 25px;
      flex: 1;
      font-size: 28px;
      line-height: 150%;
      color: #333333;
    }
  }

  .fc-info-label {
    width: 112px;
    height: 36px;
    margin: 40px 0 15px;
    text-align: center;
    line-height: 36px;
    font-size: 20px;
    color: #fff;
    background-color: #2882db;
  }

  .fc-info-desc {
    p {
      text-indent: 28px;
      margin-bottom: 15px;
      line-height: 22px;
      letter-spacing: 0px;
      color: #333333;
    }
  }

  .fc-info-pro {
    p {
      margin-bottom: 15px;
      line-height: 22px;
      letter-spacing: 0px;
      color: #333333;
    }

    img {
      display: block;
      max-width: 100%;
    }
  }

  .fc-info-call {
    p {
      margin-bottom: 15px;
      line-height: 22px;
      letter-spacing: 0px;
      color: #333333;

      b {
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
}
</style>