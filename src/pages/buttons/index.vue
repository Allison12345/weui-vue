<template lang="pug">
  div
    weui-button(type='primary' @click='onClick("primary")') 主要按钮
    weui-button(type='primary' @click='onClick("primary")' loading='loading') 主要按钮
    weui-button(type='primary' @click='onClick("primary")' disabled='disabled') 主要按钮
    weui-button(type='default' label='默认按钮' @click='onClick("default")') 主要按钮
    weui-button(type='default' label='默认按钮' @click='onClick("default")' loading='a') 主要按钮
    weui-button(type='default' label='默认按钮' @click='onClick("default")' disabled=' ') 主要按钮
    weui-button(type='warn' label='警告按钮' @click='onClick("warn")') 主要按钮
    weui-button(type='warn' label='警告按钮' @click='onClick("warn")' loading='loading') 主要按钮
    weui-button(type='warn' label='警告按钮' @click='onClick("warn")' disabled='disabled') 主要按钮
    weui-button(type='primary' @click='onClick("primary plain")' plain='plain') 主要按钮
    weui-button(type='primary' @click='onClick("primary mini")' mini='mini') 主要按钮
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
