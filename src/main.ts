// import { createApp } from 'vue'
import Vue from 'vue'
import router from './router'
import store from './store'
// // 引入 ElementUI
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/icon.css'
// import 'element-ui/lib/theme-chalk/index.css'
// // import './styles.scss'
// Vue.use(ElementUI)

Vue.config.productionTip = false

export const vm: Vue = new Vue({
  router,
  store,
  template: require('./main.html')
}).$mount('#app')
