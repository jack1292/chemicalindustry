import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRouter from './home'
import {setLocalStore} from '../tools/utils.js';

Vue.use(VueRouter)

const routers = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: () => {
        return '/home'
      }
    },
    {
      path: '/home',
      component: () => import('../views/Home'),
      children: homeRouter,
    },
    {
      path: '/login', // 登录
      component: () => import('../login/login'),
      meta: {
        title: '登录',
        needLogin: false // 是否需要登录才能访问
      }
    }
  ],
  // 指定该钩子函数，返回坐标值即可
  scrollBehavior (to, from, savedPosition) {
    console.log(to, from, savedPosition)
    return { x: 0, y: 0 }
  }
})

let _cookie = {
  _get: function (name) {
    let _cookie = document.cookie;
    let _start = _cookie.indexOf(name + "=");
    if (_start != -1) {
      _start += name.length + 1;
      let _end = _cookie.indexOf(";", _start);
      if (_end == -1) {
        _end = _cookie.length;
      }
      return unescape(_cookie.substring(_start, _end));
    }
    return "";
  }
};

routers.beforeEach((to, from, next) => {
  let token = _cookie._get('csrftoken')
  document.cookie = 'csrftoken=' + token + ";path=/;"
  setLocalStore('csrftoken', token)
  next()
})

export default routers
