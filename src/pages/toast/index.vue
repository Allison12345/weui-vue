<template lang="pug">
  .page.toast
    .page__hd
      h1.page__title Toast
      p.page__desc 弹出式提示
    .page__bd.page__bd_spacing
      weui-button(type='default' @click='isShown=true;finish=true;onClick()' ) 成功提示
      weui-button(type='default' @click='isShown=true;loading=true;onClick()' ) 加载中提示
    weui-mask-transparent(v-if='isShown' )
      weui-toast(v-if='finish')
      weui-loading-toast(v-if='loading')
</template>
<script>
export default {
  name: 'toast',
  data() {
    return {
      isShown: false,
      finish: false,
      loading: false
    }
  },
  methods: {
    onClick() {
      console.log('success')
      setTimeout(() => {
        this.isShown = false
        this.finish = false
        this.loading = false
      }, 3000)
    }
  }
}
</script>
