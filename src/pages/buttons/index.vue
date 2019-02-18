<template lang="pug">
  div
    weui-button(type='primary' label='主要按钮' @click='onClick("primary")')
    weui-button(type='primary' label='主要按钮' @click='onClick("primary")' loading='loading')
    weui-button(type='primary' label='主要按钮' @click='onClick("primary")' disabled='disabled')
    weui-button(type='default' label='默认按钮' @click='onClick("default")')
    weui-button(type='default' label='默认按钮' @click='onClick("default")' loading='a')
    weui-button(type='default' label='默认按钮' @click='onClick("default")' disabled=' ')
    weui-button(type='warn' label='警告按钮' @click='onClick("warn")')
    weui-button(type='warn' label='警告按钮' @click='onClick("warn")' loading='loading')
    weui-button(type='warn' label='警告按钮' @click='onClick("warn")' disabled='disabled')
    weui-button(type='primary' label='主要按钮' @click='onClick("primary plain")' plain='plain')
    weui-button(type='primary' label='主要按钮' @click='onClick("primary mini")' mini='mini')
</template>

<script>
export default {
  name: 'buttons',
  methods: {
    onClick(type) {
      console.log(type)
    }
  }
}
</script>
