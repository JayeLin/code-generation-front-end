import { Vue, Component } from "vue-property-decorator";
import { State } from 'vuex-class';

@Component({
  name: "setup",
  template: require("./index.html"),
  components: {
  }
})
export class SetupComponent extends Vue {

  // @State((s: any) => s.language.lang.global.fullscreen) fullscreen: any;
  // @State((s: any) => s.language.lang.global.fullscreenMessage) fullscreenMessage: any;
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