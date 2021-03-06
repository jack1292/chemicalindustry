// import store from '../store/index'

const homeRouter = [
  {
    path: '',
    redirect: 'index'
  },
  {
    path: 'index',
    meta: {
      title: '首页',
    },
    component: () => import('../views/children/index'),

  },{
    path: 'exhibit_expert',
    meta: {
      title: '会员风采',
    },
    component: () => import('../views/children/exhibit_expert'),

  },{
    path: 'exhibit_expert_detail',
    meta: {
      title: '会员风采详情',
    },
    component: () => import('../views/children/exhibit_expert_detail'),

  },{
    path: 'techneed',
    meta: {
      title: '技术需求',
    },
    component: () => import('../views/children/techneed'),

  },{
    path: 'techneed_detail',
    meta: {
      title: '技术需求详情',
    },
    component: () => import('../views/children/techneed_detail'),

  },{
    path: 'activity',
    meta: {
      title: '会议活动',
    },
    component: () => import('../views/children/activity'),

  },{
    path: 'activity_detail',
    meta: {
      title: '会议活动详情',
    },
    component: () => import('../views/children/activity_detail'),

  },{
    path: 'expert',
    meta: {
      title: '专家展示',
    },
    component: () => import('../views/children/expert'),

  },{
    path: 'expertDetail',
    meta: {
      title: '专家详情',
    },
    component: () => import('../views/children/expertDetail'),

  },{
    path: 'exhibit_technology',
    meta: {
      title: '最新技术',
    },
    component: () => import('../views/children/exhibit_technology'),

  },{
    path: 'exhibit_technology_detail',
    meta: {
      title: '最新技术详情',
    },
    component: () => import('../views/children/exhibit_technology_detail'),

  },{
    path: 'catalysis',
    meta: {
      title: '催化情报',
    },
    component: () => import('../views/children/catalysis'),

  },{
    path: 'user',
    meta: {
      title: '个人中心',
    },
    component: () => import('../views/children/user'),

  },{
    path: 'userApply',
    meta: {
      title: '已申请',
    },
    component: () => import('../views/children/userApply'),

  },{
    path: 'userPost',
    meta: {
      title: '已发布',
    },
    component: () => import('../views/children/userPost'),

  },{
    path: 'userServer',
    meta: {
      title: '已服务',
    },
    component: () => import('../views/children/userServer'),

  },{
    path: 'userGongying',
    meta: {
      title: '供应商详情',
    },
    component: () => import('../views/children/supplier'),

  },{
    path: 'addOrg',
    meta: {
      title: '加入企业',
    },
    component: () => import('../views/children/addOrg'),

  },{
    path: 'addExpert',
    meta: {
      title: '加入专家库',
    },
    component: () => import('../views/children/addExpert'),

  },{
    path: 'addNeed',
    meta: {
      title: '技术需求发布',
    },
    component: () => import('../views/children/addNeed'),

  }
]
export default homeRouter