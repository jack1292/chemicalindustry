<template>
  <div class="demand bx-content">
    <div class="page-title">
      <i class="iconfont iconleft"></i>当前位置：首页 > 已发布 > 高盐工业废水深度处理技术
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
        <div class="gys-box">
          <div class="gys-title"><span>供应商</span></div>

          <ul class="gys-list">
            <li class="active">
              <div>头像</div>
              <div class="active">姓名</div>
              <div class="active">时间</div>
              <div>操作</div>
            </li>
            <li>
              <div><img src="../../assets/img/zj.png" alt=""></div>
              <div class="active">jack</div>
              <div class="active">2020-05-06</div>
              <div> <router-link to="/home/expertDetail?id=1" class="to-detail">查看详情</router-link></div>
            </li>
            <li>
              <div><img src="../../assets/img/zj.png" alt=""></div>
              <div class="active">jack</div>
              <div class="active">2020-05-06</div>
              <div> <router-link to="/home/expertDetail?id=1" class="to-detail">查看详情</router-link></div>
            </li>
            <li>
              <div><img src="../../assets/img/zj.png" alt=""></div>
              <div class="active">jack</div>
              <div class="active">2020-05-06</div>
              <div> <router-link to="/home/expertDetail?id=1" class="to-detail">查看详情</router-link></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userPost",
  data() {
    return {
    }
  },
  created() {
    this.$emit('setIndex', -1)
  }
}
</script>

<style scoped lang="scss">
.demand{
  .demand-detail{
    border: solid 1px #aaccef;
    padding: 25px 40px;
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
    .gys-box{
      margin-top: 40px;
      .gys-title{
        height: 40px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;
        span{
          display: block;
          width: 62px;
          height: 40px;
          line-height: 40px;
          color: #2882db;
          font-size: 16px;
          text-align: center;
          border-bottom: 1px solid #2882db;
        }
      }
      .gys-list{
        border: 1px solid #2882db;
        border-bottom: 0;
        li{
          height: 40px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #2882db;
          &.active{
            background: rgba(40,130,219,.2);
            div{
              color: #2882db;
              font-size: 16px;
            }
          }
          div{
            width: 15%;
            padding: 0 15px;
            &.active{
              width: 40%;
            }
            img{
              display: block;
              width: 30px;
              height: 30px;
              margin: 5px 0;
            }
            .to-detail{
              display: block;
              color: #2882db;
            }
          }
        }
      }
    }

  }
}
</style>