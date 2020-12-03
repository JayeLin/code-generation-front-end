import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component({
  template: require("./index.html")
})
export default class HelloWorldComponent extends Vue {
  @Prop(String) msg!: string
}