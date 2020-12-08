import { Vue, Component, Watch } from "vue-property-decorator";
import { State, Mutation } from 'vuex-class';
import CSMS from "@/config/pathConfig";

@Component({
  name: "menuFrame",
  template: require("./index.html"),
  props: ['menu']
})
export class MenuFrame extends Vue {
  @State(s => s.menu.isFold) isFold: any

  // 导航折叠
  @Mutation changeFold: any

  menuList: any = []

  current: string = ""

  temp: any = [
    {
      children: [],
      code: "home",
      elements: null,
      icon: "icon-gear",
      id: 3,
      label: "首页",
      map: null,
      parentCode: "home",
      selected: null,
      sequence: 1,
      type: "MENU",
      url: null
    }
  ]
  constructor() {
    super();
  }

  created() {
    // this.$http.get(CSMS.BASE.SCYPERMISSION.SCYPERMISSION_USERMENURMISSION).then(res => {
    //   if (res.data.code === "10000000") {
    //     this.menuList = res.data.data
    //   }
    // })
    this.menuList = this.temp
  }
  @Watch('isFold')
  handleFold() {
    this.current = ""
  }

  toRouter(item: any) {
    if (item.menuCode.indexOf('external_') >= 0) {
      this.$router.push({ name: item.url, params: { code: item.menuCode } })
    } else {
      this.$router.push({ path: '/' + item.menuCode })
    }
    this.$store.state.keepalive.title = item.menuName
  }

  show(name: string) {
    setTimeout(() => {
      if (this.current === name) {
        this.current = ""
      } else {
        this.current = name
      }
    }, 20)
  }
}