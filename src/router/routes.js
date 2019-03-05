import inputs from '@/pages/inputs'
import buttons from '@/pages/buttons'
import cells from '@/pages/cells'
import list from '@/pages/list'
import home from '@/pages/home'
import slider from '@/pages/slider'
import uploader from '@/pages/uploader'
import article from '@/pages/article'
import badge from '@/pages/badge'
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
  }
]

export default routes
