// import { createApp } from 'vue'
import Vue from 'vue'
import router from './router/'
import store from './store/'
import '@/assets/styles/main.scss'

// 全局配置项
import './config/'
// 组件
import './components/'
// 全局服务
import './services/'
// 模型轉化插件
import "reflect-metadata";
import '@/assets/fonts/iconfont.js'
Vue.config.productionTip = false

document.body.classList.add('TeleOneUI')
import { PageNotFoundComponent } from '@/views/pageNotFound';
export const vm: Vue = new Vue({
  components: {
    notFound: PageNotFoundComponent,
  },
  router,
  store,
  template: require('./main.html'),
  created() { },
}).$mount('#app')
