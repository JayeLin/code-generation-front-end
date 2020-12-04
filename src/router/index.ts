import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)

const router = new Router({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
