<template lang="pug">
  .page.preview
    .page__hd
      h1.page__title Preview
        p.page__desc 表单预览
    .page__bd
      weui-form-preview(v-for='(item,index) of items' :key='index' :title='item.title' :desc='item.desc')
</template>
<script>
export default {
  name: 'weui-preview',
  data() {
    return {
      items: [
        { title: '商品', desc: '电动打蛋机' },
        {
          title: '标题',
          desc: '商品的简介'
        }
      ]
    }
  }
}
</script>
