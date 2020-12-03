import { Vue, Component } from "vue-property-decorator";

@Component({
  name: 'about',
  template: require("./index.html"),
  components: {
  }
})
export class AboutComponent extends Vue {

  constructor() {
    super();
  }

  created() {
    console.log("AboutComponent................")
  }

  mounted() { }
}
