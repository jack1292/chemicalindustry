import axios from 'axios'
import config from '../config/index'
import qs from 'qs'
import store from '../store/index'
import {getLocalStore} from '../tools/utils.js';

axios.defaults.withCredentials = true;//让ajax携带cookie

const service = axios.create({
  baseURL: config.urlStr,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    'X-CSRFToken': getLocalStore('csrftoken')
  }
})

let Axios = async (url, data, method = 'post', isQs = true) => {
  return new Promise((resolve, reject) => {
    const options = {
      url,
      method
    }
    if (method.toLowerCase() === 'get') {
      options.params = data
    } else if (method.toLowerCase() === 'delete') {
      options.url = options.url + '/' + data.params
    } else if (method.toLowerCase() === 'put') {
      options.url = options.url + '/' + data.params
    } else if (method.toLowerCase() === 'post') {
      if (isQs) {
        data = qs.stringify(data)
      }
      options.data = data
    }
    service(options)
      .then(res => {
        if (Number(res.data.status) === 200) {
          resolve(res.data)
        } else if (res.data.status === 3 || res.data.status === 900 || res.data.status === 901) {
          sessionStorage.clear()
          localStorage.clear()
          store.user = null
          window.location.href = '/login'
        } else {
          reject(res.data)
        }
      })
      .catch(error => {
        console.log(error)
      })
  })
}
export default Axios