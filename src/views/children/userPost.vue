<template>
  <div class="demand bx-content">
    <div class="page-title">
      <i class="iconfont iconleft"></i>当前位置：首页 > 已发布 > {{ title }}
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
        <div class="info-item" v-if="org_name ">
          <span class="label">需求单位：</span>{{ org_name }}
        </div>
        <div class="info-item" v-if="contact_person ">
          <span class="label">需求联系：</span>{{ contact_person }}
        </div>
        <div class="info-item" v-if="contact_phone ">
          <span class="label">联系电话：</span>{{ contact_phone }}
        </div>
        <div class="info-item" v-if="contact_email ">
          <span class="label">电子邮箱：</span>{{ contact_email }}
        </div>

        <div class="info-item" v-if="org_info ">
          <span class="label">单位简介：</span>{{ org_info }}
        </div>
        <div class="gys-box">
          <div class="gys-title"><span>供应商</span></div>

          <ul class="gys-list">
            <li class="active">
              <div>头像</div>
              <div class="active">姓名</div>
              <div>时间</div>
              <div>状态</div>
              <div>操作</div>
            </li>
            <li v-for="(item,index) in supplier_list" :key="index">
              <div><img src="../../assets/img/zhuanjia.png" alt=""></div>
              <div class="active">{{ item.supplier_name }}</div>
              <div>{{ item.creation_time }}</div>
              <div>{{ item.is_served === 0 ? '待确认接洽' : item.is_served === 1 ? '同意接洽' : '拒绝' }}</div>
              <div @click="viewExert(item.expert_id, item)">
                <span class="to-detail">查看详情</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {needType} from "@/tools/utils";

export default {
  name: "userPost",
  data() {
    return {
      morenzhuanjia: 'this.src="' + require('../../assets/img/zhuanjia.png') + '"',
      creation_time: '',
      description: '',
      other_requirements: '',
      registered: '',
      requirements: '',
      published :'',
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
      supplier_list: []
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
    viewExert(id,info){
      this.$router.push({
        path:'/home/supplier',
        query: {
          id: id,
          info: JSON.stringify(info),
          demindid: this.$route.query.id
        },
      })
    },


    //  获取详情
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
        this.published = res.published
        this.org_name = res.org_name
        this.contact_person = res.contact_person
        this.contact_phone = res.contact_phone
        this.contact_email = res.contact_email
        this.org_info = res.org_info
        this.supplier_list = res.supplier_list
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
    padding: 25px 40px;
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
          font-weight: bold;
        }
      }
    }

    .gys-box {
      margin-top: 40px;

      .gys-title {
        height: 40px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;

        span {
          display: block;
          width: 62px;
          height: 40px;
          line-height: 40px;
          color: #2882db;
          font-size: 16px;
          text-align: center;
          border-bottom: 1px solid #2882db;
        }
      }

      .gys-list {
        border: 1px solid #2882db;
        border-bottom: 0;

        li {
          height: 40px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #2882db;

          &.active {
            background: rgba(40, 130, 219, .2);

            div {
              color: #2882db;
              font-size: 16px;
            }
          }

          div {
            width: 25%;
            padding: 0 15px;

            &.active {
              width: 25%;
            }

            &.caozuo {
              display: flex;
              align-items: center;
              justify-content: space-around;

              .caozuo-btn {
                width: 60px;
                height: 36px;
              }
            }

            img {
              display: block;
              width: 30px;
              height: 30px;
              margin: 5px 0;
            }

            .to-detail {
              display: block;
              color: #2882db;
            }

          }
        }
      }
    }

  }
}
</style>