<template>
  <div class="meet bx-content">
    <div class="page-title">
      <i class="iconfont iconleft"></i>当前位置：首页 > 会议活动
    </div>

    <div class="saixuan flex align-center padding-lr-sm">
      <span>会议活动筛选：</span>
      <el-radio-group v-model="checkList" @change="handleChange">
        <el-radio label="">全部</el-radio>
        <el-radio label="1">科技交流</el-radio>
        <el-radio label="2">人才培养</el-radio>
        <el-radio label="3">知识产权</el-radio>
        <el-radio label="0">综合类</el-radio>

      </el-radio-group>
    </div>
    <div class="meet-list">
      <el-row :gutter="20" style="width: 100%;">
        <el-col :span="8" v-for="(item,index) in meet" :key="index">
          <router-link  :to="'/home/activity_detail?id='+item.sha1"  class="meet-item">
            <img :src="item.banner_pic_path" alt="" :onerror="morenhuiyi">
            <p class="ovHide4"  v-html=" item.introduction"></p>
          </router-link>
        </el-col>

      </el-row>
      <div v-if="noData" class="no-data">
        暂无数据
      </div>
    </div>
    <div class="page-box">
      <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="12"
          background
          layout="prev, pager, next, jumper"
          :total="pagetotal">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "activity",
  inject:['reload'],
  data() {
    return {
      checkList: '',
      pagetotal: 1,
      currentPage: 1,
      meet: [],
      noData:false,
      morenhuiyi:'this.src="' + require('../../assets/img/huiyi.png') + '"',
    }
  },
  created() {
    this.$emit('setIndex', 3)
    if(this.$route.query.type){
      this.checkList = this.$route.query.type
    }
    this.getList(this.currentPage)
  },
  methods: {
    handleChange() {
      this.currentPage = 1
      this.meet = []
      this.$router.push({
        query: {
          type: this.checkList
        }
      })
    },
    handleCurrentChange() {
      this.meet = []
      this.getList(this.currentPage)
    },
    getList(page) {
      let data = {}
      if(this.checkList !== ''){
        data = {
          activity_type:this.checkList,
          page:page
        }
      }else{
        data = {
          page:page
        }
      }
      this.$api.apiContent.meetList(data).then(res => {
        if(res.count === 0){
          this.noData = true
        }else{
          this.noData = false
        }
        this.meet = res.results
        this.pagetotal = res.count
      })
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
.meet {
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

  .meet-list {
    border: solid 1px #aaccef;
    padding: 25px 25px 5px;

    .meet-item {
      display: block;
      border: solid 1px #e8e8e8;
      margin-bottom: 20px;

      img {
        display: block;
        width: 100%;
        height: 192px;
      }

      p {
        height: 105px;
        margin: 10px;
        text-align: justify;
        line-height: 26px;
        color: #333333;
      }
    }
  }

  .page-box {
    margin: 30px auto;
    text-align: center;
  }
}
</style>