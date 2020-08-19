import vue from 'vue'
import axios from './axios'

const apiContent = {
  //  密码登录接口
  passLogin: (data) => {
    return axios('/activities', data,'GET')
  }
}
const api = {
  apiContent
}
vue.prototype.$api = api