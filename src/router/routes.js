import inputs from '@/pages/inputs'
import buttons from '@/pages/buttons'
import cells from '@/pages/cells'
import list from '@/pages/list'
import home from '@/pages/home'
import slider from '@/pages/slider'
import uploader from '@/pages/uploader'
import article from '@/pages/article'
import badge from '@/pages/badge'
import actionsheet from '@/pages/actionsheet'
import dialog from '@/pages/dialog'
import msg from '@/pages/msg'
import weuiMsg from '@/components/weui-msg'
import toast from '@/pages/toast'
import navbar from '@/pages/navbar'
import myTabbar from '@/pages/myTabbar'
const routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/inputs',
    component: inputs
  },
  {
    path: '/buttons',
    component: buttons
  },
  {
    path: '/cells',
    component: cells
  },
  {
    path: '/list',
    component: list
  },
  {
    path: '/slider',
    component: slider
  },
  {
    path: '/uploader',
    component: uploader
  },
  {
    path: '/article',
    component: article
  },
  {
    path: '/badge',
    component: badge
  },
  {
    path: '/actionsheet',
    component: actionsheet
  },
  {
    path: '/dialog',
    component: dialog
  },
  {
    path: '/msg',
    component: msg
  },
  {
    path: '/weuiMsg',
    component: weuiMsg
  },
  {
    path: '/toast',
    component: toast
  },
  {
    path: '/navbar',
    component: navbar
  },
  {
    path: '/myTabbar',
    component: myTabbar
  }
]

export default routes
