<template>
  <div class="demand bx-content">
    <div class="page-title">
      <i class="iconfont iconleft"></i>当前位置：首页 > 催化情报
    </div>

    <div class="saixuan flex align-center padding-lr-sm">
      <span>{{ typeTitle }}：</span>
      <el-radio-group v-model="checkList" @change="handleChange">
        <el-radio v-for="(item,index) in checkArr" :key="index" :label="item.name">{{ item.label }}</el-radio>
      </el-radio-group>
    </div>
    <div class="demand-list">
      <a :href="item.url" target="_blank" v-for="(item,index) in chList" :key="index" :to="'/home/demandDetail?id='+item.sha1"
                   class="demand-item flex align-start justify-between">
        <div>
          <h3 class="ovHide"><i class="iconfont iconleft"></i>{{ item.title }}</h3>
          <p>{{ item.publish_time }} <i style="padding-left: 5px;">{{ item.author }}</i></p>
        </div>
      </a>
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
  name: "catalysis",
  inject:['reload'],
  data() {
    return {
      type: '',
      typeTitle: '',
      checkList: '',
      pagetotal: 1,
      currentPage: 1,
      noData: false,
      typeAll: [
        {name: '化工及医药中间体', sha1: '2029b847841a40f3cd0ba83f4718900e43a3bf4f'},
        {name: '先进催化材料', sha1: '30e8357e8649391cf3736e68e0911fc43a4b1634'},
        {name: '石油炼制催化行业', sha1: '7c2b3df2a86da3abe2bedeb400d8f2efe95f7aae'},
        {name: '专用化学品催化', sha1: '0d59324163eb1c51929dbba1187eebbda333c7cf'},
        {name: '煤催化转化', sha1: '452faef483c90971ac117a3efac0c24adfb7596c'},
        {name: '生物催化', sha1: 'afabb46e4f8d9308e04e5566ff0e1a24dcedb30d'},
        {name: '环境催化', sha1: 'eb5000e9b86d076d71485913c7192cf630e885fe'}
      ],
      checkArr: [],
      chList:[],

    }
  },
  created() {
    this.$emit('setIndex', 6)
    this.type = Number(this.$route.query.type) - 1
    this.typeTitle = this.typeAll[this.type].name
    if (!this.$store.state.user) {
      this.$router.push('/login')
    }
    this.getChiose()
  },
  methods: {


    handleChange() {
      this.currentPage = 1
      this.chList = []
      this.getList(this.currentPage)

    },
    handleCurrentChange() {
      this.chList = []
      this.getList(this.currentPage)
    },
    getList(page) {

      let data = {
        keyword: '#' + this.typeAll[this.type].name,
        report_sha1: this.typeAll[this.type].sha1,
        category_filter: JSON.stringify([this.checkList]),
        order_by: 'rank',
        page: page,
        page_size: 10,
      }
      this.$api.apiContent.getChList(data)
          .then(res => {
            if (res.data.doc_data.doc_list === 0) {
              this.noData = true
              this.pagetotal = 0
            } else {
              this.noData = false
            }
            this.chList = res.data.doc_data.doc_list
            this.pagetotal = res.data.doc_data.total_counts
          })
    },

    getChiose() {
      this.$api.apiContent.getChuihua({
        keyword: this.typeAll[this.type].name,
        report_sha1: this.typeAll[this.type].sha1
      }).then(res => {
        res.data.category_list[0].children.map(item => {
          item.label = item.name.split("/")[1]
        })
        this.checkArr = res.data.category_list[0].children
        this.checkList = this.checkArr[0].name
        this.getList(this.currentPage)
      })
    }
  },
  watch:{
    $route() {
      this.reload()
    }
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