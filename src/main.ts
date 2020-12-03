// import { createApp } from 'vue'
import Vue from 'vue'
import router from './router'
import store from './store'

// createApp(App).use(store).use(router).mount('#app')
Vue.config.productionTip = false

export const vm: Vue = new Vue({
  router,
  store,
  template: require('./main.html'),
}).$mount('#app')
