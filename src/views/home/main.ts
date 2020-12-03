import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import HelloWorldComponent from '../../components/helloWord' // @ is an alias to /src
import './main.scss'
@Component({
  components: {
    HelloWorld: HelloWorldComponent
  },
  template: require("./main.html")
})
export default class HomeComponent extends Vue {
  info: any = 'Welcome to Your Vue.js + TypeScript App'
}