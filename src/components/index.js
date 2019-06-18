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
import Pane from './pane'
import WeuiSlider from './weui-slider'
import WeuiSliderBox from './weui-slider-box'
import WeuiUploader from './wuei-uploader'
import WeuiUploaderInfo from './weui-uploader-info'
import WeuiUploaderFiles from './weui-uploader-files'
import Page from './page'
import WeuiArticle from './weui-article'
import WeuiActionSheet from './weui-actionsheet'
import WeuiMask from './weui-mask'
import WeuiDialog from './weui-dialog'
import WeuiMsg from './weui-msg'
import WeuiToast from './weui-toast'
import WeuiLoadingToast from './weui-loading-toast'
import WeuiMaskTransparent from './weui-mask-transparent'
import WeuiNavbar from './weui-navbar'
import WeuiPanel from './weui-panel'
import WeuiTabbar from './weui-tabbar'
import WeuiFlex from './weui-flex'
import WeuiFlexItem from './weui-flex-item'
import WeuiGallery from './weui-gallery'
import WeuiMyGrids from './weui-grids'
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
  WeuiBtnArea,
  Pane,
  WeuiSlider,
  WeuiSliderBox,
  WeuiUploader,
  WeuiUploaderInfo,
  WeuiUploaderFiles,
  Page,
  WeuiArticle,
  WeuiActionSheet,
  WeuiMask,
  WeuiDialog,
  WeuiMsg,
  WeuiToast,
  WeuiLoadingToast,
  WeuiMaskTransparent,
  WeuiNavbar,
  WeuiPanel,
  WeuiTabbar,
  WeuiFlex,
  WeuiFlexItem,
  WeuiGallery,
  WeuiMyGrids
]

const install = Vue => {
  if (install.installed) return
  install.installed = true
  components.map(component => Vue.component(component.name, component))
}

export default {
  install
}
