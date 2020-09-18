<template>
  <div class="demand bx-content">
    <div class="page-title">
      <i class="iconfont iconleft"></i>当前位置：首页 > 最新技术 > {{ title }}
    </div>
    <div class="demand-detail">
      <div class="demand-detail-title">
        <h3>{{ title }}</h3>
      </div>
      <div class="detail-info">
        <div class="info-item">
          <span class="label">成果名称：</span>{{ title }}
        </div>
        <div class="info-item">
          <span class="label">技术介绍：</span>{{ exhibit_info }}
        </div>
        <div class="info-item">
          <span class="label">所获奖项：</span>{{ awards }}
        </div>
        <div class="info-item">
          <span class="label">所属类型：</span>{{sub_exhibit_type | sub_exhibit_type}}
        </div>
        <div class="info-item">
          <span class="label">供应方：</span>{{ exhibit_obj }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {subExhibitType} from "@/tools/utils";

export default {
  name: "exhibit_technology_detail",
  data() {
    return {
      awards: '',
      creation_time: '',
      exhibit_info: '',
      exhibit_obj: '',
      exhibit_type: '',
      obj_pic_path: '',
      sub_exhibit_type: '',
      title: '',
    }
  },
  created() {
    this.$emit('setIndex', 5)
    this.getDetail()
  },
  methods: {
    getDetail() {
      this.$api.apiContent.newestDetail({
        id: this.$route.query.id,
      }).then(res => {
        this.awards = res.awards
        this.creation_time = this.$tools.ZHDate(new Date(res.creation_time))
        this.exhibit_info = res.exhibit_info
        this.exhibit_obj = res.exhibit_obj
        this.exhibit_type = res.exhibit_type
        this.obj_pic_path = res.obj_pic_path
        this.sub_exhibit_type = res.sub_exhibit_type
        this.title = res.title
      })
    }
  },
  filters: {
    sub_exhibit_type(num) {
      let str = subExhibitType(num)
      return str
    }
  }
}
</script>

<style scoped lang="scss">
.demand {
  .demand-detail {
    border: solid 1px #aaccef;
    padding: 25px;
    margin-bottom: 25px;

    .demand-detail-title {
      padding: 20px 0;
      border-bottom: 1px solid #ccc;

      h3 {
        font-size: 22px;
        font-weight: bold;
        line-height: 44px;
        color: #333333;
        text-align: center;
        margin-bottom: 15px;
      }

      p {
        text-align: center;

        span {
          padding: 0 30px;
        }
      }
    }

    .detail-info {
      margin-top: 30px;
      padding: 0 50px;

      .info-item {
        margin-bottom: 10px;

        .label {
          font-size: 16px;
          font-weight: bold;
        }
      }
    }

    .ican {
      display: block;
      width: 138px;
      height: 40px;
      margin: 20px auto;
      color: #fff;
      border: 1px solid #00b4d8;
      background-color: #00b4d8;
      border-radius: 4px;
    }
  }
}
</style>