import WeuiButton from './weui-button'
import WeuiInput from './weui-input'
import WeuiCell from './weui-cell'
import WeuiCells from './weui-cells'
import WeuiVcode from './weui-vcode'
const components = [WeuiButton, WeuiInput, WeuiCells, WeuiCell, WeuiVcode]

const install = Vue => {
  if (install.installed) return
  install.installed = true
  components.map(component => Vue.component(component.name, component))
}

export default {
  install
}
