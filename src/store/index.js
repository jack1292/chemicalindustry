import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Sha:'',
  },
  mutations: {
    keepSha(state,obj){
      console.log()
      state.Sha = obj.sha
    },
  },
  actions: {
  },
  modules: {
  }
})
