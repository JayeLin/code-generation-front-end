import HomeComponent from '@/views/home'
import MainComponent from '@/views/main'
import { vm } from '@/main';
console.log("routes..........")
const routes = [
  {
    path: '/',
    name: 'main',
    redirect: {
      name: 'home'
    },
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
  }]
export default routes;