import * as language from './language'
// home
let home = {
  title: "首頁",
  name: "home",
  path: "/home",
}

// 列表
let list: object[] = [home]

// 当前
let current = {
  index: 0,
  name: "home",
  path: '/home',
  sign: null
}

// 缓存
let cache: string[] = []

// Store module
export const keepalive: any = {
  state: {
    list,
    current,
    cache,
    title: null
  }
};
