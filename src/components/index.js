import WeuiButton from './weui-button'
import WeuiInput from './weui-input'
import WeuiCell from './weui-cell'
import WeuiCells from './weui-cells'
import WeuiVcode from './weui-vcode'
import WeuiVcodeImg from './weui-vcode-img'
import WeuiIconWarn from './weui-icon'
import WeuiSwitchInput from './weui-switch-input'
import WeuiSwitchCp from './weui-switch-cp'
import WeuiSwitchCpInput from './weui-switch-cp-input'
import WeuiSwitchCpBox from './weui-switch-cp-box'
import WeuiTextarea from './weui-textarea'
import WeuiTextareaCounter from './weui-textarea-counter'
const components = [
  WeuiButton,
  WeuiInput,
  WeuiCells,
  WeuiCell,
  WeuiVcode,
  WeuiVcodeImg,
  WeuiIconWarn,
  WeuiSwitchInput,
  WeuiSwitchCp,
  WeuiSwitchCpInput,
  WeuiSwitchCpBox,
  WeuiTextarea,
  WeuiTextareaCounter
]

const install = Vue => {
  if (install.installed) return
  install.installed = true
  components.map(component => Vue.component(component.name, component))
}

export default {
  install
}
