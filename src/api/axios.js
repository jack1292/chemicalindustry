import axios from 'axios'
import config from '../config/index'
import qs from 'qs'
import {getLocalStore} from '../tools/utils.js';

axios.defaults.withCredentials = true;//让ajax携带cookie

const service = axios.create({
  baseURL: config.urlStr,
  // headers: {
  //   'Content-Type': 'application/json;charset=UTF-8'
  // }
})

let Axios = async (url, data, method = 'post', formdata=false, isQs = true,) => {
  return new Promise((resolve, reject) => {
    axios.defaults.headers['X-CSRFToken'] = getLocalStore('csrftoken')
    if(formdata){
      axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }else{
      axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'
    }
    const options = {
      url,
      method
    }
    if (method.toLowerCase() === 'get') {
      options.params = data
    } else if (method.toLowerCase() === 'delete') {
      options.url = options.url + '/' + data.params
    } else if (method.toLowerCase() === 'put') {
      if (isQs) {
        data = JSON.stringify(data)
      }
      options.data = data
    } else if (method.toLowerCase() === 'post') {
      if (isQs && !formdata) {
        data = JSON.stringify(data)
      }else{
        data = qs.stringify(data)
      }
      options.data = data
    }
    service(options)
      .then(res => {
        resolve(res.data)
      })
      .catch(error => {
        if (error.response && error.response.status == 400 && error.response.data) {
          console.log("请求失败数据",error.response.data)
          resolve(error.response)
        } else {
          reject()
        }
      })
  })
}
export default Axios