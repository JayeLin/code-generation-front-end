import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({
  name: "iconComponent",
  template: require('./icon.html')
})
export class IconComponent extends Vue {
  @Prop() icon: any

  constructor() {
    super();
  }
  created() { }
}