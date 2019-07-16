<template lang="pug">
page.dialog(title='Dialog' desc='对话框' spacing='true')
  template(slot='bd')
    weui-button(type='default' @click='isShown=true;type="confirm"') iOS Dialog样式一
    weui-button(type='default' @click='isShown=true;type="alert"') iOS Dialog样式二
    weui-mask(v-if='isShown')
      weui-dialog(:type='type' title='弹窗标题' content='弹窗内容' cancelTxt="取消" confirmTxt='确认' @cancel='onCancel' @confirm='onConfirm')
</template>
<script>
export default {
  name: 'dialog-page',
  data() {
    return {
      isShown: false,
      type: ''
    }
  },
  methods: {
    onCancel() {
      console.log('cancel')
      this.isShown = false
    },
    onConfirm() {
      console.log('confirm')
      this.isShown = false
    }
  }
}
</script>
