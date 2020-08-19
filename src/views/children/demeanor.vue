<template>
  <div class="fencai bx-content">
    <div class="page-title">
      <i class="iconfont iconleft"></i>当前位置：首页 > 会员风采
    </div>
    <div class="fc-list">
      <div class="fc-item flex align-center">
        <img src="../../assets/img/fencai.png" alt="">
        <div>
          <h3 class="ovHide">大连度达理工安全系统有限公司</h3>
          <p class="ovHide3">
            连度达理工安全系统有限公司创建于1988年，是国内最早从事安全泄放技术研究和安全泄放装置生产的高新技术企业。大连理工度达安全工程有限公司，是大连度达理工安全系统有限公司的全资子公司。业务范围涵盖工业安全与爆炸控制系统及装备制造、安全检测、智能化安全系统设计、安全工程及服务等版块，致力于为客户提供全链条...</p>
        </div>
      </div>
      <div class="fc-item flex align-center">
        <img src="../../assets/img/fencai.png" alt="">
        <div>
          <h3 class="ovHide">大连度达理工安全系统有限公司</h3>
          <p class="ovHide3">
            连度达理工安全系统有限公司创建于1988年，是国内最早从事安全泄放技术研究和安全泄放装置生产的高新技术企业。大连理工度达安全工程有限公司，是大连度达理工安全系统有限公司的全资子公司。业务范围涵盖工业安全与爆炸控制系统及装备制造、安全检测、智能化安全系统设计、安全工程及服务等版块，致力于为客户提供全链条...</p>
        </div>
      </div>
      <div class="fc-item flex align-center">
        <img src="../../assets/img/fencai.png" alt="">
        <div>
          <h3 class="ovHide">大连度达理工安全系统有限公司</h3>
          <p class="ovHide3">
            连度达理工安全系统有限公司创建于1988年，是国内最早从事安全泄放技术研究和安全泄放装置生产的高新技术企业。大连理工度达安全工程有限公司，是大连度达理工安全系统有限公司的全资子公司。业务范围涵盖工业安全与爆炸控制系统及装备制造、安全检测、智能化安全系统设计、安全工程及服务等版块，致力于为客户提供全链条...</p>
        </div>
      </div>
      <div class="fc-item flex align-center">
        <img src="../../assets/img/fencai.png" alt="">
        <div>
          <h3 class="ovHide">大连度达理工安全系统有限公司</h3>
          <p class="ovHide3">
            连度达理工安全系统有限公司创建于1988年，是国内最早从事安全泄放技术研究和安全泄放装置生产的高新技术企业。大连理工度达安全工程有限公司，是大连度达理工安全系统有限公司的全资子公司。业务范围涵盖工业安全与爆炸控制系统及装备制造、安全检测、智能化安全系统设计、安全工程及服务等版块，致力于为客户提供全链条...</p>
        </div>
      </div>
      <div class="fc-item flex align-center">
        <img src="../../assets/img/fencai.png" alt="">
        <div>
          <h3 class="ovHide">大连度达理工安全系统有限公司</h3>
          <p class="ovHide3">
            连度达理工安全系统有限公司创建于1988年，是国内最早从事安全泄放技术研究和安全泄放装置生产的高新技术企业。大连理工度达安全工程有限公司，是大连度达理工安全系统有限公司的全资子公司。业务范围涵盖工业安全与爆炸控制系统及装备制造、安全检测、智能化安全系统设计、安全工程及服务等版块，致力于为客户提供全链条...</p>
        </div>
      </div>
    </div>
    <div class="page-box">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="100"
          background
          layout="prev, pager, next, jumper"
          :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "demeanor",
  data() {
    return {
      currentPage:1
    }
  },
  created() {
    this.$emit('setIndex', 1)
  }
}
</script>

<style scoped lang="scss">
.fencai {
  .fc-list {
    border: solid 1px #aaccef;
    padding: 0 25px 25px;

    .fc-item {
      padding: 25px 0;
      border-bottom: 1px dashed #ccc;

      img {
        width: 138px;
        height: 138px;
        margin-right: 25px;
        background-color: #ffffff;
        box-shadow: 0px 3px 7px 0px rgba(25, 141, 255, 0.35);
      }

      div {
        flex: 1;
        overflow: hidden;

        h3 {
          font-size: 20px;
          line-height: 36px;
          color: #555555;
        }

        p {
          font-size: 14px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 26px;
          letter-spacing: 1px;
          color: #666666;
        }
      }
    }
  }

  .page-box {
    margin: 30px auto;
    text-align: center;
  }

}
</style>