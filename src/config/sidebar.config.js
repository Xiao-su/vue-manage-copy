let sidebarList = [
  {
    icon: 'el-icon-sukehuduan',
    index: 'dashboard',
    title: '系统首页'
  },
  {
    icon: 'el-icon-suzhibiaoleixingguanli',
    index: 'table',
    title: '基础表格'
  },
  {
    icon: 'el-icon-suicon_yingyongguanli',
    index: 'charts',
    title: 'Charts图表'
  },
  {
    icon: 'el-icon-sudangan1',
    index: 'tabs',
    title: 'tab选项卡'
  },
  {
    icon: 'el-icon-sudingdan',
    index: '3',
    title: '表单相关',
    subs: [
      {
        index: 'form',
        title: '基本表单'
      },
      {
        index: '3-2',
        title: '三级菜单',
        subs: [
          {
            index: 'editor',
            title: '富文本编辑器'
          },
          {
            index: 'markdown',
            title: 'markdown编辑器'
          },
        ]
      },
      {
        index: 'upload',
        title: '文件上传'
      }
    ]
  },
  {
    icon: 'el-icon-suzhiguanxianguanli',
    index: 'icon',
    title: '自定义图标'
  },
  {
    icon: 'el-icon-sujiedianguanli',
    index: '6',
    title: '拖拽组件',
    subs: [
      {
        index: 'drag',
        title: '拖拽列表',
      },
      {
        index: 'dialog',
        title: '拖拽弹框',
      }
    ]
  },
  {
    icon: 'el-icon-suyingyongshangdian',
    index: '7',
    title: '错误处理',
    subs: [
      {
        index: 'permission',
        title: '权限测试'
      },
      {
        index: '404',
        title: '404页面'
      }
    ]
  }
]

export default sidebarList