import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "layoutHeader",
  template: require("./index.html")
})
export class LayoutHeaderComponent extends Vue {
  // 线框
  @Prop({ type: Boolean, default: false }) linear: any;

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