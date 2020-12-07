// import { createApp } from 'vue'
import Vue from 'vue'
import router from './router'
import store from './store'
import '../src/assets/styles/main.scss'
// 引入 ElementUI
// import './plugins/element.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 全局配置项
import './config/'

// 全局服务
import './services/'

Vue.config.productionTip = false

export const vm: Vue = new Vue({
  router,
  store,
  template: require('./main.html')
}).$mount('#app')
