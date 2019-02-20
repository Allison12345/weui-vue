<template lang="pug">
div
  weui-cells(form='form' title='标题')
    weui-cell(hd='请输入qq' ft='ft') 
      weui-input(slot='bd' placeholder='qq号' v-model='qq')
    weui-cell(hd='qq' bd='qq')
    weui-cell(access='access' hd='hd' bd='bd')
  weui-cells(title='标题😊' tips='底部说明文字')
    weui-cell(hd='请输入qq' ft='ft')
      weui-input(slot='bd' placeholder='qq号' v-model='qq') 
    weui-cell(vcode='vcode' hd='手机号')
      weui-input(slot='bd' type='tel' placeholder='请输入手机号')
      weui-vcode(slot='ft' btn='获取验证码' @click='onClick("验证码")') 
    weui-cell(hd='日期' :ft='null')
      weui-input(slot='bd' type='date')
    weui-cell(hd='时间' :ft='null')
      weui-input(slot='bd' type='datetime-local')
    weui-cell(vcode='vcode' hd='验证码') 
      weui-input(slot='bd' type='number' placeholder='请输入验证码')
      weui-vcode-img(slot='ft' src='https://weui.io/images/vcode.jpg')
  weui-cells(title='表单报错')
    weui-cell(warn='warn' hd='卡号') 
      weui-input(slot='bd' type='number' pattern="[0-9]*" value='weui-input-error' placeholder='请输入卡号')
      weui-icon-warn(slot='ft' )
  weui-cells(form='form')
    weui-cell(switchs='switch' :hd='null' bd='标题文字')    
      weui-switch-input(slot='ft' type='checkbox')
    weui-cell(switchs='switch' :hd='null' bd='兼容IE EDGE的版本')
      label.weui-switch-cp(slot='ft')
        weui-switch-cp-input(type='checkbox' checked='checked')
        weui-switch-cp-box
  weui-cells(title='文本框')
    weui-cell(:hd='null' :ft='null')
      weui-input(slot='bd' type='text' placeholder='请输入文本')
  weui-cells(title='文本域' form='form')
    weui-cell(:hd='null' :ft='null')
      template(slot='bd')
        weui-textarea(placeholder='请输入文本' :row='3' :maxlength='limit' v-model='textareaStr')
        weui-textarea-counter(:count='textareaStr.length' :limit='limit')
</template>

<script>
export default {
  name: 'cells',
  data() {
    return {
      qq: '',
      textareaStr: '',
      limit: 5
    }
  },
  methods: {
    onClick(type) {
      console.log(type)
    }
  }
}
</script>
