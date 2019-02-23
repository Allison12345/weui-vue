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
import WeuiBtnArea from './weui-btn-area'
import WeuiTextareaCounter from './weui-textarea-counter'
import WeuiSelect from './weui-select'
import WeuiAgreeCheckBox from './weui-agree-checkbox'
import WeuiAgreeText from './weui-agree-text'
import WeuiSwiped from './weui-swiped'
import WeuiToptips from './weui-toptips'
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
  WeuiTextareaCounter,
  WeuiSelect,
  WeuiAgreeCheckBox,
  WeuiAgreeText,
  WeuiSwiped,
  WeuiToptips,
  WeuiBtnArea
]

const install = Vue => {
  if (install.installed) return
  install.installed = true
  components.map(component => Vue.component(component.name, component))
}

export default {
  install
}
