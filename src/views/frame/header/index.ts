import { Vue, Component } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";

import { UserinfoComponent } from './userinfo';
import { SetupComponent } from './setup';
import { UserShopComponent } from './userShop';

@Component({
  name: "headerFrame",
  template: require("./index.html"),
  components: {
    tFnUserinfo: UserinfoComponent,
    tFnSetup: SetupComponent,
    tFnUsershop: UserShopComponent,
  }
})
export class HeaderFrame extends Vue {
  @State((s: any) => s.user.userInfo) userInfo: any
  @State((s: any) => s.language.lang.global.systemName) systemName: any;

  // 新增編輯相關參數
  editInfo: any = {
    show: false
  };

  constructor() {
    super();
  }
  mounted() { }

  // 顯示切換門店彈窗
  showChangeShop() {
    this.editInfo.show = true;
  }

  // 關閉彈窗
  closeDialog() {
    this.editInfo.show = false;
  }
}
