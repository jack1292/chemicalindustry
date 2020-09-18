<template>
  <div class="demand bx-content">
    <div class="page-title">
      <i class="iconfont iconleft"></i>当前位置：首页 > 技术需求
    </div>

    <div class="saixuan flex align-center padding-lr-sm">
      <span>技术需求筛选：</span>
      <el-radio-group v-model="checkList" @change="handleChange">
        <el-radio label="">全部</el-radio>
        <el-radio label="1">合作开发</el-radio>
        <el-radio label="2">合作兴办新企业</el-radio>
        <el-radio label="3">科技服务</el-radio>
        <el-radio label="0">综合类</el-radio>
      </el-radio-group>
    </div>
    <div class="demand-list">
      <router-link v-for="(item,index) in demand" :key="index" :to="'/home/demandDetail?id='+item.sha1"
                   class="demand-item flex align-start justify-between">
        <div>
          <h3 class="ovHide"><i class="iconfont iconleft"></i>{{ item.title }}</h3>
          <p>{{ item.creation_time }}</p>
        </div>
        <span>{{ item.need_type|need_type }}</span>
      </router-link>
      <div v-if="noData" class="no-data">
        暂无数据
      </div>
    </div>
    <div class="page-box">
      <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="10"
          background
          layout="prev, pager, next, jumper"
          :total="pagetotal">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {needType} from "@/tools/utils";

export default {
  name: "techneed",
  inject: ['reload'],
  data() {
    return {
      checkList: '',
      pagetotal: 1,
      currentPage: 1,
      demand: [],
      noData: false,
    }
  },
  created() {
    this.$emit('setIndex', 2)
    if (this.$route.query.type) {
      this.checkList = this.$route.query.type
    }
    this.getList(this.currentPage)
  },
  methods: {
    handleChange() {
      this.currentPage = 1
      this.demand = []
      this.$router.push({
        query: {
          type: this.checkList
        }
      })
    },
    handleCurrentChange() {
      this.demand = []
      this.getList(this.currentPage)
    },
    getList(page) {
      let data = {}
      if (this.checkList !== '') {
        data = {
          need_type: this.checkList,
          page: page
        }
      } else {
        data = {
          page: page
        }
      }
      this.$api.apiContent.demandList(data).then(res => {
        if (res.count === 0) {
          this.noData = true
        } else {
          this.noData = false
        }
        this.demand = res.results
        this.pagetotal = res.count
        this.demand.map(item => {
          item.creation_time = this.$tools.ZHDate(new Date(item.creation_time))
        })
      })
    }
  },
  watch: {
    $route() {
      this.reload()
    }
  },
  filters: {
    need_type(num) {
      let str = needType(num)
      return str
    },
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

      &:hover {
        div {
          h3 {
            color: #ffba39;
          }
        }

      }

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
        padding: 0 15px;
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