import inputs from '@/pages/inputs'
import buttons from '@/pages/buttons'
import cells from '@/pages/cells'
import list from '@/pages/list'
import home from '@/pages/home'
import slider from '@/pages/slider'
import uploader from '@/pages/uploader'
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
  }
]

export default routes
