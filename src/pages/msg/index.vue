<template lang="pug">
  .page.msg
    .page__hd
      h1.page__title msg
      p.page__desc 提示页
    .page__bd.page__bd_spacing
      weui-button(type='default' @click='onClick()') 成功提示页
      weui-button(type='default') 失败提示页
      weui-button(type='default') 无图标提示页
      weui-button(type='default') 无图标提示页
    .page__ft.j_bottom
</template>
<script>
export default {
  name: 'msg',
  methods: {
    onClick() {
      this.$router.push({ path: 'weuiMsg' })
    }
  }
}
</script>
