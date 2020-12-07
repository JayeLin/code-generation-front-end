import router from '@/router'

const ctx = {
  get vm() {
    return router.app
  }
}

function alert() {
  const args = arguments
  // 提示內容必傳
  const msg = args[0]
  const title = typeof args[1] === 'string' ? args[1] : typeof args[1] === 'object' ? args[1].title : ''
  const color = typeof args[1] === 'object' ? args[1].type : typeof args[2] === 'object' ? args[2].type : 'primary'
  const callback = typeof args[1] === 'object' ? args[1].callback : typeof args[2] === 'object' ? args[2].callback : null
  const okLabel = typeof args[1] === 'object' ? args[1].confirmButtonText : typeof args[2] === 'object' ? args[2].confirmButtonText : null

  const params = {
    title,
    message: msg,
    color: '',
    type: 'alert'
  } as any
  if (okLabel) { params.okLabel = okLabel }

  switch (color) {
    case 'success':
      params.color = 'positive'
      break
    case 'warning':
      params.color = 'warning'
      break
    case 'error':
      params.color = 'negative'
      break
    case 'info':
    default:
      params.color = 'primary'
      break
  }

  let post = ctx.vm.$message({
    type: "warning",
    message: "warning",
    duration: 30000,
    showClose: true
  })
  // if (callback) {
  //   post.then(callback)
  // }
  return post
}

const alertServer = {
  install(Vue: any) {
    Vue.prototype.$alert = alert
  }
}

export default alertServer
