// import config from '@/services/config'
import config from '@/services/config'
import { vm } from '@/main'

interface LanguageListItem {
  lang: string;
  content: string;
}

export interface MultiLanguage {
  splitTableList: (originList: any, targetList: any, name: string) => any;
  splitDetail: (originData: any, targetList: any, name: string) => any;

  getContent: (langList: LanguageListItem[]) => string;
  getLangBy: (item: any, name: string) => string;

  setCurrentLangs: (originList: any, targetList: any, name: string) => any;
}

// 多語言配置
const langConfig: any = config.langConfig()

const multiLanguage: MultiLanguage = {
  // 處理Table的List原始數據, 傳三個參數(originList--原始數據列表, targetList--需要拆分的列表, name--拆分后的字段前綴), 會返回一個處理后的List
  splitTableList: (originList, targetList, name) => {
    const list: any = originList
    if (list != null && list !== []) {
      for (const i of list) {
        if (i[targetList] != null && i[targetList] !== []) {
          for (const j of i[targetList]) {
            for (const k of langConfig) {
              if (j.lang === k.langName) {
                i[name + k.langText] = j.content
              }
            }
          }
        }
      }
    }
    return list
  },

  // 處理詳情中的多語言
  splitDetail: (originData, targetList, name) => {
    const data: any = originData
    if (data !== null && data[targetList] !== undefined && data[targetList] !== null && data[targetList] !== []) {
      for (const i of data[targetList]) {
        for (const j of langConfig) {
          if (i.lang === j.langName) {
            data[name + j.langText] = i.content
          }
        }
      }
    }
    return data
  },

  /** Get Multi language content
   * @param {{}} lang - language list
   * @returns {string} string
   */
  getContent (langList) {
    const langType = vm.$store.state.language.current.type
    let name = ''
    for (const i of langList) {
      if (i.lang === langType) {
        name = i.content
        break
      }
    }
    return name || '-'
  },

  setCurrentLangs: (originList, targetList, name) => {
    const list: any = originList
    if (list != null && list !== []) {
      for (const i of list) {
        if (i[targetList] != null && i[targetList] !== []) {
          for (const j of i[targetList]) {
            const langType = vm.$store.state.language.current.type
            if (langType === j.lang) {
              i[name] = j.content
            }
          }
        }
      }
    }
    return list
  },
  // 傳入對象和屬性
  getLangBy (item: any, name: string) {
    let value = '-'
    if (item && name) {
      const langType = vm.$store.state.language.current.type
      const keyName: string = (name + (langType === 'ZH_TW' ? 'Tw' : 'En'))
      value = item[keyName]
    }
    return value
  }
}

export default multiLanguage
