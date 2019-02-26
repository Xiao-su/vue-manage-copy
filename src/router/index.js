import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
var router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      name: 'dashboard',
      meta: {title: '自述文件'},
      path: '/dashboard',
      component: resolve => require(['../components/common/Home.vue'],resolve),
    }
  ]
})

export default router