<template>
  <div class="bx-content  index-box">
    <div class="flex align-center justify-between flex-wrap">
      <div class="left-box margin-bottom-sm padding-sm">
        <router-link to="/login" class="flex align-center index-user padding-lr" v-if="!isLogin">
          <img src="../../assets/img/headimg.png" alt="">
          <span class="margin-left-sm">立即登录</span>
        </router-link>
        <router-link to="/home/user" class="flex align-center index-user padding-lr" v-else>
          <img :src="headimg" alt="">
          <span class="margin-left-sm">{{ name }}</span>
        </router-link>
        <div class="user-nav">
          <div class="ks-box">快速入口</div>
          <div class="user-list flex align-center justify-between flex-wrap">
            <div class="user-item" @click="toPath(1)">
              <img src="../../assets/img/u1.png" alt="">
              <p>我有技术</p>
            </div>
            <div class="user-item" @click="toPath(2)">
              <img src="../../assets/img/u2.png" alt="">
              <p>专家认证</p>
            </div>
            <div class="user-item" @click="toPath(3)">
              <img src="../../assets/img/u3.png" alt="">
              <p>活动报名</p>
            </div>
            <div class="user-item" @click="toPath(4)">
              <img src="../../assets/img/u4.png" alt="">
              <p>我有需求</p>
            </div>
            <div class="user-item" @click="toPath(5)">
              <img src="../../assets/img/u5.png" alt="">
              <p>企业认证</p>
            </div>
            <div class="user-item" @click="toPath(6)">
              <img src="../../assets/img/u6.png" alt="">
              <p>消息通知</p>
            </div>
          </div>
        </div>
      </div>
      <div class="center-box margin-bottom-sm">
        <div class="flex align-center justify-between index-mode-title">
          <span>会员风采</span>
          <router-link to="/home/exhibit_expert" class="index-more">
            查看更多 <i class="iconfont icongengduoleft"></i>
          </router-link>
        </div>
        <div class="fc-list">
          <router-link :to="'/home/exhibit_expert_detail?id='+item.id" class="flex align-center fc-item"
                       v-for="(item,index) in demeanor" :key="index">
            <img :src="item.obj_pic_path" alt="" :onerror="morenlogo">
            <div>
              <h3 class="ovHide">{{ item.title }}</h3>
              <p class="ovHide3">{{ item.exhibit_info }}</p>
            </div>
          </router-link>
        </div>
      </div>
      <div class="right-box margin-bottom-sm">
        <div class="flex align-center justify-between index-mode-title">
          <span>技术需求</span>
          <router-link to="/home/techneed" class="index-more">
            查看更多 <i class="iconfont icongengduoleft"></i>
          </router-link>
        </div>
        <div class="need-list">
          <router-link :to="'/home/techneed_detail?id='+item.sha1" class="flex align-center need-item"
                       v-for="(item,index) in demand" :key="index">
            <div><i class="iconfont iconleft"></i>
              <p class="ovHide">{{ item.title }}</p></div>
            <span class="ovHide">{{ item.need_type | need_type }}</span>
          </router-link>

        </div>
      </div>
      <div class="left-box2">
        <div class="flex align-center justify-between index-mode-title">
          <span>专家展示</span>
          <router-link to="/home/expert" class="index-more">
            查看更多 <i class="iconfont icongengduoleft"></i>
          </router-link>
        </div>
        <div class="zj-list">
          <router-link :to="'/home/expertDetail?id='+item.id" class="flex align-center zj-item"
                       v-for="(item ,index) in expert" :key="index">
            <img :src="item.obj_pic_path" alt="" :onerror="morenzhuanjia">
            <div>
              <p class="ovHide">姓名：{{ item.exhibit_obj }}</p>
              <p class="ovHide">专家职称：{{ item.exhibit_detail.专家职称 }}</p>
              <p class="ovHide2">研究方向：{{ item.exhibit_detail.研究方向 }}</p>
            </div>
          </router-link>
        </div>
      </div>
      <div class="center-box2">
        <div class="flex align-center justify-between index-mode-title">
          <span>会议活动</span>
          <router-link to="/home/activity" class="index-more">
            查看更多 <i class="iconfont icongengduoleft"></i>
          </router-link>
        </div>
        <router-link :to="'/home/activity_detail?id='+item.sha1" class="meet-item" v-for="(item ,index) in meet"
                     :key="index">
          <img :src="item.banner_pic_path" alt="" :onerror="morenhuiyi">
          <p class="ovHide4" v-html="item.introduction"></p>
        </router-link>
      </div>
      <div class="right-box2">
        <div class="flex align-center justify-between index-mode-title">
          <span>最新技术</span>
          <router-link to="/home/exhibit_technology" class="index-more">
            查看更多 <i class="iconfont icongengduoleft"></i>
          </router-link>
        </div>
        <div class="need-list">
          <router-link :to="'/home/exhibit_technology_detail?id='+item.id" class="flex align-center need-item"
                       v-for="(item ,index) in newest" :key="index">
            <div><i class="iconfont iconleft"></i>
              <p class="ovHide">{{ item.title }}</p></div>
            <span class="ovHide">{{ item.sub_exhibit_type | sub_exhibit_type }}</span>
          </router-link>

        </div>
      </div>
    </div>
    <div class="cuihua-title"></div>
    <div class="ch-list flex align-start justify-between flex-wrap">
      <div class="ch-item">
        <div class="ch-title flex align-center justify-between">
          <div class="left-text">化工及医药中间体</div>
          <div class="right-tab flex align-center justify-between">
            <span v-for="(item,index) in ch1Tab" :key="index" :class="{active:ch1nav === index}"
                  @click="ch1nav = index">{{ item }}</span>

          </div>
        </div>
        <div class="ch-list">
          <a v-for="(item,index) in ch1List" :key="index" :href="item.url" class="item-link" target="_blank">
            <p class="ovHide"><i class="iconfont iconleft"></i>{{ item.title }}</p>
            <span>[{{ item.time }}]</span>
          </a>

        </div>
        <div class="cuihua-more-box">
          <router-link to="/home/catalysis?type=1" class="cuihua-more">
            查看更多 <i class="iconfont icongengduoleft"></i>
          </router-link>
        </div>

      </div>
      <div class="ch-item">
        <div class="ch-title flex align-center justify-between">
          <div class="left-text">先进催化材料</div>
          <div class="right-tab flex align-center justify-between">
            <span v-for="(item,index) in ch2Tab" :key="index" :class="{active:ch2nav === index}"
                  @click="ch2nav = index">{{ item }}</span>
          </div>
        </div>
        <div class="ch-list">
          <a v-for="(item,index) in ch2List" :key="index" :href="item.url" class="item-link" target="_blank">
            <p class="ovHide"><i class="iconfont iconleft"></i>{{ item.title }}</p>
            <span>[{{ item.time }}]</span>
          </a>

        </div>
        <div class="cuihua-more-box">
          <router-link to="/home/catalysis?type=2" class="cuihua-more">
            查看更多 <i class="iconfont icongengduoleft"></i>
          </router-link>
        </div>

      </div>
      <div class="ch-item">
        <div class="ch-title flex align-center justify-between">
          <div class="left-text">石油炼制催化</div>
          <div class="right-tab flex align-center justify-between">
            <span v-for="(item,index) in ch3Tab" :key="index" :class="{active:ch3nav === index}"
                  @click="ch3nav = index">{{ item }}</span>
          </div>
        </div>
        <div class="ch-list">
          <a v-for="(item,index) in ch3List" :key="index" :href="item.url" class="item-link" target="_blank">
            <p class="ovHide"><i class="iconfont iconleft"></i>{{ item.title }}</p>
            <span>[{{ item.time }}]</span>
          </a>

        </div>
        <div class="cuihua-more-box">
          <router-link to="/home/catalysis?type=3" class="cuihua-more">
            查看更多 <i class="iconfont icongengduoleft"></i>
          </router-link>
        </div>

      </div>
      <div class="ch-item">
        <div class="ch-title flex align-center justify-between">
          <div class="left-text">专用化学品催化</div>
          <div class="right-tab flex align-center justify-between">
            <span v-for="(item,index) in ch4Tab" :key="index" :class="{active:ch4nav === index}"
                  @click="ch4nav = index">{{ item }}</span>
          </div>
        </div>
        <div class="ch-list">
          <a v-for="(item,index) in ch4List" :key="index" :href="item.url" class="item-link" target="_blank">
            <p class="ovHide"><i class="iconfont iconleft"></i>{{ item.title }}</p>
            <span>[{{ item.time }}]</span>
          </a>

        </div>
        <div class="cuihua-more-box">
          <router-link to="/home/catalysis?type=4" class="cuihua-more">
            查看更多 <i class="iconfont icongengduoleft"></i>
          </router-link>
        </div>

      </div>
      <div class="ch-item">
        <div class="ch-title flex align-center justify-between">
          <div class="left-text">煤催化转化</div>
          <div class="right-tab flex align-center justify-between">
            <span v-for="(item,index) in ch5Tab" :key="index" :class="{active:ch5nav === index}"
                  @click="ch5nav = index">{{ item }}</span>
          </div>
        </div>
        <div class="ch-list">
          <a v-for="(item,index) in ch5List" :key="index" :href="item.url" class="item-link" target="_blank">
            <p class="ovHide"><i class="iconfont iconleft"></i>{{ item.title }}</p>
            <span>[{{ item.time }}]</span>
          </a>

        </div>
        <div class="cuihua-more-box">
          <router-link to="/home/catalysis?type=5" class="cuihua-more">
            查看更多 <i class="iconfont icongengduoleft"></i>
          </router-link>
        </div>

      </div>
      <div class="ch-item">
        <div class="ch-title flex align-center justify-between">
          <div class="left-text">生物催化</div>
          <div class="right-tab flex align-center justify-between">
            <span v-for="(item,index) in ch6Tab" :key="index" :class="{active:ch6nav === index}"
                  @click="ch6nav = index">{{ item }}</span>
          </div>
        </div>
        <div class="ch-list">
          <a v-for="(item,index) in ch6List" :key="index" :href="item.url" class="item-link" target="_blank">
            <p class="ovHide"><i class="iconfont iconleft"></i>{{ item.title }}</p>
            <span>[{{ item.time }}]</span>
          </a>

        </div>
        <div class="cuihua-more-box">
          <router-link to="/home/catalysis?type=6" class="cuihua-more">
            查看更多 <i class="iconfont icongengduoleft"></i>
          </router-link>
        </div>

      </div>
      <div class="ch-item">
        <div class="ch-title flex align-center justify-between">
          <div class="left-text">环境催化</div>
          <div class="right-tab flex align-center justify-between">
            <span v-for="(item,index) in ch7Tab" :key="index" :class="{active:ch7nav === index}"
                  @click="ch7nav = index">{{ item }}</span>
          </div>
        </div>
        <div class="ch-list">
          <a v-for="(item,index) in ch7List" :key="index" :href="item.url" class="item-link" target="_blank">
            <p class="ovHide"><i class="iconfont iconleft"></i>{{ item.title }}</p>
            <span>[{{ item.time }}]</span>
          </a>

        </div>
        <div class="cuihua-more-box">
          <router-link to="/home/catalysis?type=7" class="cuihua-more">
            查看更多 <i class="iconfont icongengduoleft"></i>
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

