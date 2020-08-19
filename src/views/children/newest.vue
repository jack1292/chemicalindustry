<template>
  <div class="demand bx-content">
    <div class="page-title">
      <i class="iconfont iconleft"></i>当前位置：首页 > 最新技术
    </div>

    <div class="saixuan flex align-center padding-lr-sm">
      <span>最新技术筛选：</span>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="发明专利"></el-checkbox>
        <el-checkbox label="科技论文"></el-checkbox>
        <el-checkbox label="研究报告"></el-checkbox>
        <el-checkbox label="新产品"></el-checkbox>
        <el-checkbox label="综合类"></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="demand-list">
      <div class="demand-item flex align-start justify-between">
        <div>
          <h3 class="ovHide"><i class="iconfont iconleft"></i>寻求氰氟草酯工业化技术</h3>
          <p>奖项：一等奖</p>
          <p>供应方：湖北兴发化工集团股份有限公司,</p>
        </div>
        <span>研究报告</span>
      </div>
      <div class="demand-item flex align-start justify-between">
        <div>
          <h3 class="ovHide"><i class="iconfont iconleft"></i>寻求氰氟草酯工业化技术</h3>
          <p>奖项：一等奖</p>
          <p>供应方：湖北兴发化工集团股份有限公司,</p>
        </div>
        <span>研究报告</span>
      </div>
      <div class="demand-item flex align-start justify-between">
        <div>
          <h3 class="ovHide"><i class="iconfont iconleft"></i>寻求氰氟草酯工业化技术</h3>
          <p>奖项：一等奖</p>
          <p>供应方：湖北兴发化工集团股份有限公司,</p>
        </div>
        <span>研究报告</span>
      </div>
      <div class="demand-item flex align-start justify-between">
        <div>
          <h3 class="ovHide"><i class="iconfont iconleft"></i>寻求氰氟草酯工业化技术</h3>
          <p>奖项：一等奖</p>
          <p>供应方：湖北兴发化工集团股份有限公司,</p>
        </div>
        <span>研究报告</span>
      </div>
      <div class="demand-item flex align-start justify-between">
        <div>
          <h3 class="ovHide"><i class="iconfont iconleft"></i>寻求氰氟草酯工业化技术</h3>
          <p>奖项：一等奖</p>
          <p>供应方：湖北兴发化工集团股份有限公司,</p>
        </div>
        <span>研究报告</span>
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
  name: "newest",
  data() {
    return {
      checkList: []
    }
  },
  created() {
    this.$emit('setIndex', 5)
  }
}
</script>

<style scoped lang="scss">
.demand {
  .saixuan {
    width: 1200px;
    height: 50px;
    background-color: #e3f1fe;
    border: solid 1px #aaccef;
    margin-bottom: 30px;

    span {
      font-size: 14px;
      font-weight: 500;
      margin-right: 20px;
    }
  }

  .demand-list {
    border: solid 1px #aaccef;
    padding: 0 25px 25px;

    .demand-item {
      padding: 20px 0;
      border-bottom: 1px dashed #ccc;
      cursor: pointer;

      div {
        width: 70%;
        overflow: hidden;

        h3 {
          font-size: 18px;
          font-weight: 500;
          line-height: 36px;
          color: #333333;
          margin-bottom: 5px;

          i {
            color: #50a6ff;
            margin-right: 5px;
          }
        }

        p {
          padding-left: 22px;
          color: #999;
          line-height: 20px;
        }
      }

      span {
        padding: 0 20px;
        height: 26px;
        line-height: 26px;
        color: #2882db;
        border: solid 1px #2882db;
      }
    }
  }

  .page-box {
    margin: 30px auto;
    text-align: center;
  }
}
</style>