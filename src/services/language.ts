import CSMS from '@/config/pathConfig';

import Axios from "axios";

// 组件语言配置
import locale from "element-ui/lib/locale";
import en from "element-ui/lib/locale/lang/en";
import zh_TW from "element-ui/lib/locale/lang/zh-TW";
import zh_CN from "element-ui/lib/locale/lang/zh-CN";

import router from '@/router';

interface LangItem {
  local: {
    code: string
    name: string
  }
  lang: any
}

export interface Language {
  /** 变更语言，只用于切换语言组件 */
  init(data: LangItem): void
  /** 获取当前页面语言 site 對應後端配置， name對應store存儲 */
  get(site: string, name?: string): Promise<any>
}

const element: any = {
  EN: en,
  ZH_TW: zh_TW,
  ZH_CN: zh_CN
}

const ctx = {
  get vm() {
    return router.app
  }
}

const language: Language = {
  init(data) {
    // 设置请求头
    Axios.defaults.headers.language = localStorage.getItem("language") || data.local.code;
    // 设置组件
    locale.use(element[data.local.code]);
    const language = ctx.vm.$store.state.language
    const lang = data.lang
    language.current = data.local

    for (const i in lang) {
      if (lang.hasOwnProperty(i)) {
        language.lang[i] = lang[i]
      }
    }
  },
  get(site, name = site) {
    let store = ctx.vm.$store.state.language.lang
    // if (!store[name]) {
    //   return ctx.vm.$http.get(CSMS.BASE.LANGUAGE.GET_COMPONENT_LANG, { pageComponentCode: site }).then(res => {
    //     if (res.data.code === "10000000") {
    //       let data = JSON.parse(res.data.data)
    //       store[name] = Object.assign({}, data)
    //     }
    //     return store[name]
    //   })
    // }

    return new Promise((res: (res: any) => void) => {
      res(store[name])
    })
  }
}

export default language