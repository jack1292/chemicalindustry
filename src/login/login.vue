<template>
  <div class="login">
    <div class="bx-content flex align-center justify-between login-top">
      <img src="../assets/img/loginogo1.png" alt="">
      <router-link to="/home" class="back">
        返回首页
      </router-link>
    </div>

    <div class="login-box">
      <h3>微信登录</h3>
      <a :href="'https://open.weixin.qq.com/connect/qrconnect?appid=wxd40c824e1d698373&redirect_uri=https://www.tmlsystem.cn/omsite/login?redirect='+redirect+'&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect'"
         class="login-icon-wx" target="_parent">
        <img src="../assets/img/wx.png" alt="">
      </a>
      <p>请点击微信扫码登录</p>
    </div>


    <div class="login-footer">
      <p>主办单位：化工行业生产力促进中心</p>
      <p>地址：北京市朝阳区亚运村安慧里四区16号楼中国化工大厦721室 邮政编码：100723</p>
      <p>联系电话：010-84885052/010-84885721</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      code: '',
      redirect:'',
    }
  },
  created() {
    if(this.$route.query.redirect){
      this.redirect = this.$route.query.redirect.indexOf('/omsite')===-1?this.$route.query.redirect:this.$route.query.redirect.slice(7,this.$route.query.redirect.length)
    }
    if (this.$route.query.code) {
      this.code = this.$route.query.code
      this.login()
    }
  },
  methods: {
    login() {
      const loading = this.$loading({
        lock: true,
        text: '登录中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      this.$api.apiContent.login({
        code: this.code,
        nickname: "",
        headimg: ""
      }).then(res => {
        loading.close();
        if (Number(res.ret) === 0) {
          let userinfo =  res.data
          document.cookie = 'sessionid=' + res.data.sessionid + ";path=/;"
          this.$api.apiContent.userinfos({
            id: userinfo.sha1
          }).then(t => {
            userinfo.user_id = t.user_id
            userinfo.sha2 = t.sha1
            this.$store.state.user = userinfo
            if(!this.redirect){
              setTimeout(() => {
                this.$router.push('/home')
              }, 500)
            }else{
              setTimeout(() => {
                this.$router.push(this.redirect)
              }, 500)
            }

          })
        } else {
          this.$message.error(res.info)
          if(!this.redirect){
            setTimeout(() => {
              this.$router.push('/home')
            }, 500)
          }else{
            setTimeout(() => {
              this.$router.push(this.redirect)
            }, 500)
          }
        }
      }).catch(() => {
        loading.close();
      })
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: url(../assets/img/loginbg.jpg) #fff no-repeat top center;
  background-size: cover;

  .login-top {
    padding-top: 30px;

    img {
      display: block;
    }

    .back {
      display: block;
      width: 112px;
      height: 42px;
      text-align: center;
      line-height: 40px;
      color: #fff;
      border-radius: 2px;
      border: solid 1px #ffffff;
    }
  }

  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 462px;
    //height: 500px;
    background-color: #ffffff;
    border-radius: 3px;
    padding: 40px;

    h3 {
      font-weight: normal;
      font-size: 20px;
    }

    img {
      display: block;
      margin: 40px auto;
    }

    p {
      text-align: center;
    }

  }

  .login-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100px;
    padding: 20px 0;
    background-color: #ffffff;

    p {
      line-height: 20px;
      text-align: center;
    }
  }
}
</style>