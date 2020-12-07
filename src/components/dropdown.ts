import { Vue, Component } from "vue-property-decorator";

import { Dropdown, DropdownMenu, DropdownItem } from 'element-ui'
import 'element-ui/lib/theme-chalk/dropdown.css'

@Component({
  name: "dropdown",
  template: `
  <el-dropdown size="small" trigger="click" @command="change">
    <slot></slot>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="item in list" :key="item.type"
      v-text="item.label"
      :command="item"
      v-show="current.label !== item.label" >
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
  `,
  components: {
    elDropdown: Dropdown,
    elDropdownMenu: DropdownMenu,
    elDropdownItem: DropdownItem
  },
  props: ['current', 'list']
})
export class DropdownComponent extends Vue {
  constructor() {
    super();
  }

  mounted() { }

  change(item: any) {
    this.$emit('change', item)
  }
}