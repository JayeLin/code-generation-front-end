import Vue from 'vue'
import { vm } from '@/main'

// 引入公共配置项
import config from './config'
// MD5加密方式
import publicKeyEncryptService, { PublicKeyEncrypt } from './publicKeyEncrypt'

// 解析多语言文本列表
import multiLanguage, { MultiLanguage } from './multiLanguage'

declare module 'vue/types/vue' {
  interface Vue {

    $print: (el: Element, callback?: (canvas: Element) => void) => void;

    /** 解析多语言文本列表 */
    $multiLanguage: MultiLanguage;

    $publicKeyEncryptService: PublicKeyEncrypt;

    $isIframe: boolean;
  }
}

Object.defineProperty(Vue.prototype, '$isIframe', {
  get () { return window !== window.parent }
})

Vue.prototype.$config = config

Vue.prototype.$multiLanguage = multiLanguage

Vue.prototype.$publicKeyEncryptService = publicKeyEncryptService

const nodeType = ['button', 'textarea', 'input']
function isElement (node: string | undefined) {
  for (const item of nodeType) {
    if (node === item) { return true }
  }
  return false
}

function disabledElement (node: Element) {
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
