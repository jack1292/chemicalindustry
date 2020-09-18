<template>
  <div class="demand bx-content">
    <div class="page-title">
      <i class="iconfont iconleft"></i>当前位置：首页 > 最新技术
    </div>

    <div class="saixuan flex align-center padding-lr-sm">
      <span>最新技术筛选：</span>
      <el-radio-group v-model="checkList" @change="handleChange">
        <el-radio label="">全部</el-radio>
        <el-radio label="1">发明专利</el-radio>
        <el-radio label="2">科技论文</el-radio>
        <el-radio label="3">研究报告</el-radio>
        <el-radio label="4">新产品</el-radio>
        <el-radio label="0">综合类</el-radio>
      </el-radio-group>
    </div>
    <div class="demand-list">
      <router-link v-for="(item,index) in newest" :key="index" :to="'/home/exhibit_technology_detail?id='+item.id" class="demand-item flex align-start justify-between">
        <div>
          <h3 class="ovHide"><i class="iconfont iconleft"></i>{{ item.title }}</h3>
          <p>奖项：{{ item.awards }}</p>
          <p>供应方：{{ item.exhibit_obj }}</p>
        </div>
        <span>{{ item.sub_exhibit_type | sub_exhibit_type }}</span>
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
import {subExhibitType} from "@/tools/utils";

export default {
  name: "exhibit_technology",
  inject:['reload'],
  data() {
    return {
      checkList: '',
      pagetotal:1,
      currentPage:1,
      newest:[],
      noData:false,
    }
  },
  created() {
    this.$emit('setIndex', 5)
    if(this.$route.query.type){
      this.checkList = this.$route.query.type
    }
    this.getList(this.currentPage)
  },
  methods:{
    handleChange(){
      this.currentPage = 1
      this.newest = []
      this.$router.push({
        query: {
          type: this.checkList
        }
      })
    },
    handleCurrentChange(){
      this.newest = []
      this.getList(this.currentPage)
    },
    getList(page){
      let data = {}
      if(this.checkList !== ''){
        data = {
          exhibit_type: 3,
          sub_exhibit_type:this.checkList,
          page:page
        }
      }else{
        data = {
          exhibit_type: 3,
          page:page
        }
      }
      this.$api.apiContent.newestList(data).then(res => {
        if(res.count === 0){
          this.noData = true
        }else{
          this.noData = false
        }
        this.newest = res.results
        this.pagetotal = res.count
        this.newest.map(item => {
          let list = item.url.split("/");
          item.id = list[list.length - 2]
        })
      })
    }
  },
  filters: {
    sub_exhibit_type(num) {
      let str = subExhibitType(num)
      return str
    }
  },
  watch:{
    $route(){
      this.reload()
    }
  },
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
      &:hover{
        div{
          h3{
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