import {setLocalStore,subExhibitType,needType} from "@/tools/utils";
import congig from '@/config/index'

export default {
  name: "index",
  data() {
    return {
      isLogin: false,
      headimg: '',
      name: '',
      demeanor: [],
      demand: [],
      expert: [],
      meet: [],
      newest: [],
      morenlogo: 'this.src="' + require('../../assets/img/orgLogo.png') + '"',
      morenhuiyi: 'this.src="' + require('../../assets/img/huiyi.png') + '"',
      morenzhuanjia: 'this.src="' + require('../../assets/img/zhuanjia.png') + '"',
      ch1nav: -1,
      ch1Tab: [],
      ch1All: [],
      ch2nav: -1,
      ch2Tab: [],
      ch2All: [],
      ch3nav: -1,
      ch3Tab: [],
      ch3All: [],
      ch4nav: -1,
      ch4Tab: [],
      ch4All: [],
      ch5nav: -1,
      ch5Tab: [],
      ch5All: [],
      ch6nav: -1,
      ch6Tab: [],
      ch6All: [],
      ch7nav: -1,
      ch7Tab: [],
      ch7All: [],

      ch1List: [],
      ch2List: [],
      ch3List: [],
      ch4List: [],
      ch5List: [],
      ch6List: [],
      ch7List: [],


    }
  },
  created() {
    this.$emit('setIndex', 0)
    if (this.$store.state.user) {
      this.isLogin = true
      this.headimg = this.$store.state.user.headimg
      this.name = this.$store.state.user.nickname
    }
    this.init()
    // if (getLocalStore('csrftoken')) {
    this.getCh()
    // } else {
    //   this.getToken()
    // }

  },
  methods: {
    getToken() {
      this.$api.apiContent.getToken().then(res => {
        document.cookie = 'csrftoken=' + res.data.csrf_token + ";path=/;"
        setLocalStore('csrftoken', res.data.csrf_token)
        this.getCh()
      })
    },
    getCh() {
      this.getChuihua('#化工及医药中间体', '2029b847841a40f3cd0ba83f4718900e43a3bf4f', 1)
      this.getChuihua('#先进催化材料', '30e8357e8649391cf3736e68e0911fc43a4b1634', 2)
      this.getChuihua('#石油炼制催化行业', '7c2b3df2a86da3abe2bedeb400d8f2efe95f7aae', 3)
      this.getChuihua('#专用化学品催化', '0d59324163eb1c51929dbba1187eebbda333c7cf', 4)
      this.getChuihua('#煤催化转化', '452faef483c90971ac117a3efac0c24adfb7596c', 5)
      this.getChuihua('#生物催化', 'afabb46e4f8d9308e04e5566ff0e1a24dcedb30d', 6)
      this.getChuihua('#环境催化', 'eb5000e9b86d076d71485913c7192cf630e885fe', 7)
    },
    //  获取催化
    getChuihua(str, sha1, num) {
      this.$api.apiContent.getChuihua({
        keyword: str,
        report_sha1: sha1,
        access_key: congig.access_key,
        access_secret: congig.access_secret
      }).then(res => {
        let list = res.data.category_list[0].children
        list.map(item => {
          let arr = item.name.split("/");
          //  num 1-7 表示催化情报1-7个栏目
          if (num === 1) {
            if (arr[1] === '技术动态' || arr[1] === '行业动态' || arr[1] === '专家视角') {
              this.ch1All.push(item)
              this.ch1Tab.push(arr[1])
            }

          }
          if (num === 2) {
            if (arr[1] === '技术动态' || arr[1] === '行业动态' || arr[1] === '专家视角') {
              this.ch2All.push(item)
              this.ch2Tab.push(arr[1])
            }
          }
          if (num === 3) {
            if (arr[1] === '技术动态' || arr[1] === '行业动态' || arr[1] === '专家视角') {
              this.ch3All.push(item)
              this.ch3Tab.push(arr[1])
            }
          }
          if (num === 4) {
            if (arr[1] === '技术动态' || arr[1] === '行业动态' || arr[1] === '专家视角') {
              this.ch4All.push(item)
              this.ch4Tab.push(arr[1])
            }
          }
          if (num === 5) {
            if (arr[1] === '技术动态' || arr[1] === '行业动态' || arr[1] === '专家视角') {
              this.ch5All.push(item)
              this.ch5Tab.push(arr[1])
            }
          }
          if (num === 6) {
            if (arr[1] === '技术动态' || arr[1] === '行业动态' || arr[1] === '专家视角') {
              this.ch6All.push(item)
              this.ch6Tab.push(arr[1])
            }
          }
          if (num === 7) {
            if (arr[1] === '技术动态' || arr[1] === '行业动态' || arr[1] === '专家视角') {
              this.ch7All.push(item)
              this.ch7Tab.push(arr[1])
            }
          }
        })
        if (num === 1) {
          this.ch1nav = 0
        }
        if (num === 2) {
          this.ch2nav = 0
        }
        if (num === 3) {
          this.ch3nav = 0
        }
        if (num === 4) {
          this.ch4nav = 0
        }
        if (num === 5) {
          this.ch5nav = 0
        }
        if (num === 6) {
          this.ch6nav = 0
        }
        if (num === 7) {
          this.ch7nav = 0
        }

      })
    },
    getChList(num, index) {
      let data = {
        keyword: '',
        report_sha1: '',
        category_filter: '',
        order_by: 'rank',
        page: 1,
        page_size: 10,
        access_key: '3bf3f95a1f68af8275f87b85c1444c9e50b1',
        access_secret: '28132b5357a39af97286d5a916a65d5f356a'
      }
      if (num === 1) {
        data.keyword = '#化工及医药中间体'
        data.report_sha1 = '2029b847841a40f3cd0ba83f4718900e43a3bf4f'
        data.category_filter = JSON.stringify([this.ch1All[this.ch1nav].name])
      }
      if (num === 2) {
        data.keyword = '#先进催化材料'
        data.report_sha1 = '30e8357e8649391cf3736e68e0911fc43a4b1634'
        data.category_filter = JSON.stringify([this.ch2All[this.ch2nav].name])
      }
      if (num === 3) {
        data.keyword = '#石油炼制催化行业'
        data.report_sha1 = '7c2b3df2a86da3abe2bedeb400d8f2efe95f7aae'
        data.category_filter = JSON.stringify([this.ch3All[this.ch3nav].name])
      }
      if (num === 4) {
        data.keyword = '#专用化学品催化'
        data.report_sha1 = '0d59324163eb1c51929dbba1187eebbda333c7cf'
        data.category_filter = JSON.stringify([this.ch4All[this.ch4nav].name])
      }
      if (num === 5) {
        data.keyword = '#煤催化转化'
        data.report_sha1 = '452faef483c90971ac117a3efac0c24adfb7596c'
        data.category_filter = JSON.stringify([this.ch5All[this.ch5nav].name])
      }
      if (num === 6) {
        data.keyword = '#生物催化'
        data.report_sha1 = 'afabb46e4f8d9308e04e5566ff0e1a24dcedb30d'
        data.category_filter = JSON.stringify([this.ch6All[this.ch6nav].name])
      }
      if (num === 7) {
        data.keyword = '#环境催化'
        data.report_sha1 = 'eb5000e9b86d076d71485913c7192cf630e885fe'
        data.category_filter = JSON.stringify([this.ch7All[this.ch7nav].name])
      }

      this.$api.apiContent.getChList(data).then(res => {
        res.data.doc_data.doc_list.map(item => {
          item.time = item.publish_time.slice(0, 10)
        })
        if (num === 1) {
          if (index === this.ch1nav) {
            this.ch1List = res.data.doc_data.doc_list
          }
        }
        if (num === 2) {
          if (index === this.ch2nav) {
            this.ch2List = res.data.doc_data.doc_list
          }
        }
        if (num === 3) {
          if (index === this.ch3nav) {
            this.ch3List = res.data.doc_data.doc_list
          }
        }
        if (num === 4) {
          if (index === this.ch4nav) {
            this.ch4List = res.data.doc_data.doc_list
          }
        }
        if (num === 5) {
          if (index === this.ch5nav) {
            this.ch5List = res.data.doc_data.doc_list
          }
        }
        if (num === 6) {
          if (index === this.ch6nav) {
            this.ch6List = res.data.doc_data.doc_list
          }
        }
        if (num === 7) {
          if (index === this.ch7nav) {
            this.ch7List = res.data.doc_data.doc_list
          }
        }
      })
    },

    //  导航
    toPath(num) {
      if (num === 1) {
        this.$router.push('/home/demand')
      } else if (num === 2) {
        if (this.isLogin) {
          this.$router.push('/home/addExpert')
        } else {
          this.$router.push({
            path:'/login',
            query:{
              redirect:'/home/addExpert'
            }
          })
        }
      } else if (num === 3) {
        this.$router.push('/home/meet')
      } else if (num === 4) {
        if (this.isLogin) {
          this.$router.push('/home/addNeed?type=-1')
        } else {
          this.$router.push({
            path:'/login',
            query:{
              redirect:'/home/addNeed?type=-1'
            }
          })
        }
      } else if (num === 5) {
        if (this.isLogin) {
          this.$router.push('/home/addOrg')
        } else {
          this.$router.push({
            path:'/login',
            query:{
              redirect:'/home/addOrg'
            }
          })
        }
      } else if (num === 6) {
        if (this.isLogin) {
          this.$router.push('/home/user')
        } else {
          this.$router.push({
            path:'/login',
            query:{
              redirect:'/home/user'
            }
          })
        }
      }
    },
    init() {
      //  风采
      this.$api.apiContent.demeanorList({
        exhibit_type: 2
      })
          .then(res => {
            this.demeanor = res.results.slice(0, 4)
            this.demeanor.map(item => {
              let str = item.exhibit_info.replace(/'/g, '"')
              try {
                item.exhibit_info = JSON.parse(str).公司介绍
              } catch (err) {
                item.exhibit_info = str
              }
              let list = item.url.split("/");
              item.id = list[list.length - 2]
            })
          })
      // 技术需求
      this.$api.apiContent.demandList({
        count:14
      })
          .then(res => {
            this.demand = res.results.slice(0, 12)
          })
      //  专家展示
      this.$api.apiContent.expertList({
        exhibit_type: 1
      })
          .then(res => {
            this.expert = res.results.slice(0, 2)
            this.expert.map(item => {
              let str = item.exhibit_detail.replace(/'/g, '"')
                item.exhibit_detail = JSON.parse(str)

              let list = item.url.split("/");
              item.id = list[list.length - 2]
            })
          })
      //  会议
      this.$api.apiContent.meetList()
          .then(res => {
            this.meet = res.results.slice(0, 1)
          })
      //  最新技术
      this.$api.apiContent.newestList({
        exhibit_type: 3
      })
          .then(res => {
            this.newest = res.results.slice(0, 9)
            this.newest.map(item => {
              let list = item.url.split("/");
              item.id = list[list.length - 2]
            })
          })
    }
  },
  watch: {
    ch1nav() {
      if (this.ch1nav !== -1) {
        this.getChList(1, this.ch1nav)
      }
    },
    ch2nav() {
      if (this.ch2nav !== -1) {
        this.getChList(2, this.ch2nav)
      }
    },
    ch3nav() {
      if (this.c3nav !== -1) {
        this.getChList(3, this.ch3nav)
      }
    },
    ch4nav() {
      if (this.ch4nav !== -1) {
        this.getChList(4, this.ch4nav)
      }
    },
    ch5nav() {
      if (this.ch5nav !== -1) {
        this.getChList(5, this.ch5nav)
      }
    },
    ch6nav() {
      if (this.ch6nav !== -1) {
        this.getChList(6, this.ch6nav)
      }
    },
    ch7nav() {
      if (this.ch7nav !== -1) {
        this.getChList(7, this.ch7nav)
      }
    }
  },
  filters: {
    sub_exhibit_type(num) {
      let str = subExhibitType(num)
      return str
    },
    need_type(num) {
      let str = needType(num)
      return str

    },
  }
}
</script>

<style scoped lang="scss">
.index-box {
  padding: 15px 0;

  .left-box {
    width: 304px;
    height: 416px;
    padding-top: 30px;
    background-color: #e0efff;
    border: solid 1px #aaccef;

    .index-user {
      margin-bottom: 15px;

      img {
        display: block;
        width: 80px;
        height: 80px;
        border-radius: 60px;
      }

      span {
        font-size: 18px;
        color: #333;
      }
    }

    .user-nav {
      .ks-box {
        line-height: 40px;
        font-size: 16px;
        text-align: center;
        color: #333333;
        font-weight: 500;
        margin-bottom: 15px;
        background: url(../../assets/img/title.png) no-repeat center;
      }

      .user-list {
        .user-item {
          width: 74px;
          margin-bottom: 10px;
          cursor: pointer;

          img {
            display: block;
            width: 74px;
            height: 74px;
            background-color: #2882db;
            border-radius: 2px;
          }

          p {
            text-align: center;
            line-height: 36px;
          }
        }
      }
    }
  }

  .center-box {
    width: 414px;
    height: 416px;
    background-color: #ffffff;
    border: solid 1px #aaccef;

    .fc-list {
      padding: 10px;

      .fc-item {
        margin-bottom: 9px;
        &:hover{
          div {
            h3{
              color: #ffba39;
            }
            p{
              color: #ffba39;
            }
          }
        }
        img {
          display: block;
          width: 80px;
          height: 80px;
          margin-right: 12px;
          //background-color: #ffffff;
          //border: solid 1px #74b6ff;
        }

        div {
          flex: 1;
          overflow: hidden;

          h3 {
            color: #333333;
            line-height: 24px;
            margin-bottom: 5px;
            font-weight: 500;
          }

          p {
            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 18px;
            letter-spacing: 0px;
            color: #666666;
          }
        }
      }
    }
  }

  .right-box {
    width: 458px;
    height: 416px;
    background-color: #ffffff;
    border: solid 1px #aaccef;

    .need-list {
      padding: 10px;

      .need-item {
        line-height: 37px;
        &:hover{
          div {
            h3{
              color: #ffba39;
            }
            p{
              color: #ffba39;
            }
          }
        }
        div {
          width: 330px;
          display: flex;
          align-items: center;
          overflow: hidden;

          i {
            color: #2882db;
          }
        }

        span {
          overflow: hidden;
          flex: 1;
          text-align: right;
          color: #2882db;
        }
      }
    }
  }

  .left-box2 {
    width: 304px;
    height: 328px;
    border: solid 1px #aaccef;

    .zj-list {
      padding: 30px 10px;

      .zj-item {
        margin-bottom: 30px;
        &:hover{
          div {
            h3{
              color: #ffba39;
            }
            p{
              color: #ffba39;
            }
          }
        }
        img {
          display: block;
          width: 100px;
          height: 100px;
          border-radius: 100px;
          margin-right: 12px;
          background-color: #ffffff;
        }

        div {
          flex: 1;
          overflow: hidden;

          p {
            font-size: 14px;
            font-weight: 500;
            font-stretch: normal;
            line-height: 24px;
            letter-spacing: 0px;
            color: #666666;
          }
        }
      }
    }
  }

  .center-box2 {
    width: 414px;
    height: 328px;
    background-color: #ffffff;
    border: solid 1px #aaccef;

    .meet-item {
      display: block;
      padding: 10px;
      img {
        display: block;
        width: 390px;
        height: 158px;
        margin: 0 auto 10px;
      }

      p {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 26px;
        letter-spacing: 0px;
        color: #333333;
        &:hover{
          color: #ffba39;
        }
      }
    }
  }

  .right-box2 {
    width: 458px;
    height: 328px;
    background-color: #ffffff;
    border: solid 1px #aaccef;

    .need-list {
      padding: 10px;

      .need-item {
        line-height: 30px;
        &:hover{
          div {
            h3{
              color: #ffba39;
            }
            p{
              color: #ffba39;
            }
          }
        }
        div {
          width: 330px;
          display: flex;
          align-items: center;
          overflow: hidden;

          i {
            color: #2882db;
          }
        }

        span {
          overflow: hidden;
          flex: 1;
          text-align: right;
          color: #2882db;
        }
      }
    }
  }

  .index-mode-title {
    width: 100%;
    height: 34px;
    background-color: #e0efff;
    padding: 0 15px;

    span {
      font-size: 16px;
      font-weight: 500;
    }

    .index-more {
      display: flex;
      align-items: center;
      height: 34px;
      font-size: 12px;
      color: #2882db;

      i {
        color: #2882db;

      }
    }
  }

  .cuihua-title {
    height: 56px;
    margin: 46px auto;
    background: url(../../assets/img/cuihua.png) no-repeat center;
  }

  .ch-list {
    .ch-item {
      width: 575px;

      margin-bottom: 40px;

      .ch-title {
        height: 36px;
        border-bottom: 2px solid #ccc;

        .left-text {
          height: 38px;
          line-height: 36px;
          font-size: 18px;
          letter-spacing: 1px;
          color: #333333;
          border-bottom: 2px solid #2882db;
        }

        .right-tab {
          span {
            font-size: 14px;
            letter-spacing: 1px;
            color: #333;
            margin-left: 5px;
            cursor: pointer;

            &.active {
              color: #ffba39;
            }
          }
        }
      }

      .ch-list {
        height: 320px;
        padding: 10px 0 5px;

        .item-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 30px;
          &:hover{
            p{
              color: #ffba39;
            }
            span{
              color: #ffba39;
            }
          }
          p {
            width: 450px;
            //padding-left: 10px;
            position: relative;

            i {
              color: #2882db;
              position: relative;
              top: 1px;
            }

            //&:before {
            //  position: absolute;
            //  top: 6px;
            //  left: 0;
            //  content: '';
            //  width: 5px;
            //  height: 5px;
            //  border-radius: 5px;
            //  background: #8ac4ff;
            //}
          }

          span {
            flex: 1;
            text-align: right;
          }
        }
      }

      .cuihua-more-box {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .cuihua-more {
          font-size: 12px;
          color: #2882db;
        }
      }
    }
  }
}
</style>