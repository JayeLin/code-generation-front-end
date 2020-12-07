import { Vue, Component, Prop } from "vue-property-decorator";
import { State } from 'vuex-class';

@Component({
  name: "userShop",
  template: require("./index.html")
})
export class UserShopComponent extends Vue {

  @State(s => s.user) user: any
  // Prop

  // Vuex

  // Data

  // 构造器
  constructor() {
    super();
  }

  // 生命构造之前
  beforeCreate() { }

  // 生命构造时
  created() { }

  // 生命挂载之前
  beforeMount() { }

  // 生命挂载时
  mounted() { }

  // 生命销毁之前
  beforeDestroy() { }

  // 生命销毁时
  destroyed() { }
}