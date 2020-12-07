import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "frameComponent",
  template: `
    <header v-if="name=='header'" :class="['frame_' + name]"><slot></slot></header>

    <footer v-else-if="name=='footer'" :class="['frame_' + name]"><slot></slot></footer>

    <nav v-else-if="name=='menu'" :class="['frame_' + name]"><slot></slot></nav>

    <div v-else-if="name=='body' || name=='main'" :class="['frame_' + name, vertical && 'vertical']"><slot></slot></div>

    <section v-else-if="name=='pages'" :class="['frame_' + name]"><slot></slot></section>

    <aside v-else :class="['frame_' + name]"><slot></slot></aside>
  `
})
export class FrameComponent extends Vue {
  @Prop({ type: String }) name: any;
  @Prop({ type: Boolean }) vertical: any;

  constructor() {
    super();
  }

  // 生命构造时
  created() {}

  // 生命挂载时 -- 服务器渲染不会被调用， 谨慎使用
  mounted() {}

  // 生命销毁时
  destroyed() {}
}
