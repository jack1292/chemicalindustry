<template>
  <div class="expert bx-content">
    <div class="page-title">
      <i class="iconfont iconleft"></i>当前位置：首页 > 专家展示
    </div>
    <div class="expert-list flex align-center">
      <el-row :gutter="20" style="width: 100%">
        <el-col :span="6" v-for="(item ,index) in expert" :key="index">
          <router-link :to="'/home/expertDetail?id='+item.id" class="expert-item">
            <img :src="item.obj_pic_path" alt="" :onerror="morenzhuanjia">
            <h3>{{ item.exhibit_obj }}</h3>
            <p class="ovHide"><b>专家职称</b>：{{ item.exhibit_detail.专家职称 }}</p>
            <p class="active ovHide2"><b>研究方向</b>：{{ item.exhibit_detail.研究方向 }}</p>
            <div>
              查看详情
            </div>
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
  name: "expert",
  data() {
    return {
      morenzhuanjia: 'this.src="' + require('../../assets/img/zhuanjia.png') + '"',
      currentPage: 1,
      pagetotal: 1,
      expert: [],
      noData: false,
    }
  },
  created() {
    this.$emit('setIndex', 4)
    this.getList(this.currentPage)
  },
  methods: {
    handleCurrentChange() {
      this.getList(this.currentPage)
    },
    getList(page) {
      this.$api.apiContent.expertList({
        exhibit_type: 1,
        page: page
      }).then(res => {
        if (res.count === 0) {
          this.noData = true
        } else {
          this.noData = false
        }
        this.expert = res.results
        this.pagetotal = res.count
        this.expert.map(item => {
          let str = item.exhibit_detail.replace(/'/g, '"')
          item.exhibit_detail = JSON.parse(str)
          let list = item.url.split("/");
          item.id = list[list.length - 2]
        })
      })
    }
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
        background-color: #fff;
        //box-shadow: 0px 1px 1px 0px rgba(89, 182, 252, 0.13);
        border: solid 3px #ffffff;
        margin: 0 auto 20px;
      }

      h3 {
        text-align: center;
        font-size: 18px;
        font-weight: 500;
      }

      p {
        padding: 0 15px;
        text-align: left;
        line-height: 20px;

        &.active {
          height: 40px;
        }

        b {
          font-weight: 500;
        }
      }

      div {
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