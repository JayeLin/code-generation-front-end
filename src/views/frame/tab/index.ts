import { Vue, Component, Watch } from "vue-property-decorator";
import { State } from "vuex-class";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import CSMS from "@/config/pathConfig";
import { UserShopComponent } from '@/views/frame/header/userShop';
@Component({
  name: "tabFrame",
  template: require("./index.html"),
  components: {
    swiper,
    swiperSlide,
    tFnUsershop: UserShopComponent,
  }
})
export class TabFrame extends Vue {
  @State((s: any) => s.language.lang.global.systemName) systemName: any;
  // Tab
  @State(s => s.keepalive.list) list: any;
  @State(s => s.keepalive.current) current: any;
  @State((s: any) => s.user.userInfo) userInfo: any;
  @State(s => s.language.lang.global) global: any
  path: string = "";

  swiper: any;

  swiperConfig: any = {
    slidesPerView: "auto",
    // allowTouchMove: false,
    navigation: {
      nextEl: ".tui-icon-arrow-right",
      prevEl: ".tui-icon-arrow-left"
    }
  };
  timer: any = null
  constructor() {
    super();
  }

  created() {
    this.$nextTick(() => {
      this.swiper = this.$refs.swiper;
    });
  }

  mounted() {
    // this.$editRedis.editRedisTimer800ms(this.list, this.current.sign)
    // this.timerControl()
  }
  beforeDestroy() {
    if (this.timer) {
      window.clearInterval(this.timer)
      this.timer = null;
    }
  }
  @Watch("current.path")
  changePath() {
    if (this.swiper) {
      this.swiper.update();
    }
  }

  remove(item: any) {
    this.$keepalive.remove(item.path);
  }

  removeAll() {
    this.$keepalive.removeAll();
  }

  router(item: any, index: any) {
    this.$router.push({
      name: item.name,
      params: item.params,
      query: item.query
    });
  }
}