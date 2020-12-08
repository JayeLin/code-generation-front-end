import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)

/** 重写路由的push方法 */
const routerPush: any = Router.prototype.push
Router.prototype.push = function push(location: any) {
  return routerPush.call(this, location).catch((error: any) => error)
}

const router = new Router({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const status = !!sessionStorage.getItem('token')
  if (!status && to.name !== 'login') {
    // 没有登录，定向到登录页
    next()
  } else {
    // 登录页可以直接进入
    next()
  }
})

export default router
