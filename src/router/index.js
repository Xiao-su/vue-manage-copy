import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      meta: {title: '自述文件'},
      path: '/',
      component: resolve => require(['@/components/common/Home.vue'], resolve),
      children: [
        {
          path: '/dashboard',
          meta: {title: '系统首页'},
          component: resolve => require(['@/components/page/Dashboard.vue'], resolve)
        }
      ]
    }
  ]
})

export default router