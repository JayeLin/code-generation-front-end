import { vm } from '@/main';
import * as store from '../store/keepalive'
let state = store.keepalive.state
export interface Browser {
  /** 禁用页面返回 */
  popstate(): void,
  /** 页面重载提示 */
  beforeunload(e: BeforeUnloadEvent): void,
  /** 刷新提示 */
  reload(e: KeyboardEvent): void,
  /** 右键禁用 */
  contextmenu(e: MouseEvent): void
}

const browser: Browser = {
  popstate() {
    history.pushState(null, '', document.URL);
  },
  beforeunload(e) {
   
    let event: any = window.event
    event.returnValue = false
    // let url = window.location.origin
    // let str = "csmsprod."
    // if (url.indexOf(str) > -1) {
    //   url = "https://csmsprod.ctm.com.mo/home"
    // }
    // window.location.href = url;
  },
  reload(e) {
    if (e.key === "F5" && e.keyCode === 116 && !e.ctrlKey) {
      let lang = vm.$store.state.language.lang.global
      vm.$confirm(lang.confirm_browser_reload.message, lang.confirm_browser_reload.title, {
        type: "warning"
      })
        .then(() => {
          
          window.removeEventListener('beforeunload', browser.beforeunload)
          setTimeout(() => {
            // location.reload()
            let url = window.location.origin
            let str = "csmsprod."
            if (url.indexOf(str) > -1) {
              url = "https://csmsprod.ctm.com.mo/home"
            }
            window.location.href = url;
          }, 500)
        })
        .catch(() => { })
      e.returnValue = false
    }
  },
  contextmenu(e) {
    e.returnValue = false
  }
}
export default browser