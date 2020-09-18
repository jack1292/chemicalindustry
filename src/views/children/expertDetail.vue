<template>
  <div class="expert bx-content">
    <div class="page-title">
      <i class="iconfont iconleft"></i>当前位置：首页 > 专家展示 > {{ exhibit_obj }}
    </div>
    <div class="expert-detail flex align-start">
      <img :src="obj_pic_path" alt="" :onerror="morenzhuanjia" class="zj-logo">
      <div class="zj-info">
        <div class="zj-name">
          <h3 >{{ exhibit_obj }}</h3>
          <p><span>出生年月：{{ title.出生年月 }}</span><span>民族：{{ title.民族 }}</span></p>
          <p><span>工作单位：{{ title.工作单位 }}</span><span>籍贯：{{ title.籍贯 }}</span></p>
        </div>
        <div class="zj-desc">
          <p class="zj-desc-tit" >
            <span>专家职称</span>
          </p>
          <div class="zj-desc-info">{{ exhibit_detail.专家职称 }} </div>
        </div>
        <div class="zj-desc">
          <p class="zj-desc-tit" v-if="exhibit_detail.研究方向">
            <span>研究方向</span>
          </p>
          <div class="zj-desc-info">{{ exhibit_detail.研究方向 }} </div>
        </div>
        <div class="zj-desc" v-if="exhibit_detail.主要成果">
          <p class="zj-desc-tit">
            <span>主要成果</span>
          </p>
          <div class="zj-desc-info">{{ exhibit_detail.主要成果}}</div>
        </div>
        <div class="zj-desc" v-if="awards">
          <p class="zj-desc-tit">
            <span>获奖信息</span>
          </p>
          <div class="zj-desc-info">{{awards}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "expertDetail",
  data() {
    return {
      awards: '',
      creation_time: '',
      exhibit_info: '',
      exhibit_detail:'',
      exhibit_obj: '',
      exhibit_type: '',
      obj_pic_path: '',
      sub_exhibit_type: '',
      title: '',
      url: '',
      morenzhuanjia:'this.src="' + require('../../assets/img/zhuanjia.png') + '"',
    }
  },
  created() {
    this.$emit('setIndex', 4)
    this.getDetail()
  },
  methods:{
    getDetail(){
      this.$api.apiContent.expertDetail({
        id: this.$route.query.id,
      }).then(res => {
        this.awards = res.awards
        this.creation_time = res.creation_time
        this.exhibit_info = res.exhibit_info
        this.exhibit_obj = res.exhibit_obj
        this.exhibit_type = res.exhibit_type
        this.obj_pic_path = res.obj_pic_path
        this.sub_exhibit_type = res.sub_exhibit_type
        this.title = res.title
        this.url = res.url

        let str = res.exhibit_detail.replace(/'/g, '"')
        let str2 = res.title.replace(/'/g, '"')
          this.exhibit_detail = JSON.parse(str)
          this.title = JSON.parse(str2)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.expert{
  .expert-detail{
    border: solid 1px #aaccef;
    padding: 40px 0 0 50px;
    margin-bottom: 25px;
    .zj-logo{
      display: block;
      width: 122px;
      height: 122px;
      border-radius: 122px;
      margin-right: 35px;
    }
    .zj-info{
      flex: 1;
      .zj-name{
        padding-bottom: 20px;
        margin-bottom: 36px;
        border-bottom: 1px solid #e8e8e8;
        h3{
          font-size: 18px;
          margin-bottom: 15px;
        }
        p{
          display: flex;
          line-height: 30px;
          align-items: center;
          margin-bottom: 10px;
          span{
            display: block;
            width: 50%;
          }
        }

      }
      .zj-desc{
        margin-bottom: 30px;
        .zj-desc-tit{
          height: 40px;
          line-height: 40px;
          border-bottom: 1px solid #e8e8e8;
          margin-bottom: 10px;
          span{
            display: block;
            width: 73px;
            font-size: 18px;
            font-weight: bold;
            line-height: 39px;
            border-bottom: 1px solid #2882db;
          }
        }
        .zj-desc-info{
          line-height: 150%;
          margin-right: 30px;
        }
      }
    }
  }
}
</style>