import { Vue, Component, Watch } from "vue-property-decorator";
import Axios from "axios";

// import { HeaderFrame } from "./view/frame/header";
import { HeaderFrame } from "@/views/frame/header";
import { TabFrame } from "@/views/frame/tab";
import { State, Getter, Mutation } from "vuex-class";
import { MenuFrame } from "@/views/frame/menu";

Component.registerHooks(["beforeRouteEnter", "beforeRouteUpdate"]);

@Component({
  name: 'appMain',
  template: require("./main.html"),
  components: {
    tFrHeader: HeaderFrame,
    tFrTab: TabFrame,
    tFrMenu: MenuFrame,
  }
})
export default class MainComponent extends Vue {
  @State((s: any) => s.user.isShopSelect) isShopSelect: any;
  @State((s: any) => s.menu.isFold) isFold: any;
  @State((s: any) => s.keepalive.cache) keepAlive: any;



  constructor() {
    super();
  }

  created() {

  }

  mounted() {
  }

  destroyed() {
    // window.removeEventListener('beforeunload', this.$browser.beforeunload)
    // window.removeEventListener('keydown', this.$browser.reload)
  }

  beforeRouteEnter(to: any, from: any, next: any) {

    next((vm: Vue) => {
      vm.$keepalive.check(to);
      // 监听刷新事件，不是F5 启用系统提示
      // window.addEventListener('beforeunload', vm.$browser.beforeunload)

      // 监听按键，F5时提示是否刷新
      // window.addEventListener('keydown', vm.$browser.reload)
    });
  }

  beforeRouteUpdate(to: any, from: any, next: any) {
    this.$keepalive.check(to, next);
  }
}
