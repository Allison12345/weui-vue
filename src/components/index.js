import btn from './btn'
import ipt from './ipt'
const components = [btn, ipt]

const install = Vue => {
  if (install.installed) return
  install.installed = true
  components.map(component => Vue.component(component.name, component))
}

export default {
  install
}
