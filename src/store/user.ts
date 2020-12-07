const STORE_USERINFO: any = sessionStorage.getItem("userInfo");
const STORE_ISLOGIN: any = sessionStorage.getItem("isLogin");
const STORE_ISSTORECSR: any = sessionStorage.getItem("isStoreCsr");

export const userInfo = STORE_USERINFO ? JSON.parse(STORE_USERINFO) : {
  userId: "",
  username: "",
  name: "",
  employeeNo: "",
  shopName: "",
  shopId: "",
  userProperty: "",
  saleChannelId: "",
  shopCode: "",
  post: "",
  settlementNeedChooseShop: "",
  roleReadOnly: "",
  isStoreCsr: ""
};
userInfo.isLogin = STORE_ISLOGIN ? 1 : 0;
userInfo.isStoreCsr = STORE_ISSTORECSR ? 1 : 0;

export const user = {
  state: {
    userInfo,
    isShopSelect: false
  }
};
