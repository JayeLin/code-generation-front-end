import HomeComponent from '../views/home'
import MainComponent from '@/views/main'
import { vm } from '@/main';
console.log("routes..........")
export default [
  {
    path: '/',
    name: 'main',
    component: MainComponent,
    children: [
      {
        path: '/home',
        name: 'home',
        component: HomeComponent,
      }
    ]
  }, {
    path: '*',
    name: '404',
    beforeEnter() {
      vm.$store.state.notFoundPage = true
    }
  },]
