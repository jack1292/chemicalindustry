<template>
  <div class="bx-content  index-box">
    <div class="flex align-center justify-between flex-wrap">
      <div class="left-box margin-bottom-sm padding-sm">
        <router-link to="/login" class="flex align-center index-user padding-lr" v-if="!isLogin">
          <img src="../../assets/img/headimg.png" alt="">
          <span class="margin-left-sm">立即登录</span>
        </router-link>
        <router-link to="/home/user" class="flex align-center index-user padding-lr" v-else>
          <img :src="headimg" alt="">
          <span class="margin-left-sm">{{ name }}</span>
        </router-link>
        <div class="user-nav">
          <div class="ks-box">快速入口</div>
          <div class="user-list flex align-center justify-between flex-wrap">
            <div class="user-item">
              <img src="../../assets/img/u1.png" alt="">
              <p>我有技术</p>
            </div>
            <div class="user-item">
              <img src="../../assets/img/u2.png" alt="">
              <p>专家认证</p>
            </div>
            <div class="user-item">
              <img src="../../assets/img/u3.png" alt="">
              <p>活动报名</p>
            </div>
            <div class="user-item">
              <img src="../../assets/img/u4.png" alt="">
              <p>我有需求</p>
            </div>
            <div class="user-item">
              <img src="../../assets/img/u5.png" alt="">
              <p>企业认证</p>
            </div>
            <div class="user-item">
              <img src="../../assets/img/u6.png" alt="">
              <p>消息通知</p>
            </div>
          </div>
        </div>
      </div>
      <div class="center-box margin-bottom-sm">
        <div class="flex align-center justify-between index-mode-title">
          <span>会员风采</span>
          <router-link to="/home/demeanor" class="index-more">
            查看更多 <i class="iconfont icongengduoleft"></i>
          </router-link>
        </div>
        <div class="fc-list">
          <router-link to="/home/demeanorDetail?id=1" class="flex align-center fc-item" >
            <img src="../../assets/img/fencai.png" alt="">
            <div>
              <h3 class="ovHide">大连度达理工安全系统有限公司</h3>
              <p class="ovHide3">大连度达理工安全系统有限公司创建于1988年，是中国国内最早从事安全泄放技术研究和安全泄放装置生产的高新技术企业。大连理工度达安全工程有限...</p>
            </div>
          </router-link>
          <router-link to="/home/demeanorDetail?id=1" class="flex align-center fc-item" >
            <img src="../../assets/img/fencai.png" alt="">
            <div>
              <h3 class="ovHide">大连度达理工安全系统有限公司</h3>
              <p class="ovHide3">大连度达理工安全系统有限公司创建于1988年，是中国国内最早从事安全泄放技术研究和安全泄放装置生产的高新技术企业。大连理工度达安全工程有限...</p>
            </div>
          </router-link>
          <router-link to="/home/demeanorDetail?id=1" class="flex align-center fc-item" >
            <img src="../../assets/img/fencai.png" alt="">
            <div>
              <h3 class="ovHide">大连度达理工安全系统有限公司</h3>
              <p class="ovHide3">大连度达理工安全系统有限公司创建于1988年，是中国国内最早从事安全泄放技术研究和安全泄放装置生产的高新技术企业。大连理工度达安全工程有限...</p>
            </div>
          </router-link>
          <router-link to="/home/demeanorDetail?id=1" class="flex align-center fc-item" >
            <img src="../../assets/img/fencai.png" alt="">
            <div>
              <h3 class="ovHide">大连度达理工安全系统有限公司</h3>
              <p class="ovHide3">大连度达理工安全系统有限公司创建于1988年，是中国国内最早从事安全泄放技术研究和安全泄放装置生产的高新技术企业。大连理工度达安全工程有限...</p>
            </div>
          </router-link>
        </div>
      </div>
      <div class="right-box margin-bottom-sm">
        <div class="flex align-center justify-between index-mode-title">
          <span>技术需求</span>
          <router-link to="/home/demand" class="index-more">
            查看更多 <i class="iconfont icongengduoleft"></i>
          </router-link>
        </div>
        <div class="need-list">
          <router-link to="/home/demandDetail?id=1" class="flex align-center need-item" >
            <div ><i class="iconfont iconleft"></i>
              <p class="ovHide">柴油车用稀土基SCR催化剂粉体合成及生产推柴油车用稀土基SCR催化剂粉体合成及生产推</p></div>
            <span class="ovHide">合作兴办新企业</span>
          </router-link>
          <router-link to="/home/demandDetail?id=1" class="flex align-center need-item" >
            <div ><i class="iconfont iconleft"></i>
              <p class="ovHide">柴油车用稀土基SCR催化剂粉体合成及生产推柴油车用稀土基SCR催化剂粉体合成及生产推</p></div>
            <span class="ovHide">合作兴办新企业</span>
          </router-link>
          <router-link to="/home/demandDetail?id=1" class="flex align-center need-item" >
            <div ><i class="iconfont iconleft"></i>
              <p class="ovHide">柴油车用稀土基SCR催化剂粉体合成及生产推柴油车用稀土基SCR催化剂粉体合成及生产推</p></div>
            <span class="ovHide">合作兴办新企业</span>
          </router-link>
          <router-link to="/home/demandDetail?id=1" class="flex align-center need-item" >
            <div ><i class="iconfont iconleft"></i>
              <p class="ovHide">柴油车用稀土基SCR催化剂粉体合成及生产推柴油车用稀土基SCR催化剂粉体合成及生产推</p></div>
            <span class="ovHide">合作兴办新企业</span>
          </router-link>
          <router-link to="/home/demandDetail?id=1" class="flex align-center need-item" >
            <div ><i class="iconfont iconleft"></i>
              <p class="ovHide">柴油车用稀土基SCR催化剂粉体合成及生产推柴油车用稀土基SCR催化剂粉体合成及生产推</p></div>
            <span class="ovHide">合作兴办新企业</span>
          </router-link>
          <router-link to="/home/demandDetail?id=1" class="flex align-center need-item" >
            <div ><i class="iconfont iconleft"></i>
              <p class="ovHide">柴油车用稀土基SCR催化剂粉体合成及生产推柴油车用稀土基SCR催化剂粉体合成及生产推</p></div>
            <span class="ovHide">合作兴办新企业</span>
          </router-link>
          <router-link to="/home/demandDetail?id=1" class="flex align-center need-item" >
            <div ><i class="iconfont iconleft"></i>
              <p class="ovHide">柴油车用稀土基SCR催化剂粉体合成及生产推柴油车用稀土基SCR催化剂粉体合成及生产推</p></div>
            <span class="ovHide">合作兴办新企业</span>
          </router-link>
          <router-link to="/home/demandDetail?id=1" class="flex align-center need-item" >
            <div ><i class="iconfont iconleft"></i>
              <p class="ovHide">柴油车用稀土基SCR催化剂粉体合成及生产推柴油车用稀土基SCR催化剂粉体合成及生产推</p></div>
            <span class="ovHide">合作兴办新企业</span>
          </router-link>
          <router-link to="/home/demandDetail?id=1" class="flex align-center need-item" >
            <div ><i class="iconfont iconleft"></i>
              <p class="ovHide">柴油车用稀土基SCR催化剂粉体合成及生产推柴油车用稀土基SCR催化剂粉体合成及生产推</p></div>
            <span class="ovHide">合作兴办新企业</span>
          </router-link>
          <router-link to="/home/demandDetail?id=1" class="flex align-center need-item" >
            <div ><i class="iconfont iconleft"></i>
              <p class="ovHide">柴油车用稀土基SCR催化剂粉体合成及生产推柴油车用稀土基SCR催化剂粉体合成及生产推</p></div>
            <span class="ovHide">合作兴办新企业</span>
          </router-link>
          <router-link to="/home/demandDetail?id=1" class="flex align-center need-item" >
            <div ><i class="iconfont iconleft"></i>
              <p class="ovHide">柴油车用稀土基SCR催化剂粉体合成及生产推柴油车用稀土基SCR催化剂粉体合成及生产推</p></div>
            <span class="ovHide">合作兴办新企业</span>
          </router-link>
          <router-link to="/home/demandDetail?id=1" class="flex align-center need-item" >
            <div ><i class="iconfont iconleft"></i>
              <p class="ovHide">柴油车用稀土基SCR催化剂粉体合成及生产推柴油车用稀土基SCR催化剂粉体合成及生产推</p></div>
            <span class="ovHide">合作兴办新企业</span>
          </router-link>

        </div>
      </div>
      <div class="left-box2">
        <div class="flex align-center justify-between index-mode-title">
          <span>专家展示</span>
          <router-link to="/home/expert" class="index-more">
            查看更多 <i class="iconfont icongengduoleft"></i>
          </router-link>
        </div>
        <div class="zj-list">
          <router-link to="/home/expertDetail?id=1" class="flex align-center zj-item" >
            <img src="../../assets/img/zj.png" alt="">
            <div>
              <p class="ovHide">姓名：陈建峰</p>
              <p class="ovHide">职位：中国工程院院士</p>
              <p class="ovHide2">研究方向：纳米复合材料</p>
            </div>
          </router-link>
          <router-link to="/home/expertDetail?id=1" class="flex align-center zj-item" >
            <img src="../../assets/img/zj.png" alt="">
            <div>
              <p class="ovHide">姓名：陈建峰</p>
              <p class="ovHide">职位：中国工程院院士</p>
              <p class="ovHide2">研究方向：纳米复合材料</p>
            </div>
          </router-link>
        </div>
      </div>
      <div class="center-box2">
        <div class="flex align-center justify-between index-mode-title">
          <span>会议活动</span>
          <router-link to="/home/meet" class="index-more">
            查看更多 <i class="iconfont icongengduoleft"></i>
          </router-link>
        </div>
        <router-link to="/home/meetDetail?id=1" class="meet-item" >
          <img src="../../assets/img/meet.png" alt="">
          <p>CTEF2020第十二届上海国际化工技术装备展览会将成为化工行业的首个大展，展会将于8月26-28日在上海新国际博览中心举行。CTEF 2020开辟了线上展览，为展商提供线上+线下两种展示平台，第一批展商已经成功入驻。</p>
        </router-link>
      </div>
      <div class="right-box2">
        <div class="flex align-center justify-between index-mode-title">
          <span>最新技术</span>
          <router-link to="/home/newest" class="index-more">
            查看更多 <i class="iconfont icongengduoleft"></i>
          </router-link>
        </div>
        <div class="need-list">
          <router-link to="/home/demandDetail?id=1" class="flex align-center need-item" >
            <div ><i class="iconfont iconleft"></i>
              <p class="ovHide">柴油车用稀土基SCR催化剂粉体合成及生产推柴油车用稀土基SCR催化剂粉体合成及生产推</p></div>
            <span class="ovHide">合作兴办新企业</span>
          </router-link>
          <router-link to="/home/demandDetail?id=1" class="flex align-center need-item" >
            <div ><i class="iconfont iconleft"></i>
              <p class="ovHide">柴油车用稀土基SCR催化剂粉体合成及生产推柴油车用稀土基SCR催化剂粉体合成及生产推</p></div>
            <span class="ovHide">合作兴办新企业</span>
          </router-link>
          <router-link to="/home/demandDetail?id=1" class="flex align-center need-item" >
            <div ><i class="iconfont iconleft"></i>
              <p class="ovHide">柴油车用稀土基SCR催化剂粉体合成及生产推柴油车用稀土基SCR催化剂粉体合成及生产推</p></div>
            <span class="ovHide">合作兴办新企业</span>
          </router-link>
          <router-link to="/home/demandDetail?id=1" class="flex align-center need-item" >
            <div ><i class="iconfont iconleft"></i>
              <p class="ovHide">柴油车用稀土基SCR催化剂粉体合成及生产推柴油车用稀土基SCR催化剂粉体合成及生产推</p></div>
            <span class="ovHide">合作兴办新企业</span>
          </router-link>
          <router-link to="/home/demandDetail?id=1" class="flex align-center need-item" >
            <div ><i class="iconfont iconleft"></i>
              <p class="ovHide">柴油车用稀土基SCR催化剂粉体合成及生产推柴油车用稀土基SCR催化剂粉体合成及生产推</p></div>
            <span class="ovHide">合作兴办新企业</span>
          </router-link>
          <router-link to="/home/demandDetail?id=1" class="flex align-center need-item" >
            <div ><i class="iconfont iconleft"></i>
              <p class="ovHide">柴油车用稀土基SCR催化剂粉体合成及生产推柴油车用稀土基SCR催化剂粉体合成及生产推</p></div>
            <span class="ovHide">合作兴办新企业</span>
          </router-link>
          <router-link to="/home/demandDetail?id=1" class="flex align-center need-item" >
            <div ><i class="iconfont iconleft"></i>
              <p class="ovHide">柴油车用稀土基SCR催化剂粉体合成及生产推柴油车用稀土基SCR催化剂粉体合成及生产推</p></div>
            <span class="ovHide">合作兴办新企业</span>
          </router-link>
          <router-link to="/home/demandDetail?id=1" class="flex align-center need-item" >
            <div ><i class="iconfont iconleft"></i>
              <p class="ovHide">柴油车用稀土基SCR催化剂粉体合成及生产推柴油车用稀土基SCR催化剂粉体合成及生产推</p></div>
            <span class="ovHide">合作兴办新企业</span>
          </router-link>
          <router-link to="/home/demandDetail?id=1" class="flex align-center need-item" >
            <div ><i class="iconfont iconleft"></i>
              <p class="ovHide">柴油车用稀土基SCR催化剂粉体合成及生产推柴油车用稀土基SCR催化剂粉体合成及生产推</p></div>
            <span class="ovHide">合作兴办新企业</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="cuihua-title"></div>
    <div class="ch-list flex align-start justify-between flex-wrap">
      <div class="ch-item">
        <div class="ch-title flex align-center justify-between">
          <div class="left-text">化工及医药中间体催化</div>
          <div class="right-tab flex align-center justify-between">
            <span class="active">行业动态</span>
            <span>技术动态</span>
            <span>专家视角</span>
          </div>
        </div>
        <div class="ch-list">
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
        </div>
        <div class="cuihua-more-box">
          <router-link to="/home/catalysis" class="cuihua-more">
            查看更多 <i class="iconfont icongengduoleft"></i>
          </router-link>
        </div>

      </div>
      <div class="ch-item">
        <div class="ch-title flex align-center justify-between">
          <div class="left-text">化工及医药中间体催化</div>
          <div class="right-tab flex align-center justify-between">
            <span class="active">行业动态</span>
            <span>技术动态</span>
            <span>专家视角</span>
          </div>
        </div>
        <div class="ch-list">
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
        </div>
        <div class="cuihua-more-box">
          <router-link to="/home/catalysis" class="cuihua-more">
            查看更多 <i class="iconfont icongengduoleft"></i>
          </router-link>
        </div>

      </div>
      <div class="ch-item">
        <div class="ch-title flex align-center justify-between">
          <div class="left-text">化工及医药中间体催化</div>
          <div class="right-tab flex align-center justify-between">
            <span class="active">行业动态</span>
            <span>技术动态</span>
            <span>专家视角</span>
          </div>
        </div>
        <div class="ch-list">
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
        </div>
        <div class="cuihua-more-box">
          <router-link to="/home/catalysis" class="cuihua-more">
            查看更多 <i class="iconfont icongengduoleft"></i>
          </router-link>
        </div>

      </div>
      <div class="ch-item">
        <div class="ch-title flex align-center justify-between">
          <div class="left-text">化工及医药中间体催化</div>
          <div class="right-tab flex align-center justify-between">
            <span class="active">行业动态</span>
            <span>技术动态</span>
            <span>专家视角</span>
          </div>
        </div>
        <div class="ch-list">
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
        </div>
        <div class="cuihua-more-box">
          <router-link to="/home/catalysis" class="cuihua-more">
            查看更多 <i class="iconfont icongengduoleft"></i>
          </router-link>
        </div>

      </div>
      <div class="ch-item">
        <div class="ch-title flex align-center justify-between">
          <div class="left-text">化工及医药中间体催化</div>
          <div class="right-tab flex align-center justify-between">
            <span class="active">行业动态</span>
            <span>技术动态</span>
            <span>专家视角</span>
          </div>
        </div>
        <div class="ch-list">
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
        </div>
        <div class="cuihua-more-box">
          <router-link to="/home/catalysis" class="cuihua-more">
            查看更多 <i class="iconfont icongengduoleft"></i>
          </router-link>
        </div>

      </div>
      <div class="ch-item">
        <div class="ch-title flex align-center justify-between">
          <div class="left-text">化工及医药中间体催化</div>
          <div class="right-tab flex align-center justify-between">
            <span class="active">行业动态</span>
            <span>技术动态</span>
            <span>专家视角</span>
          </div>
        </div>
        <div class="ch-list">
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
        </div>
        <div class="cuihua-more-box">
          <router-link to="/home/catalysis" class="cuihua-more">
            查看更多 <i class="iconfont icongengduoleft"></i>
          </router-link>
        </div>

      </div>
      <div class="ch-item">
        <div class="ch-title flex align-center justify-between">
          <div class="left-text">化工及医药中间体催化</div>
          <div class="right-tab flex align-center justify-between">
            <span class="active">行业动态</span>
            <span>技术动态</span>
            <span>专家视角</span>
          </div>
        </div>
        <div class="ch-list">
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
          <div class="item-link">
            <p class="ovHide">煤化工行业快速发展将带动脱硫净化剂的市场需求</p>
            <span>[2020-06-12]</span>
          </div>
        </div>
        <div class="cuihua-more-box">
          <router-link to="/home/catalysis" class="cuihua-more">
            查看更多 <i class="iconfont icongengduoleft"></i>
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      isLogin: false,
      headimg: '',
      name: ''
    }
  },
  created() {
    this.$emit('setIndex', 0)
    this.$api.apiContent.passLogin().then(res=>{
      console.log(res)
    }).catch(e=>{
      console.log(e)
    })
  }
}
</script>

