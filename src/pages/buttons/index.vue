<template lang="pug">
  div
    btn(type='primary' label='主要按钮' @click='onClick("primary")')
    btn(type='primary' label='主要按钮' @click='onClick("primary")' loading='loading')
    btn(type='primary' label='主要按钮' @click='onClick("primary")' disabled='disabled')
    btn(type='default' label='默认按钮' @click='onClick("default")')
    btn(type='default' label='默认按钮' @click='onClick("default")' loading='a')
    btn(type='default' label='默认按钮' @click='onClick("default")' disabled=' ')
    btn(type='warn' label='警告按钮' @click='onClick("warn")')
    btn(type='warn' label='警告按钮' @click='onClick("warn")' loading='loading')
    btn(type='warn' label='警告按钮' @click='onClick("warn")' disabled='disabled')
    btn(type='primary' label='主要按钮' @click='onClick("primary plain")' plain='plain')
    btn(type='primary' label='主要按钮' @click='onClick("primary mini")' mini='mini')
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
