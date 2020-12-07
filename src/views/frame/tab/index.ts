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
  // 编辑互斥 -- 定时器控制(启动和关闭)
  timerControl() {
    if (this.timer) {
      window.clearInterval(this.timer)
      this.timer = null;
    }
    this.$nextTick(() => {
      if (!this.$route.params.editable
        || this.$route.params.editable === '2') {
        this.startTimer()
      }
    })
  }
  // 互斥编辑 -- 定时器启动
  startTimer() {
    this.timer = window.setInterval(() => {
      this.list.forEach((el: any) => {
        if ((el.tips === 'orderDetails'
          && el.params.editable === '2')
          || (el.tips === 'orderForm'
            && !el.params.editable)) {
          if (el.sign) {
            let sign: string = el.sign.substring(el.sign.indexOf("_") + 1)
            let params: any = {
              orderId: sign,
              updateUserId: this.userInfo.userId,
              updateUserName: this.userInfo.username
            }
            this.$http.post(CSMS.CSO.ORDER.ORDER_REDIS, params, false).then(response => {
              if (response.data.code === "10000000") {
              } else {
                // 搶奪處理彈窗
                if (el.sign === this.current.sign) {
                  window.clearInterval(this.timer)
                  this.timer = null;
                  this.$confirm(response.data.message, this.global.prompt, {
                    showCancelButton: false,
                    showClose: false,
                    closeOnPressEscape: false,
                    closeOnClickModal: false,
                    type: "warning"
                  }).then(() => {
                    this.$keepalive.get(null, false)
                    this.$keepalive.remove(this.$route.path, "/home")
                    this.timerControl()
                  }).catch(() => { })
                  return
                }
              }
            })
            return
          }
          return
        }
      })
      return
    }, 900)
  }
}