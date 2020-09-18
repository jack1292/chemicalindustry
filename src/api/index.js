import vue from 'vue'
import axios from './axios'

const apiContent = {
  //  会员风采列表
  demeanorList: (data) => {
    return axios('/orgmem/exhibits', data, 'GET')
  },
  //  会员风采详情
  demeanorDetail: (data) => {
    return axios('/orgmem/exhibits/' + data.id + '/', {}, 'GET')
  },
  //  技术需求列表
  demandList: (data) => {
    return axios('/orgmem/techneeds', data, 'GET')
  },
  //  技术需求详情
  demandDetail: (data) => {
    return axios('/orgmem/techneeds/' + data.id + '/', {}, 'GET')
  },
  //  接洽技术
  jqDemand: (data) => {
    return axios('/orgmem/techsupplies/', data, 'POST')
  },
  //  h获取供应商
  getGys: (data) => {
    return axios('/orgmem/techsupplies/', data, 'GET')
  },
  // 同意或者拒绝接洽
  suerJq: (data) => {
    return axios('/orgmem/techsupplies/' + data.sha1+ '/', data, 'PUT')
  },
  //  发布技术需求
  publishDemand: (data) => {
    return axios('/orgmem/techneeds/', data, 'POST')
  },
  //  专家展示列表
  expertList: (data) => {
    return axios('/orgmem/exhibits', data, 'GET')
  },
  //  专家展示详情
  expertDetail: (data) => {
    return axios('/orgmem/exhibits/' + data.id + '/', {}, 'GET')
  },
  //  会议活动列表
  meetList: (data) => {
    return axios('/orgmem/activities', data, 'GET')
  },
  //  会议活动详情
  meetDetail: (data) => {
    return axios('/orgmem/activities/' + data.id + '/', {}, 'GET')
  },
  //  会议报名
  activityregistries: (data) => {
    return axios('/orgmem/activityregistries/', data, 'POST')
  },
  //  最新技术列表
  newestList: (data) => {
    return axios('/orgmem/exhibits', data, 'GET')
  },
  //  最新技术详情
  newestDetail: (data) => {
    return axios('/orgmem/exhibits/' + data.id + '/', {}, 'GET')
  },
  // 登录
  login: (data) => {
    return axios('/orgmem/wx_login/', data, 'POST')
  },
  //  获取用户信息
  userinfos: (data) => {
    return axios('/orgmem/userinfos/' + data.id + '/', {}, 'GET')
  },
  //  消息
  messages: (data) => {
    return axios('/orgmem/messages/', data, 'GET')
  },
  //  查询专家信息
  getExpert: (data) => {
    return axios('/orgmem/userexpertinfos/' + data.id + '/', {}, 'GET')
  },
  //  登记专家信息
  addExpert: (data) => {
    return axios('/orgmem/userexpertinfos/', data, 'POST')
  },
  //  更新专家信息
  editExpert: (data) => {
    return axios('/orgmem/userexpertinfos/' + data.id + '/', data, 'PUT')
  },
  //  查询企业信息
  getCompany: (data) => {
    return axios('/orgmem/usercompanyinfos/' + data.id + '/', {}, 'GET')
  },
  //  登记企业信息
  addCompany: (data) => {
    return axios('/orgmem/usercompanyinfos/', data, 'POST')
  },
  //  更新企业信息
  editCompany: (data) => {
    return axios('/orgmem/usercompanyinfos/' + data.id + '/', data, 'PUT')
  },

  //  获取token
  getToken: (data) => {
  return axios('/apps/get_csrftoken/',data, 'GET')
},
  //  获取催化
  getChuihua: (data) => {
    return axios('/orgmem/search_category_list/', data, 'get',true)
  },
  getChList: (data) => {
    return axios('/orgmem/search_news_list/', data, 'get',true)
  },
}
const api = {
  apiContent
}
vue.prototype.$api = api