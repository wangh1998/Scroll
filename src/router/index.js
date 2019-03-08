import Vue from 'vue'
import Router from 'vue-router'
import Scroll from '@/components/Scroll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Scroll
    }
  ]
})
