import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Kz from '@/components/Kz'
import NewS from '@/components/NewS'
import Mine from '@/components/Mine'

Vue.use(Router);

export default new Router({
  routes: [
      {path: '/',name: 'Hello',component: Hello},
      {path: '/kz',name: 'kz',component: Kz},
      {path: '/news',name: 'News',component: NewS},
      {path: '/mine',name: 'Mine',component: Mine}
  ]
})
