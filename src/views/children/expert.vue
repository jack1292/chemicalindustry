<template>
  <div class="expert bx-content">
    <div class="page-title">
      <i class="iconfont iconleft"></i>当前位置：首页 > 专家展示
    </div>
    <div class="expert-list flex align-center">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="expert-item">
            <img src="../../assets/img/zj.png" alt="">
            <h3>陈建峰</h3>
            <p class="ovHide"><b>专家职称</b>：中国工程院秘书长、北京...</p>
            <p class="active ovHide2"><b>研究方向</b>：纳米材料和超重力反应分离工程。在纳米材料化学...</p>
            <div>
              查看详情
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="expert-item">
            <img src="../../assets/img/zj.png" alt="">
            <h3>陈建峰</h3>
            <p class="ovHide"><b>专家职称</b>：中国工程院秘书长、北京...</p>
            <p class="active ovHide2"><b>研究方向</b>：纳米材料和超重力反应分离工程。在纳米材料化学...</p>
            <div>
              查看详情
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="expert-item">
            <img src="../../assets/img/zj.png" alt="">
            <h3>陈建峰</h3>
            <p class="ovHide"><b>专家职称</b>：中国工程院秘书长、北京...</p>
            <p class="active ovHide2"><b>研究方向</b>：纳米材料和超重力反应分离工程。在纳米材料化学...</p>
            <div>
              查看详情
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="expert-item">
            <img src="../../assets/img/zj.png" alt="">
            <h3>陈建峰</h3>
            <p class="ovHide"><b>专家职称</b>：中国工程院秘书长、北京...</p>
            <p class="active ovHide2"><b>研究方向</b>：纳米材料和超重力反应分离工程。在纳米材料化学...</p>
            <div>
              查看详情
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="expert-item">
            <img src="../../assets/img/zj.png" alt="">
            <h3>陈建峰</h3>
            <p class="ovHide"><b>专家职称</b>：中国工程院秘书长、北京...</p>
            <p class="active ovHide2"><b>研究方向</b>：纳米材料和超重力反应分离工程。在纳米材料化学...</p>
            <div>
              查看详情
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="expert-item">
            <img src="../../assets/img/zj.png" alt="">
            <h3>陈建峰</h3>
            <p class="ovHide"><b>专家职称</b>：中国工程院秘书长、北京...</p>
            <p class="active ovHide2"><b>研究方向</b>：纳米材料和超重力反应分离工程。在纳米材料化学...</p>
            <div>
              查看详情
            </div>
          </div>
        </el-col>
      </el-row>
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
  name: "expert",
  data() {
    return {}
  },
  created() {
    this.$emit('setIndex', 4)
  }
}
</script>

<style scoped lang="scss">
.expert {
  .expert-list {
    border: solid 1px #aaccef;
    padding: 25px 25px 5px;

    .expert-item {
      display: block;
      width: 274px;
      height: 278px;
      border-radius: 4px;
      border: solid 1px #e8e8e8;
      margin-bottom: 20px;
      padding: 30px 0;
      cursor: pointer;
      background: linear-gradient(to bottom, #7ac0f5 0%, #7ac0f5 30%, white 31%, white 100%);

      img {
        display: block;
        width: 90px;
        height: 90px;
        border-radius: 90px;
        background-color: #7ac0f5;
        box-shadow: 0px 1px 1px 0px rgba(89, 182, 252, 0.13);
        border: solid 3px #ffffff;
        margin: 0 auto 20px;
      }

      h3 {
        text-align: center;
        font-size: 18px;
        font-weight: 500;
      }
      p{
        padding: 0 15px;
        text-align: left;
        line-height: 20px;
        &.active{
          height: 40px;
        }
        b{
          font-weight: 500;
        }
      }

      div{
        margin-top: 18px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
        color: #2882db;
        border-top: 1px solid #e8e8e8;
      }
    }
  }

  .page-box {
    margin: 30px auto;
    text-align: center;
  }
}
</style>