<style scoped lang="scss">
.index-box {
  padding: 15px 0;

  .left-box {
    width: 304px;
    height: 416px;
    padding-top: 30px;
    background-color: #e0efff;
    border: solid 1px #aaccef;

    .index-user {
      margin-bottom: 20px;

      img {
        display: block;
        width: 60px;
        height: 60px;
      }

      span {
        font-size: 16px;
        color: #333;
      }
    }

    .user-nav {
      .ks-box {
        line-height: 40px;
        font-size: 16px;
        text-align: center;
        color: #333333;
        font-weight: 500;
        margin-bottom: 30px;
        background: url(../../assets/img/title.png) no-repeat center;
      }
      .user-list{
        .user-item{
          width: 74px;
          margin-bottom: 10px;
          cursor: pointer;
          img{
            display: block;
            width: 74px;
            height: 74px;
            background-color: #2882db;
            border-radius: 2px;
          }
          p{
            text-align: center;
            line-height: 36px;
          }
        }
      }
    }
  }

  .center-box {
    width: 414px;
    height: 416px;
    background-color: #ffffff;
    border: solid 1px #aaccef;
    .fc-list{
      padding: 10px;
      .fc-item{
        margin-bottom: 9px;
        img{
          display: block;
          width: 80px;
          height: 80px;
          margin-right:12px;
          background-color: #ffffff;
          border: solid 1px #74b6ff;
        }
        div{
          flex: 1;
          overflow: hidden;
          h3{
            color: #333333;
            line-height: 24px;
            margin-bottom: 5px;
            font-weight: 500;
          }
          p{
            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 18px;
            letter-spacing: 0px;
            color: #666666;
          }
        }
      }
    }
  }

  .right-box {
    width: 458px;
    height: 416px;
    background-color: #ffffff;
    border: solid 1px #aaccef;
    .need-list{
      padding: 10px;
      .need-item{
        line-height: 30px;
        div{
          width: 330px;
          display: flex;
          align-items: center;
          overflow: hidden;
          i{
            color: #2882db;
          }
        }
        span{
          overflow: hidden;
          flex: 1;
          text-align: right;
          color: #2882db;
        }
      }
    }
  }

  .left-box2 {
    width: 304px;
    height: 328px;
    border: solid 1px #aaccef;
    .zj-list{
      padding: 30px 10px;
      .zj-item{
        margin-bottom: 30px;
        img{
          display: block;
          width: 100px;
          height: 100px;
          border-radius: 100px;
          margin-right:12px;
          background-color: #ffffff;
        }
        div{
          flex: 1;
          overflow: hidden;
          p{
            font-size: 14px;
            font-weight: 500;
            font-stretch: normal;
            line-height: 24px;
            letter-spacing: 0px;
            color: #666666;
          }
        }
      }
    }
  }

  .center-box2 {
    width: 414px;
    height: 328px;
    background-color: #ffffff;
    border: solid 1px #aaccef;
    .meet-item{
      display: block;
      padding: 20px 10px;
      img{
        display: block;
        width: 390px;
        height: 158px;
        margin: 0 auto 10px;
      }
      p{
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 22px;
        letter-spacing: 0px;
        color: #333333;
      }
    }
  }

  .right-box2 {
    width: 458px;
    height: 328px;
    background-color: #ffffff;
    border: solid 1px #aaccef;
    .need-list{
      padding: 10px;
      .need-item{
        line-height: 30px;
        div{
          width: 330px;
          display: flex;
          align-items: center;
          overflow: hidden;
          i{
            color: #2882db;
          }
        }
        span{
          overflow: hidden;
          flex: 1;
          text-align: right;
          color: #2882db;
        }
      }
    }
  }

  .index-mode-title {
    width: 100%;
    height: 34px;
    background-color: #e0efff;
    padding: 0 15px;
    span{
      font-size: 16px;
      font-weight: 500;
    }
    .index-more{
      display: flex;
      align-items: center;
      height: 34px;
      font-size: 12px;
      color: #2882db;
      i{
        color: #2882db;

      }
    }
  }
  .cuihua-title{
    height: 56px;
    margin: 46px auto;
    background: url(../../assets/img/cuihua.png) no-repeat center;
  }
  .ch-list{
    .ch-item{
      width: 575px;
      margin-bottom: 40px;
      .ch-title{
        height: 36px;
        border-bottom: 2px solid #ccc;
        .left-text{
          height: 38px;
          line-height: 36px;
          font-size: 18px;
          letter-spacing: 1px;
          color: #333333;
          border-bottom: 2px solid #2882db;
        }
        .right-tab{
          span{
            font-size: 16px;
            letter-spacing: 1px;
            color: #333;
            margin-left: 15px;
            cursor: pointer;
            &.active{
              color:#ffba39;
            }
          }
        }
      }
      .ch-list{
        padding: 10px 0 5px;
        .item-link{
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 30px;
          p{
            width: 450px;
            padding-left: 10px;
            position: relative;
            &:before{
              position: absolute;
              top: 6px;
              left: 0;
              content: '';
              width: 5px;
              height: 5px;
              border-radius: 5px;
              background: #8ac4ff;
            }
          }
          span{
            flex: 1;
            text-align: right;
          }
        }
      }
      .cuihua-more-box{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .cuihua-more{
          font-size: 12px;
          color: #2882db;
        }
      }
    }
  }
}
</style>