<template lang="pug">
  .weui-form-preview(v-if='isShown')
    .weui-form-preview__hd
      .weui-form-preview-item
        label.weui-form-preview__label 付款金额
        em.weui-form-preview__value ¥24000
    .weui-form-preview__bd
      weui-form-preview-item(:title='title' :desc='desc')
      weui-form-preview-item(:title='title' :desc='desc')
    .weui-form-preview__ft
      .weui-form-preview__btn.weui-from-preview__btn_primary(@click='onClick()') 删除
</template>
<script>
export default {
  name: 'weui-form-preview',
  props: ['title', 'desc'],
  data() {
    return {
      isShown: true
    }
  },
  methods: {
    onClick() {
      this.isShown = false
    }
  }
}
</script>
