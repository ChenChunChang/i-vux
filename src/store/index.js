import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import sys from './module/sys'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {

  },
  actions: {
  },
  modules: {
    user,
    sys
  }
})
