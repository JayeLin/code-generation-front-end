import { vm } from '@/main';
import * as store from '../store/keepalive'

let state = store.keepalive.state
interface TabConfig {
  title?: string;
  sign?: string;
  tips?: string;
  isConfirm?: boolean;
}
interface To {
  title: string;
  sign: null | string;
  tips?: null | string;
  isConfirm: boolean;

  name: string;
  path: string;
  params?: any;
  query?: any;
}

interface RouteTo {
  name: string
  params?: any
  query?: any
}

export interface KeepAlive {
  /** 检查是否缓存存在 */
  check(to: To, next?: () => void): void;
  /** 参数为TAB title、关闭提示, 返回当前TAB项 */
  get(config?: null | string | TabConfig, isConfirm?: boolean): To
  /** 缓存 */
  cache(name: string, data: object): void
  /** 移除路由，path(移除): 序列号 & path, to(跳转至) ?: path */
  remove(path: number | string, to?: string | RouteTo): void;
  /** 移除全部路由 */
  removeAll(): void;
  /** 設置tab標籤 */
  setTitle(titleTw: string, titleEn: string): void;
  /** 设置页面移除时的提示信息 */
  setPageRemoveTip(title: string, message: string): void;
}


/** 检测缓存列表是否存在 */
function hasKeepalive(compare: string): boolean {
  let len = state.cache.length
  for (let i = 0; i <= len; i++) {
    if ('home' === compare || state.cache[i] === compare) {
      return false
    }
  }
  return true
}

/** 获得当前路由，返回是否找到，回调返回找到的路由 */
function getCurrRouter(to: To, callback?: (item: any) => any) {
  let len = state.list.length
  for (let i = 0; i < len; i++) {
    if (state.list[i].path === to.path) {
      if (callback) {
        callback(state.list[i])
      }
      return true
    }
  }
  return false
}

/** 改变当前路由 */
function setCurrRouter(item: any) {
  state.current.name = item.name
  state.current.path = item.path
  state.current.sign = item.sign

  state.list.forEach((e: any, index: number) => {
    if (e.path === item.path) {
      state.current.index = index
    }
  })
}

/** 转至最后一个tab路由 */
function finalRoute() {
  let enter: any = state.list[state.list.length - 1]
  vm.$router.push({ name: enter.name, query: enter.query, params: enter.params })
}

/** 移除存储 */
function removeStore(name: string) {
  // 判断存储是否存在
  if (vm.$store.state[name]) {
    // 移除
    vm.$store.unregisterModule(name)
  }
}

/** 确认弹窗 */
function closeConfirm(option: any, callback: () => void) {
  vm.$confirm(option.message, option.title, { type: "warning" })
    .then(callback)
    .catch(() => { })
}

