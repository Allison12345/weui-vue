<template lang="pug">
  .weui-form-preview(v-if='isShown')
    .weui-form-preview__hd
       weui-form-preview-item(:title='label' :desc='value' )
    .weui-form-preview__bd
      weui-form-preview-item(v-for='(item,index) of list' v-bind='item' :key='index')
    .weui-form-preview__ft
      .weui-form-preview__btn.weui-from-preview__btn_primary(@click='onClick()') 删除
</template>
<script>
export default {
  name: 'weui-form-preview',
  props: ['label', 'value', 'list'],
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
