import Vue from 'vue'

// 引入公共配置项
import config from './config'

// Axios, 自行封装Axios常用方法
import http, { HttpService } from './httpService'

// 浏览器事件
import browser, { Browser } from './browser';
// MD5加密方式
import publicKeyEncryptService, { PublicKeyEncrypt } from './publicKeyEncrypt'

// 解析多语言文本列表
import multiLanguage, { MultiLanguage } from './multiLanguage'

// 登陆
import loginService, { Login } from "./login";

// 页面缓存
import keepalive, { KeepAlive } from "./keepalive";

// 系统语言配置
import language, { Language } from './language';

declare module 'vue/types/vue' {
  interface Vue {
    /** 浏览器监听方法 */
    $browser: Browser;
    $print: (el: Element, callback?: (canvas: Element) => void) => void;

    /** 解析多语言文本列表 */
    $multiLanguage: MultiLanguage;

    $publicKeyEncryptService: PublicKeyEncrypt;

    $isIframe: boolean;

    /** 登录 */
    $login: Login
    /** HTTP请求 */
    $http: HttpService;

    /** 页面缓存方法, 需要出现在TAB栏 才能使用！！！！！ */
    $keepalive: KeepAlive;

    /** 系统语言配置 */
    $language: Language
  }
}

Object.defineProperty(Vue.prototype, '$isIframe', {
  get() { return window !== window.parent }
})

Vue.prototype.$http = http.axios

Vue.prototype.$browser = browser

Vue.prototype.$config = config

Vue.prototype.$multiLanguage = multiLanguage

Vue.prototype.$publicKeyEncryptService = publicKeyEncryptService

Vue.prototype.$login = loginService;

Vue.prototype.$language = language;

Vue.prototype.$keepalive = keepalive;

const nodeType = ['button', 'textarea', 'input']
function isElement(node: string | undefined) {
  for (const item of nodeType) {
    if (node === item) { return true }
  }
  return false
}

function disabledElement(node: Element) {
  switch (node.localName) {
    case 'input':
    case 'textarea':
      node.setAttribute('readonly', 'readonly');
      (node.parentElement as any).classList.add('is-disabled')
      break
    default:
      node.setAttribute('disabled', 'disabled');
      (node as any).classList.add('is-disabled')
      break
  }
}
