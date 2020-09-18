<template>
  <div class="demand bx-content">
    <div class="page-title">
      <i class="iconfont iconleft"></i>当前位置：首页 > 已申请 > {{ title }}
    </div>
    <div class="demand-detail">
      <div class="demand-detail-title">
        <h3>{{ title }}</h3>
        <p>
          <span>发布时间：{{ creation_time }}</span>
        </p>
      </div>
      <div class="detail-info">
        <div class="info-item">
          <span class="label">需求名称：</span>{{ title }}
        </div>
        <div class="info-item">
          <span class="label">需求概述：</span>{{ description }}
        </div>
        <div class="info-item">
          <span class="label">性能要求：</span>{{ requirements }}
        </div>
        <div class="info-item">
          <span class="label">其他要求：</span>{{ other_requirements }}
        </div>
        <div class="info-item">
          <span class="label">获得方式：</span>{{ tech_source }}
        </div>
        <div class="info-item">
          <span class="label">需求分类：</span>{{ need_type | need_type }}
        </div>
        <div class="info-item" v-if="org_name">
          <span class="label">需求单位：</span>{{ org_name }}
        </div>
        <div class="info-item" v-if="contact_person">
          <span class="label">需求联系：</span>{{ contact_person }}
        </div>
        <div class="info-item" v-if="contact_phone">
          <span class="label">联系电话：</span>{{ contact_phone }}
        </div>
        <div class="info-item" v-if="contact_email">
          <span class="label">电子邮箱：</span>{{ contact_email }}
        </div>

        <div class="info-item" v-if="org_info">
          <span class="label">单位简介：</span>{{ org_info }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {needType} from "@/tools/utils";

export default {
  name: "userApply",
  data() {
    return {
      creation_time: '',
      description: '',
      other_requirements: '',
      registered: '',
      requirements: '',
      sha1: '',
      tech_source: '',
      need_type: '',
      title: '',
      url: '',
      org_name: '',
      contact_person: '',
      contact_phone: '',
      contact_email: '',
      org_info: '',
    }
  },
  created() {
    if (!this.$store.state.user) {
      this.$router.push('/login')
      return
    }
    this.$emit('setIndex', -1)
    this.getDetail()
  },
  methods: {
    getDetail() {
      this.$api.apiContent.demandDetail({
        id: this.$route.query.id,
      }).then(res => {
        this.creation_time = this.$tools.ZHDate(new Date(res.creation_time))
        this.description = res.description
        this.other_requirements = res.other_requirements
        this.registered = res.registered
        this.requirements = res.requirements
        this.sha1 = res.sha1
        this.tech_source = res.tech_source
        this.need_type = res.need_type
        this.title = res.title
        this.url = res.url
        this.org_name = res.org_name
        this.contact_person = res.contact_person
        this.contact_phone = res.contact_phone
        this.contact_email = res.contact_email
        this.org_info = res.org_info
      })
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

      .info-item {
        margin-bottom: 10px;

        .label {
          font-size: 16px;
          font-weight: 500;
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