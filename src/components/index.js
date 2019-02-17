import btn from './btn'

const components = [btn]

const install = Vue => {
  if (install.installed) return
  install.installed = true
  components.map(btn => Vue.component(btn.name, btn))
}

export default {
  install
}
