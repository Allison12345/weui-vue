<template lang="pug">
div
  weui-cells(form='form' title='标题')
    weui-cell
      label.weui-label(slot='hd') 请输入qq
      weui-input(slot='bd' placeholder='qq号' v-model='qq')
      div(slot='ft') ft
    weui-cell
      label.weui-label(slot='hd') qq
      div(slot='bd') {{qq}}
    weui-cell(access='access')
      label.weui-label(slot='hd') hd
      div(slot='bd') bd
  weui-cells(title='标题😊' tips='底部说明文字')
    weui-cell
      label.weui-label(slot='hd') 请输入qq
      weui-input(slot='bd' placeholder='qq号' v-model='qq')
      div(slot='ft') ft
    weui-cell(vcode='vcode')
      label.weui-label(slot='hd') 手机号
      weui-input(slot='bd' type='tel' placeholder='请输入手机号')
      weui-vcode(slot='ft' btn='获取验证码' @click='onClick("验证码")') 
    weui-cell
      label.weui-label(slot='hd') 日期
      weui-input(slot='bd' type='date')
    weui-cell
      label.weui-label(slot='hd') 时间
      weui-input(slot='bd' type='datetime-local')
    weui-cell(vcode='vcode')
      label.weui-label(slot='hd') 验证码
      weui-input(slot='bd' type='number' placeholder='请输入验证码')
      weui-vcode-img(slot='ft' src='./images/vcode.jpg')
  weui-cells(title='表单报错')
    weui-cell(warn='warn')
      label.weui-label(slot='hd') 卡号
      weui-input(slot='bd' type='number' pattern="[0-9]*" value='weui-input-error' placeholder='请输入卡号')
      weui-icon-warn(slot='ft' )
  weui-cells(form='form')
    weui-cell(switchs='switch')    
      label.weui-label(slot='bd') 标题文字
      weui-switch-input(slot='ft' type='checkbox')
    weui-cell(switchs='switch')
      label.weui-label(slot='bd') 兼容IE EDGE的版本
      label.weui-switch-cp(slot='ft' )
        weui-switch-cp-input(type='checkbox' checked='checked')
        weui-switch-cp-box()
  weui-cells(title='文本框')
    weui-cell
      weui-input(slot='bd' type='text' placeholder='请输入文本' )
  weui-cells(title='文本域' form='form') 
    weui-cell
      weui-textarea(slot='bd' placeholder='请输入文本' row='3')
        weui-textarea-counter()
</template>

<script>
export default {
  name: 'cells',
  data() {
    return {
      qq: ''
    }
  },
  methods: {
    onClick(type) {
      console.log(type)
    }
  }
}
</script>
