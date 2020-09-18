<template>
  <div class="meet bx-content">
    <div class="page-title">
      <i class="iconfont iconleft"></i>当前位置：首页 > 会议活动 > {{ title }}
    </div>
    <div class="meet-detail">
      <div class="meet-info">
        <img :src="banner_pic_path" alt="" :onerror="morenhuiyi">
        <div class="meet-some">
          <h3 class="meet-title">{{ title }}</h3>
          <p class="meet-label"><span>会议时间：</span>{{ start_time }}</p>
          <p class="meet-label"><span>会议规模：</span>{{ max_nb_registries }}</p>
          <p class="meet-label"><span>会议类别：</span>{{ activity_type|activity_type }}</p>
          <p class="meet-label"><span>会议主办单位：</span>{{ organizer }}</p>
          <div class="bm-box">
            <el-button class="bm-btn active" v-if="!registered" @click="toBm">我要报名</el-button>
            <el-button class="bm-btn" v-else>已报名</el-button>
          </div>
        </div>
      </div>
      <div class="meet-desc-title">会议概况</div>
      <p class="meed-desc" v-html=" introduction">

      </p>
      <div class="meet-desc-title" v-if="activity_pic_path">活动安排</div>
      <p class="meed-desc"  v-if="activity_pic_path">
        <img :src="activity_pic_path" alt="" :onerror="morenhuiyi">
      </p>
      <div class="meet-desc-title" v-if="location">会议地点</div>
      <p class="meed-desc" v-if="location">
        {{ location }}
      </p>
      <div class="meet-desc-title">报名人数</div>
      <p class="meed-desc">
        {{ nb_registries }}
      </p>
    </div>
  </div>
</template>

<script>
import {activityType} from "@/tools/utils";

export default {
  name: "activity_detail",
  data() {
    return {
      isLogin: false,
      company_authentication: false,
      activity_pic_path: '',
      banner_pic_path:'',
      activity_type: '',
      introduction: '',
      max_nb_registries: '',
      nb_registries: '',
      organizer: '',
      location: '',
      registered: '',
      sha1: '',
      start_time: '',
      title: '',
      url: '',
      morenhuiyi:'this.src="' + require('../../assets/img/huiyi.png') + '"',
    }
  },
  created() {
    this.$emit('setIndex', 3)
    this.isLogin = this.$store.state.user ? true : false
    if (this.isLogin) {
      this.company_authentication = this.$store.state.user.company_authentication
    }
    this.getDetail()
  },
  methods: {
    toBm() {
      try {
        const user = this.$store.state.user
        if (!user) {
           this.$message.error("请先登录");
          this.$router.push({
            path:'/login',
            query:{
              redirect:location.pathname + location.search
            }
          })
          return
        }
        if (user && !this.company_authentication) {
          return this.$message.error("请先在个人中心完成企业认证");
        }
        if (this.max_nb_registries <= this.nb_registries) {
          return this.$message.error("超过最大报名人数");
        }
        this.$api.apiContent.activityregistries({
          id: this.$route.query.id,
          activity_sha1: this.url,
          attendee_sha1: this.baseApi + 'userinfos/' + this.$store.state.user.sha1 + '/'
        }).then(() => {
          this.$message.success('报名成功')
          this.getDetail()
        }).catch(() => {
          this.$message.error("报名失败");
        })
      } catch (error) {
        console.log(error)
        this.$message.error("报名失败");
      }
    },
    getDetail() {
      this.$api.apiContent.meetDetail({
        id: this.$route.query.id,
      }).then(res => {
        this.activity_pic_path = res.activity_pic_path === 'http://www.tmlsystem.cn/orgmem/media/activities/default.jpg'?'': res.activity_pic_path
        this.activity_type = res.activity_type
        this.banner_pic_path = res.banner_pic_path
        this.introduction = res.introduction
        this.max_nb_registries = res.max_nb_registries
        this.nb_registries = res.nb_registries
        this.organizer = res.organizer
        this.registered = res.registered
        this.location = res.location
        this.sha1 = res.sha1
        this.start_time = this.$tools.ZHDate(new Date(res.start_time), 1)
        this.title = res.title
        this.url = res.url
      })
    }
  },
  filters: {
    activity_type(num) {

      let str = activityType(num)
      return str
    },
  }
}
</script>

<style scoped lang="scss">
.meet {
  .meet-detail {
    border: solid 1px #aaccef;
    padding: 25px;
    margin-bottom: 25px;

    .meet-info {
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        display: block;
        width: 440px;
        margin-right: 36px;
      }

      .meet-some {
        flex: 1;
        position: relative;
        .meet-title {
          font-size: 24px;
          line-height: 150%;
          margin-bottom: 20px;
        }

        .meet-label {
          line-height: 36px;
          color: #999999;

          span {
            color: #333;
          }
        }
      }

      .bm-box {
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .bm-btn {
          width: 138px;
          height: 40px;
          color: #333;
          border: #e4e4e4;
          background-color: #e4e4e4;
          border-radius: 2px;

          &.active {
            border: #ff5304;
            color: #fff;
            background-color: #ff5304;
          }
        }
      }
    }


    .meet-desc-title {
      display: block;
      width: 82px;
      height: 40px;
      font-size: 20px;
      line-height: 40px;
      text-align: center;
      margin: 30px 0 15px;
      font-weight: bold;
      color: #2882db;
      border-bottom: 2px solid #2882db;
    }
  }
}
</style>