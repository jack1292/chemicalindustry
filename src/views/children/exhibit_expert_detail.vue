<template>
  <div class="fencai bx-content">
    <div class="page-title">
      <i class="iconfont iconleft"></i>当前位置：首页 > 会员风采 > {{title}}
    </div>
    <div class="fc-info">
      <div class="org-title flex align-center">
        <img :src="obj_pic_path" alt="" :onerror="morenlogo">
        <h2>{{title}}</h2>
      </div>
      <div class="fc-info-label">公司介绍</div>
      <div class="fc-info-desc">
        <p>{{ exhibit_info.公司介绍}}</p>
      </div>
      <div class="fc-info-label">产品展示</div>
      <div class="fc-info-pro">
        <p v-for="(item,index) in exhibit_info.产品展示" :key="index">{{ item }}</p>
        <img :src="exhibit_pic_path" alt="" style="max-width: 100%;display: block;" v-if="exhibit_pic_path">
      </div>
      <div class="fc-info-label">联系我们</div>
      <div class="fc-info-call">
        <p>联系电话：<b>{{ exhibit_obj.联系电话 }}</b></p>
        <p>厂址：{{ exhibit_obj.厂址 }}</p>
        <p>办公室：{{ exhibit_obj.办公室 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "exhibit_expert_detail",
  data() {
    return {
      awards: '',
      creation_time: '',
      exhibit_info: '',
      exhibit_obj: '',
      exhibit_type: '',
      exhibit_pic_path:'',
      obj_pic_path: '',
      sub_exhibit_type: '',
      title: '',
      url: '',
      morenlogo:'this.src="' + require('../../assets/img/orgLogo.png') + '"'
    }
  },
  created() {
    this.$emit('setIndex', 1)
    this.getDetail()
  },
  methods:{
    getDetail(){
      this.$api.apiContent.demeanorDetail({
        id: this.$route.query.id,
      }).then(res => {
        this.awards = res.awards
        this.creation_time = res.creation_time
        this.exhibit_info = JSON.parse(res.exhibit_info.replace(/'/g,'"'))
        this.exhibit_obj = JSON.parse(res.exhibit_obj.replace(/'/g,'"'))
        this.exhibit_type = res.exhibit_type
        this.obj_pic_path = res.obj_pic_path
        this.exhibit_pic_path = res.exhibit_pic_path
        this.sub_exhibit_type = res.sub_exhibit_type
        this.title = res.title
        this.url = res.url
      })
    }
  }
}
</script>

<style scoped lang="scss">
.fc-info {
  border: solid 1px #aaccef;
  padding: 39px 25px;
  margin-bottom: 25px;

  .org-title {
    padding-bottom: 30px;
    border-bottom: 1px solid #cdcdcd;

    img {
      display: block;
      width: 138px;
      height: 138px;
      background-color: #ffffff;
      box-shadow: 0px 3px 7px 0px rgba(25, 141, 255, 0.35);
    }

    h2 {
      margin-left: 25px;
      flex: 1;
      font-size: 28px;
      line-height: 150%;
      color: #333333;
    }
  }

  .fc-info-label {
    width: 112px;
    height: 36px;
    margin: 40px 0 26px;
    text-align: center;
    line-height: 36px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    background-color: #2882db;
  }

  .fc-info-desc {
    p {
      //text-indent: 28px;
      margin-bottom: 15px;
      line-height: 22px;
      letter-spacing: 0px;
      color: #333333;
    }
  }

  .fc-info-pro {
    p {
      margin-bottom: 15px;
      line-height: 22px;
      letter-spacing: 0px;
      color: #333333;
    }

    img {
      display: block;
      max-width: 100%;
    }
  }

  .fc-info-call {
    p {
      margin-bottom: 15px;
      line-height: 22px;
      letter-spacing: 0px;
      color: #333333;
      &:last-child{
        margin-bottom: 0;
      }
      b {
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
}
</style>