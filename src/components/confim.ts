import router from '@/router'

const ctx = {
  get vm() {
    return router.app
  }
}

function confirm() {
  const args = arguments
  // 提示內容必傳
  const msg = args[0]
  const title = typeof args[1] === 'string' ? args[1] : typeof args[1] === 'object' ? args[1].title : '提示'
  const color = typeof args[1] === 'object' ? args[1].type : typeof args[2] === 'object' ? args[2].type : 'primary'
  const okLabel = typeof args[1] === 'object' ? args[1].confirmButtonText : typeof args[2] === 'object' ? args[2].confirmButtonText : null
  const cancelLabel = typeof args[1] === 'object' ? args[1].cancelButtonText : typeof args[2] === 'object' ? args[2].cancelButtonText : null
  const params = {
    title,
    message: msg,
    color: '',
    type: 'confirm'
  } as any
  if (okLabel) { params.okLabel = okLabel }
  if (cancelLabel) { params.cancelLabel = cancelLabel }
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
  const promise = {
    reslove: null as any,
    then(callback: any) {
      this.reslove = callback
      return this
    },
    reject: null as any,
    catch(callback: any) {
      this.reject = callback
      return this
    }
  } as any
  // ctx.vm.__message.post('DIALOG', params).then(() => {
  //   if (promise.reslove) {
  //     promise.reslove(true)
  //   }
  // }).catch(() => {
  //   if (promise.reject) {
  //     promise.reject()
  //   }
  // })

  return promise
}

const confirmServer = {
  install(Vue: any) {
    Vue.prototype.$confirm = confirm
  }
}

export default confirmServer
