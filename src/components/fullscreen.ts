import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "fullscreen",
  template: `
  <el-button plain @click="fullscreen">
    <i :class="'tui-icon-fullscreen-' + (!isFull? 'on' : 'off')"></i>
    <span v-if="title" class="mrl5">{{title}}</span>
  </el-button>`
})
export class FullscreenComponent extends Vue {

  @Prop({
    type: String
  }) title: any
  @Prop({
    type: String,
    default: '瀏覽器不支持自動全屏，請手動開啟！推薦使用Chrome瀏覽器進行瀏覽！'
  }) message: any

  isFull: boolean = false

  doc: any = document

  el: any = this.doc.documentElement

  // 检测IE
  isIE: any = navigator.userAgent.indexOf('Trident') > 1 ? true : false

  rFull: any = this.el.requestFullScreen ||
    this.el.webkitRequestFullScreen ||
    this.el.mozRequestFullScreen ||
    this.el.msRequestFullscreen

  cFull: any = this.doc.exitFullscreen ||
    this.doc.mozCancelFullScreen ||
    this.doc.webkitCancelFullScreen ||
    this.doc.msExitFullscreen

  constructor() {
    super();
  }

  created() {
    document.addEventListener('keydown', this.onkey)
    window.onresize = () => {
      this.isFull = this.doc.isFullScreen ||
        this.doc.mozFullScreen ||
        this.doc.webkitIsFullScreen
    }
  }

  onkey(event: any) {
    // 兼容全屏操作
    if (this.rFull && this.cFull) {
      // 在默認F11狀態下，全屏后全屏事件無法觸發，禁用默認F11，
      if (event.keyCode === 122) {
        this.fullscreen()
        event.returnValue = false
      }
    }
  }

  fullscreen() {
    if (this.rFull && this.cFull && !this.isIE) {
      if (!this.isFull) {
        if (typeof this.rFull !== 'undefined' && this.rFull) {
          this.rFull.call(this.el)
        }
      } else {
        this.cFull.call(this.doc)
      }
    } else {
      this.$message({
        type: "warning",
        message: this.message
      })
    }
  }
}