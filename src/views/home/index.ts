import { Component, Vue } from 'vue-property-decorator'
import HelloWorldComponent from '@/components/helloWord' // @ is an alias to /src
import './index.scss'
@Component({
  name: 'home',
  components: {
    HelloWorld: HelloWorldComponent,
  },
  template: require('./index.html')
})
export default class HomeComponent extends Vue {
  info: any = 'Welcome to Your Vue.js + TypeScript App'
  constructor() {
    super();
  }
  created () {
  }
}
