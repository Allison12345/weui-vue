import inputs from '@/pages/inputs'
import buttons from '@/pages/buttons'
import cells from '@/pages/cells'
import list from '@/pages/list'
import home from '@/pages/home'
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
  }
]

export default routes