const keepalive: KeepAlive = {
  check(to, next) {
    // 根據导航設置tab標題
    let menusPermissionList: any = vm.$store.state.permission.menus
    if (menusPermissionList && menusPermissionList.length > 0) {
      let obj: any = menusPermissionList.find((item: any) => {
        return item.url === to.path
      })
      // 设置tab名称
      state.title = obj ? obj.label : null
      // 关闭tab时是否开启二次确认
      state.noConfirm = obj ? true : false
    }
    // 判断路由是否打开
    if (!getCurrRouter(to)) {
      // 是否打开最大限制路由
      if (state.list.length <= 10) {
        let item: To = {
          // tab文字
          title: state.title ? state.title : to.name,
          tips: state.title ? state.title : to.name,

          // tab关闭提示
          isConfirm: state.noConfirm ? false : true,

          // tab标识
          sign: null,

          // 路由
          name: to.name,
          path: to.path,
          params: JSON.stringify(to.params) !== "{}" ? to.params : "",
          query: JSON.stringify(to.query) !== "{}" ? to.query : "",
        }
        // 清空暂存
        state.title = null

        state.list.push(item)

        setCurrRouter(item)
      } else {
        let lang = vm.$store.state.language.lang.global
        vm.$message({
          type: "warning",
          message: lang.confirm_keepalive_check.maxWarning
        })
        return
      }
    } else {
      getCurrRouter(to, setCurrRouter)
    }

    // 检查缓存列表
    if (hasKeepalive(to.name)) {
      state.cache.push(to.name)
    }

    if (next) {
      next()
    }
  },
  get(config, isConfirm) {
    let len = state.list.length
    for (let i = 0; i < len; i++) {
      if (state.list[i].path === vm.$route.path) {
        if (config) {
          if (typeof config === 'string') {
            state.list[i].title = config
          } else if (config instanceof Object) {
            vm.$set(state.list, i, { ...state.list[i], ...config })
          } else {
            console.error('config 类型错误！');
          }
        }
        if (isConfirm === false) {
          state.list[i].isConfirm = false
        } else if (isConfirm === true) {
          state.list[i].isConfirm = true
        }
        return state.list[i]
      }
    }
  },
  remove(path, to) {
    let len: number = state.list.length
    let index: number = typeof path === 'number' ? path : -1

    // 如果参数为 path 遍历列表，获取序列号
    if (typeof path === 'string') {
      for (let i = 0; i <= len; i++) {
        if (state.list[i] && state.list[i].path === path) {
          index = i
          break
        }
        if (i === len) {
          return console.error('Wran: 未找到需要移除的Router!!!')
        }
      }
    }

    // 记录当前需要移除的路由
    let oldPath = state.list[index].path
    let oldName = state.list[index].name

    if (state.list[index].isConfirm) {
      let lang = vm.$store.state.language.lang.global
      let removePageTitle = lang.confirm_keepalive_remove.title
      let removePageMessage = lang.confirm_keepalive_remove.message
      if (state.list[index].removePageTitle && state.list[index].removePageMessage) {
        removePageTitle = state.list[index].removePageTitle
        removePageMessage = state.list[index].removePageMessage
      }
      closeConfirm({
        title: removePageTitle,
        message: removePageMessage
      }, execute)
    } else {
      execute()
    }

    /** 执行移除 */
    function execute() {
      // 移除缓存， 条件tab栏不存在相同路由
      let count = 0
      for (let i = 0; i < len; i++) {
        if (state.list[i].name === oldName) {
          count++
        }
      }

      if (count === 1) {
        // cache 不包含 home tab，所以长度少1
        state.cache.forEach((item: string, index: number) => {
          if (item === oldName) {
            state.cache.splice(index, 1)
          }
        });
      }
      // 移除存储
      removeStore(String(state.list[index].sign))

      // 移除TAB
      let remove: any = state.list.splice(index, 1)

      // 路由跳转
      if (to) {
        // 跳转到指定
        if (typeof to === 'string') {
          vm.$router.push(to)
        } else {
          vm.$router.push({ name: to.name, params: to.params, query: to.query })
        }
      } else if (remove[0].path === oldPath) {
        // 如果是移除当前，跳转到最后一个路由
        finalRoute()
      }
    }
  },
  removeAll() {

    /** 执行移除 */
    function execute() {
      // 移除所有存储
      state.list.forEach((e: any) => {
        removeStore(String(e.sign))
      })
      // 移除 home以外所有TAB
      state.list.splice(1, state.list.length)
      // 移除所有 缓存
      state.cache.splice(0, state.cache.length)
      // 进入最后一个路由， 此处最后只存在首页
      finalRoute()
    }
    let lang = vm.$store.state.language.lang.global
    closeConfirm({
      title: lang.confirm_keepalive_removeAll.title,
      message: lang.confirm_keepalive_removeAll.message
    }, execute)
  },
  cache(name, data) {
    // 判断存储是否存在
    if (!vm.$store.state[name]) {
      vm.$store.registerModule(name, { state: data })
    } else {
      console.error('名称：' + name + "重复")
    }
  },
  setTitle(titleTw, titleEn) {
    let type: any = vm.$store.state.language.current.type
    let title
    if (type === "ZH_TW") {
      title = titleTw
    } else if (type === "EN") {
      title = titleEn
    }
    this.get(title, false)
  },
  setPageRemoveTip(title, message) {
    let len = state.list.length
    for (let i = 0; i < len; i++) {
      if (state.list[i].path === vm.$route.path) {
        state.list[i].removePageTitle = title
        state.list[i].removePageMessage = message
      }
    }
  }
}

export default keepalive
