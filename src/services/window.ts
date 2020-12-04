/**
 * window 方法扩充
 */

/**
 * 获取本地语言，并统一输出标识
 * - 简体 `ZH_CN`
 * - 繁体 `ZH_TW`
 * - 英语 `EN`
 * - 葡文 `pt`
 */
export function getLocalLanguage (type?: string) {
  type = navigator.language || type || 'ZH_TW'
  if (type.indexOf('zh-') > -1) {
    if (type.indexOf('CN') > -1 || type.indexOf('hans') > -1) {
      return 'ZH_CN'
    } else {
      return 'ZH_TW'
    }
  } else if (type.indexOf('en') > -1) {
    return 'EN'
  } else if (type.indexOf('pt') > -1) {
    return 'pt'
  } else {
    return type
  }
}

/** 字符占位符替换， 占位符：{0-n} */
export function textPHRP (value: string, replaces: string[]) {
  let text = value
  for (const i in replaces) {
    if (value.hasOwnProperty(i)) {
      text = text.replace(`{${i}}`, String(replaces[i]))
    }
  }
  return text
}

// ---------------------------------  数据检测  ---------------------------------

/** 是否是对象 - Object{} */
export function ISObject (value: any) {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return true
  }
  return false
}

/** 是否是数组 - Array[] */
export function ISArray (value: any) {
  return Array.isArray(value)
}

/** 是否是函数 - function */
export function ISFunction (value: any) {
  return typeof value === 'function'
}

/** 是否是空对象 - Object{}, 配合ISObject使用 */
export function ISEmptyObject (value: any) {
  for (const i in value) {
    if (value.hasOwnProperty(i)) {
      return false
    }
  }
  return true
}

// ---------------------------------  扩充方法  ---------------------------------
/** 对象深复制 */
export function deepCopy<T> (data: T): T {
  return JSON.parse(JSON.stringify(data))
}

// ---------------------------------     IE    ---------------------------------

/** 扩展 Map - 兼容IE 11 */
export function CreateMap (mapArray: any): any {
  const map = new Map()
  mapArray.forEach((item: any) => {
    map.set(item[0], item[1])
  })
  return map
}

/** 整理 IE 内存 */
export function IECleanMemory () {
  let win: any = window
  if (win.CollectGarbage) {
    setTimeout(win.CollectGarbage, 100)
  }
  win = null
}
