import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "layoutComponent",
  template: require("./index.html")
})
export class LayoutComponent extends Vue {
  // 是否有滚动条， 及设置滚动条位置
  @Prop({ type: Boolean || Number, default: false }) scroll: any;

  // 是否占满父标签全部
  @Prop({ type: Boolean, default: false }) fill: any;

  // 是否为横排
  @Prop({ type: Boolean, default: false }) row: any;

  // 线框
  @Prop({ type: Boolean || String, default: false }) linear: any;

  // Data

  // Store 引入

  constructor() {
    super();
  }

  // 生命构造时
  created() {
    if ((this.$slots.left || this.$slots.right) && !this.row) {
      console.error("left, right slot 必须设置row属性");
    }
  }

  // 生命挂载时 -- 服务器渲染不会被调用， 谨慎使用
  mounted() {}

  // 生命销毁时
  destroyed() {}
}
