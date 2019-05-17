<template lang="pug">
  .page.toast
    .page__hd
      h1.page__title Toast
      p.page__desc 弹出式提示
    .page__bd.page__bd_spacing
      weui-button(type='default' @click='isShown=true') 成功提示
      weui-button(type='default' @click='isShown=true') 加载中提示
    weui-mask-transparent(v-if='isShown' )
      weui-toast
      weui-loading-toast
</template>
<script>
export default {
  name: 'toast',
  data() {
    return {
      isShown: false
    }
  },
  methods: {
    onClick() {
      console.log('success')
      setTimeout(() => {
        this.isShown = false
      }, 3000)
    }
  }
}
</script>
