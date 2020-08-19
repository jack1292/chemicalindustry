import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './api/index'
import Element from 'element-ui'
import './tools/index'
import '../theme/index.css'
import './assets/css/reset.css'
import './assets/font/iconfont.css'
import  plugin from './plugin/index'

Vue.use(Element)
Vue.use(plugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
