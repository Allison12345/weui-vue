<template lang="pug">
div
  weui-cells(form='form' title='标题')
    weui-cell(hd='请输入qq' ft='ft') 
      weui-input(slot='bd' placeholder='qq号' v-model='qq')
    weui-cell(hd='qq' bd='qq')
    weui-cell(access='access' hd='hd' bd='bd')
  weui-cells(title='标题' tips='底部说明文字')
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
  weui-cells(title='选择')
    weui-cell(select='select' :ft='null')
      .weui-cell__hd(slot='hd')
        weui-select(name='select2' :items='select2Items')
      weui-input(slot='bd' type='number' pattern='[0-9]*' placeholder='请输入号码' :maxlength='11')
  weui-cells(title='选择')
  weui-cells
    weui-cell(selects='select' :hd='null' :ft='null')
      .weui-cell-bd(slot='bd')
        weui-select(name='select1' :items='select1Items')
    weui-cell(selectss='select' :ft='null' hd='国家/地区')
        weui-select(slot='bd' name=select3 :items='select3Items')
  label.weui-agree(for='weuiAgree')
    weui-agree-checkbox(id='weuiAgree' type='checkbox')
    weui-agree-text() "阅读并同意"
      a(href='javascript:void(0)') 《相关条款》
  weui-btn-area
    weui-button(type='primary' href='javascript:' id='showTooltips' label='确定' @click='onClick("primary")') 
</template>

<script>
export default {
  name: 'cells',
  data() {
    return {
      qq: '',
      textareaStr: '',
      limit: 5,
      select2Items: [
        { label: '+86', value: '1' },
        { label: '+80', value: '2' },
        { label: '84', value: '3' },
        { label: '87', value: '4' }
      ],
      select1Items: [
        { label: '微信号', value: '1' },
        { label: 'QQ号', value: '2' },
        { label: 'Email', value: '3' }
      ],
      select3Items: [
        { label: '中国', value: '1' },
        { label: '美国', value: '2' },
        { label: '法国', value: '3' }
      ]
    }
  },
  methods: {
    onClick(type) {
      console.log(type)
    }
  }
}
</script>
