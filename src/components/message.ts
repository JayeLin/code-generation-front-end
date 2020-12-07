import router from '@/router'

const ctx = {
  get vm() {
    return router.app
  }
}

function message(opt: any) {
  const params = {
    color: '',
    message: opt.message
  }
  switch (opt.type) {
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
  // ctx.vm.__message.post('NOTIFY', params)
  // ctx.vm.__message.post('NOTIFY', params)
  ctx.vm.$message({
    type: "warning",
    message: "warning",
    duration: 30000,
    showClose: true
  })
}
message.error = (meg: string) => {
  message({ type: 'error', message: meg })
}
message.info = (meg: string) => {
  message({ type: 'info', message: meg })
}
message.success = (meg: string) => {
  message({ type: 'success', message: meg })
}
message.warning = (meg: string) => {
  message({ type: 'warning', message: meg })
}

const messageServer = {
  install(Vue: any) {
    Vue.prototype.$message = message
  }
}

export default messageServer
