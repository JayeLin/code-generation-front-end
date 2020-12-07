import { Vue, Component } from "vue-property-decorator";
import { State } from 'vuex-class';
import { UserShopComponent } from '../userShop';

@Component({
  name: "userInfo",
  template: require("./index.html"),
  components: {
    tFnUsershop: UserShopComponent,
  }
})
export class UserinfoComponent extends Vue {

  @State((s: any) => s.user.userInfo) userInfo: any
  // Data

  // Store 引入

  constructor() {
    super();
  }

  // 生命构造时
  created() { }

  // 生命挂载时 -- 服务器渲染不会被调用， 谨慎使用
  mounted() { }

  // 生命销毁时
  destroyed() { }
}