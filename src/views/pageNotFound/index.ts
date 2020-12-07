import Vue from "vue";
import Component from "vue-class-component";

import './index.scss'
import { State } from 'vuex-class';

@Component({
  name: "PageNotFound",
  template: require("./index.html")
})
export class PageNotFoundComponent extends Vue {
  @State(s => s.language.lang.notFound) lang: any

  constructor() {
    super();
  }
  created() {
    this.$language.get('notFound')
  }

  backPrev() {
    this.$store.state.notFoundPage = false
  }
  backHome() {
    this.$store.state.notFoundPage = false
    this.$router.push('/home')
  }
}