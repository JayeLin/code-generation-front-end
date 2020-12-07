import Axios from 'axios';
import { vm } from '@/main';

export interface HttpService {
  /** 多个请求同步 */
  all(list: any[], isMessage: boolean): Promise<any>;
  /** GET */
  get(url: string, data?: any, isMessage?: boolean): Promise<any>;
  /** Delete */
  delete(url: string, data?: any, isMessage?: boolean): Promise<any>;
  /** Post */
  post(url: string, data?: any, isMessage?: boolean): Promise<any>;
  /** Put */
  put(url: string, data?: any, isMessage?: boolean): Promise<any>;
}

Axios.interceptors.request.use(req => {
  const token = vm.$store.state.token
  if (token) {
    req.headers['authorization'] = token
    req.headers['appName'] = 'csms'
  }
  return req
})

// Axios.interceptors.response.use(res => {
//   return res
// })

// 监听请求成功后，服务器返回状态
function checkThen(res: any) {
  let url = res.config.url.slice(res.config.baseURL.length, res.config.url.length)
  let method = res.config.method
  if (res.data.code !== "10000000" && res.data.code !== "00010012") {
    console.warn(method + ": " + url + '\n\n \t' + res.data.message + '\n \t')
    console.warn("↑↑↑↑ \n", res)

    vm.$message({
      type: "warning",
      message: res.data.message,
      duration: 30000,
      showClose: true
    })
  }

  // 登陸超時
  if (res.data.code === '00010012') {
      // vm.__message.post('LOGOUT', '00010012')
    vm.$confirm(res.data.message, res.data.message, {
      type: "warning",
      showClose: false,
      showCancelButton: false,
      closeOnClickModal: false,
      closeOnPressEscape: false
    }).then(() => {
      vm.$login.off(false)
    })
  }
}

// 监听请求失败状态
function checkCatch(err: any) {
  let url = err.config.url.slice(err.config.baseURL.length, err.config.url.length)
  let method = err.config.method
  console.error(method + ": " + url + "\n \t\t" + err.message)
  console.error("↑↑↑↑ \n", err.response)

  vm.$message({
    type: "warning",
    // message: method + ": " + err.message
    message: vm.$store.state.language.lang.global.errorMessage,
    duration: 30000,
    showClose: true
  })
}

// 组合url
function buildURL(url: string, data: any) {
  if (data) {
    for (let i in data) {
      if (data.hasOwnProperty(i)) {
        const divide = url.indexOf('?') >= 0 ? "&" : "?"
        const value = (data[i] === null || data[i] === undefined) ? "" : encodeURIComponent(data[i])
        url = url + divide + i + '=' + value
      }
    }
  }
  return url
}

// 柯里化HTTP函数实例
function Currying(type: any) {
  function axios() {
    let args = arguments
    const URL = args[0]
    const DATA = typeof args[1] === 'object' ? args[1] : null
    const ISMEG = typeof args[2] === 'boolean' ? args[2] : typeof args[1] === 'boolean' ? args[1] : true

    let http = Axios({
      url: type === 'get' || type === 'delete' ? buildURL(URL, DATA) : URL,
      method: type,
      data: type === 'post' || type === 'put' ? DATA : null,
    })

    if (ISMEG) {
      http.then(checkThen)
      http.catch(checkCatch)
    }

    return http
  }
  return axios
}

export const axios: HttpService = {
  all: (list: any[], isMessage = true) => {
    let http = Axios.all(list)
    if (isMessage) {
      http.then(checkThen)
      http.catch(checkCatch)
    }
    return http
  },
  delete: Currying('delete'),
  get: Currying('get'),
  post: Currying('post'),
  put: Currying('put')
}

export default {
  axios
}