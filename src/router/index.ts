import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import routes from './routes'


const router = new Router({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
