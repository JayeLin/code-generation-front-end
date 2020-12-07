import Vue from 'vue'



// 主題

// elementui ICON
import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/index.css'

// 第三方框架组件


// elementUI组件
import elementui from 'element-ui'
Vue.use(elementui)

import messageServer from './message'
import alertServer from './alert'
import confimServer from './confim'
messageServer.install(Vue)
alertServer.install(Vue)
confimServer.install(Vue)

/* 指令功能 */


// 布局组件，命名：tFr + 模块名称（大写开头），引用<t-fr-xxx></t-fr-xxx>


// 自定义UI组件， 命名：tUi开头 + 模块名称（大写开头），引用<t-ui-xxx></t-ui-xxx>


import { FrameComponent } from './frame';
Vue.component('tUiFrame', FrameComponent)

// 布局
import { LayoutComponent } from './layout/';
Vue.component('tUiLayout', LayoutComponent)

import { LayoutHeaderComponent } from './layout/header/';
Vue.component('tUiLayoutHeader', LayoutHeaderComponent)

import { LayoutBodyComponent } from './layout/body/';
Vue.component('tUiLayoutBody', LayoutBodyComponent)

import { LayoutFooterComponent } from './layout/footer/';
Vue.component('tUiLayoutFooter', LayoutFooterComponent)

import { LayoutAsideComponent } from './layout/aside/';
Vue.component('tUiLayoutAside', LayoutAsideComponent)


import { IconComponent } from './icon';
Vue.component('tUiIcon', IconComponent)


import { DropdownComponent } from './dropdown';
Vue.component('tUiDropdown', DropdownComponent)



// 自定义功能组件， 命名：tFn开头 + 功能模块名称（大写开头）， 引用 <t-fn-xxx></t-fn-xxx>

import { FullscreenComponent } from "./fullscreen";
Vue.component('tFnFullscreen', FullscreenComponent)


