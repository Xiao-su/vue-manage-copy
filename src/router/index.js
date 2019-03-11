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
        },
        {
          path: '/table',
          meta: {title: '基本表格'},
          component: resolve => require(['@/components/page/BaseTable.vue'], resolve)
        },
        {
          path: '/charts',
          meta: {title: 'schart图表'},
          component: resolve => require(['@/components/page/BaseCharts.vue'], resolve)
        },
        {
          path: '/tabs',
          meta: {title: '选项卡'},
          component: resolve => require(['@/components/page/Tabs.vue'], resolve)
        },
        {
          path: '/form',
          meta: {title: '基本表单'},
          component: resolve => require(['@/components/page/BaseForm.vue'], resolve)
        },
        {
          path: '/editor',
          meta: {title: '富文本编辑器'},
          component: resolve => require(['@/components/page/VueEditor.vue'], resolve)
        }
      ]
    }
  ]
})

export default router