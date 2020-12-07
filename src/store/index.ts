import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { keepalive } from "./keepalive";
import { user } from "./user";
const store: any = new Vuex.Store({
  state: {
    token: null,
    dictionary: null,
    notFoundPage: false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    keepalive,
    user
  }
})
export default store
