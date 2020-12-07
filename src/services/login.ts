import { vm } from "@/main";
import { user } from '@/store/user';
let store = user.state

export interface Login {
  /** 登录 */
  on(info: any): void
  /** 退出登录 */
  off(isConfirm?: boolean): void
}

const loginService: Login = {
  on(info) {
    // 更改登陆状态
    store.userInfo.isLogin = 1;
    sessionStorage.setItem("isLogin", "1");

    // 存储用户信息
    store.userInfo.userId = info.userId;
    store.userInfo.username = info.account;
    store.userInfo.name = info.name;
    store.userInfo.employeeNo = info.employeeNo;
    store.userInfo.saleChannelId = info.saleChannelId;
    store.userInfo.shopName = info.shopName;
    store.userInfo.shopId = info.shopId;
    store.userInfo.userProperty = info.user_property;
    store.userInfo.shopCode = info.shopCode;
    store.userInfo.isToBo = info.toBo;
    store.userInfo.post = info.post;
    store.userInfo.settlementNeedChooseShop = info.settlementNeedChooseShop;
    store.userInfo.roleReadOnly = info.roleReadOnly;

    sessionStorage.setItem("userInfo", JSON.stringify(store.userInfo));

    // 跳转页面
    vm.$router.push("/");
  },
  off(isConfirm = true) {
    let lang = vm.$store.state.language.lang.global
    function then() {
      store.userInfo.isLogin = 0;
      // 清空本次缓存
      sessionStorage.clear();

      // 移除页面重载监听
      window.removeEventListener('beforeunload', vm.$browser.beforeunload)

      // 初始化
      // location.reload()
      let url = window.location.origin
      let str = "csmsprod."
      if (url.indexOf(str) > -1) {
        url = "https://csmsprod.ctm.com.mo"
      }
      window.location.href = url;
    }
    if (isConfirm) {
      vm.$confirm(lang.confirm_login_off.message, lang.confirm_login_off.title, {
        type: "warning",
        closeOnClickModal: false,
        closeOnPressEscape: false
      })
        .then(then)
        .catch(() => { })
    } else {
      then()
    }
  }
}

export default loginService
