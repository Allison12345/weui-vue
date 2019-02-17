import 'weui'

import Vue from 'vue'
import App from './App.vue'
import components from './components'
import router from './router'
import store from './store'

Vue.use(components)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
