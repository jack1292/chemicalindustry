<template>
  <div class="fencai bx-content">
    <div class="page-title">
      <i class="iconfont iconleft"></i>当前位置：首页 > 会员风采
    </div>
    <div class="fc-list">
      <router-link v-for="(item,index) in demeanor" :key="index" :to="'/home/exhibit_expert_detail?id='+item.id" class="fc-item flex align-center" >
        <img :src="item.obj_pic_path" alt="" :onerror="morenlogo">
        <div>
          <h3 class="ovHide">{{ item.title }}</h3>
          <p class="ovHide3">{{ item.exhibit_info }}</p>
        </div>
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
export default {
  name: "exhibit_expert",
  data() {
    return {
      currentPage:1,
      pagetotal:1,
      demeanor:[],
      noData:false,
      morenlogo:'this.src="' + require('../../assets/img/orgLogo.png') + '"'
    }
  },
  created() {
    this.$emit('setIndex', 1)
    this.getList(this.currentPage)
  },
  methods:{
    handleCurrentChange(){
      this.getList(this.currentPage)
    },
    getList(page){
      this.$api.apiContent.demeanorList({
        exhibit_type: 2,
        page:page
      }).then(res => {
        if(res.count === 0){
          this.noData = true
        }else{
          this.noData = false
        }
        this.demeanor = res.results
        this.pagetotal = res.count
        this.demeanor.map(item => {
          let str = item.exhibit_info.replace(/'/g, '"')
          try {
            item.exhibit_info = JSON.parse(str).公司介绍
          } catch (err) {
            item.exhibit_info = str
          }
          let list = item.url.split("/");
          item.id = list[list.length - 2]
        })
      })
    }
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
      &:hover{
        div{
          h3{
            color: #ffba39;
          }
        }

      }
      img {
        width: 138px;
        height: 138px;
        margin-right: 25px;
        background-color: #ffffff;
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