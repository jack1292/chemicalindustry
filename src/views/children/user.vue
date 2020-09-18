<template>
  <div class="user ">
    <div class="bx-content flex align-center">
      <div class="user-card">
        <img :src="headimg" alt="">
        <h3>个人资料</h3>
        <p>昵称 <span></span>{{ name }}</p>
        <p>性别 <span></span>{{ sex }}</p>
        <p>微信 <span></span>{{ wx }}</p>
        <router-link to="/home/addExpert" class="uset-info">
          {{expert?'修改专家信息':'登记专家信息'}}
        </router-link>
        <router-link to="/home/addOrg" class="uset-info">
          {{company?'修改企业信息':'登记企业信息'}}

        </router-link>
      </div>
      <div class="uset-list flex align-center justify-between flex-wrap">
        <div class="list-item">
          <div class="list-title">
            <span>已申请</span>
          </div>
          <div class="item-list-box">
            <router-link v-for="(item,index) in myApply" :key="index" :to="'/home/userApply?id='+item.sha1" class="item-box-item flex align-center justify-between">
              <p class="ovHide">{{ item.title }}</p>
              <span>{{ item.creation_time }}</span>
            </router-link>
            <p class="nodata-tips" v-if="myApply.length === 0">暂无数据</p>
          </div>
        </div>

        <div class="list-item">
          <div class="list-title">
            <span>已发布</span>
          </div>
          <div class="item-list-box">
            <router-link v-for="(item,index) in myServer" :key="index" :to="'/home/userPost?id='+item.sha1" class="item-box-item flex align-center justify-between">
              <p class="ovHide">{{ item.title }}</p>
              <span>{{ item.creation_time }}</span>
            </router-link>
            <p class="nodata-tips" v-if="myServer.length === 0">暂无数据</p>
          </div>
        </div>
        <div class="list-item">
          <div class="list-title">
            <span>已服务</span>
          </div>
          <div class="item-list-box">
            <router-link v-for="(item,index) in myPost" :key="index" :to="'/home/userServer?id=' +item.sha1" class="item-box-item flex align-center justify-between">
              <p class="ovHide">{{ item.title }}</p>
              <span>{{ item.creation_time }}</span>
            </router-link>
            <p class="nodata-tips" v-if="myPost.length === 0">暂无数据</p>
          </div>
        </div>
        <div class="list-item">
          <div class="list-title">
            <span>新消息</span>
          </div>
          <div class="item-list-box">
            <div v-for="(item,index) in myMsg" :key="index" class="item-box-item flex align-center justify-between" @click="showMesssage(item.body_text)">
              <p class="ovHide">{{ item.body_text }}</p>
              <span>{{ item.creation_time }}</span>
            </div>
            <p class="nodata-tips" v-if="myMsg.length === 0">暂无数据</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      headimg: this.$store.state.user.headimg,
      name: this.$store.state.user.nickname,
      sex: this.$store.state.user.gender,
      wx: this.$store.state.user.nickname,
      company_authentication: this.$store.state.user.company_authentication,
      expert_authentication: this.$store.state.user.expert_authentication,
      userInfo:'',
      company: '',
      expert: '',

      myApply:[],
      myPost:[],
      myServer:[],
      myMsg:[],

    }
  },
  created() {
    if (!this.$store.state.user) {
      this.$router.push('/login')
    }
    this.$emit('setIndex', -1)
    this.init()
  },
  methods: {
    async init(){
      this.$api.apiContent.userinfos({
        id: this.$store.state.user.sha1
      }).then(res => {
        this.userInfo = res.result;
        if(this.company_authentication)
        this.getcompany()
        this.getexpert()
      })
      this.$api.apiContent.demandList({
        tech_type:1
      })
          .then(res => {
            this.myApply = res.results
            this.myApply.map(item=>{
              item.creation_time = this.$tools.ZHDate(new Date(item.creation_time))
            })
          })
      this.$api.apiContent.demandList({
        tech_type:2
      })
          .then(res => {
            this.myPost = res.results
            console.log(this.myPost)
            this.myPost.map(item=>{
              item.creation_time = this.$tools.ZHDate(new Date(item.creation_time))
            })
          })
      this.$api.apiContent.demandList({
        tech_type:3
      })
          .then(res => {
            this.myServer = res.results
            this.myServer.map(item=>{
              item.creation_time = this.$tools.ZHDate(new Date(item.creation_time))
            })
          })
      this.$api.apiContent.messages({
        page:1
      })
          .then(res => {
            this.myMsg = res.results
            this.myMsg.map(item=>{
              item.creation_time = this.$tools.ZHDate(new Date(item.creation_time))
            })
          })
    },
    async getcompany() {
      try {
        this.$api.apiContent.getCompany({
          id:this.$store.state.user.sha1
        }).then(res=>{
          this.company = res
        })
      } catch (error) {
        console.log(error);
      }
    },
    async getexpert () {
      try {
        this.$api.apiContent.getExpert({
          id:this.$store.state.user.sha1
        }).then(res=>{
          this.expert = res
        })
      } catch (error) {
        console.log(error);
      }
    },



    showMesssage(str) {
      this.$alert(str, '最新消息', {
        confirmButtonText: '确定',
        callback: () => {
        }
      });
    }
  }
}
</script>

<style scoped lang="scss">
.user {
  padding: 20px 0;
  background: #f5f5f5;

  .user-card {
    width: 220px;
    min-height: 850px;
    margin-right: 20px;
    background: url(../../assets/img/userbg.jpg) #2882db no-repeat top center;
    background-size: 100%;

    img {
      display: block;
      width: 86px;
      height: 86px;
      border-radius: 86px;
      margin: 30px auto;
      border: 3px solid #fff;
    }

    h3 {
      width: 220px;
      height: 40px;
      text-align: left;
      line-height: 40px;
      padding: 0 15px;
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      background: rgba(1, 1, 1, .2);
    }

    p {
      padding: 0 15px;
      line-height: 40px;
      color: #fff;

      span {
        padding: 0 20px;
      }
    }

    .uset-info {
      display: block;
      width: 147px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      margin: 20px auto;
      color: #fff;
      font-size: 14px;
      border: solid 1px #ffffff;
    }
  }

  .uset-list {
    flex: 1;
    min-height: 850px;
    padding: 25px 25px 0;
    background: #fff;

    .list-item {
      width: 446px;
      margin-bottom: 20px;

      .list-title {
        height: 40px;
        margin-bottom: 10px;
        border-bottom: 1px solid #ccc;

        span {
          display: block;
          width: 60px;
          line-height: 39px;
          text-align: center;
          font-size: 16px;
          color: #2882db;
          border-bottom: 1px solid #2882db;
        }
      }

      .item-list-box {
        width: 446px;
        height: 340px;
        padding: 10px;
        border: solid 1px #aaccef;
        overflow-y: scroll;

        .item-box-item {
          cursor: pointer;

          p {
            flex: 1;
            height: 32px;
            line-height: 32px;
            padding-left: 10px;
            position: relative;

            &::before {
              position: absolute;
              top: 13px;
              left: 0;
              content: '';
              width: 5px;
              height: 5px;
              border-radius: 5px;
              background: #2882db;
            }
          }

          span {
            width: 100px;
            text-align: right;
            margin-left: 20px;
          }
        }
      }
    }
    .nodata-tips{
      line-height: 36px;
      text-align: center;
    }
  }
}
</style>