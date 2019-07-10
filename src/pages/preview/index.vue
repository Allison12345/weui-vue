<template lang="pug">
  .page.preview
    .page__hd
      h1.page__title Preview
        p.page__desc 表单预览
    .page__bd
      weui-form-preview(v-for='(item,index) of items' :key='index' v-bind='item')
</template>
<script>
export default {
  name: 'weui-preview',
  data() {
    return {
      items: Array(2)
        .fill(0)
        .map(() => ({
          label: '付款金额',
          value: '2400',
          list: Array(3)
            .fill(0)
            .map((item, index) => ({
              title: `标题${index}`,
              desc: `电动打蛋机${index}`
            }))
        }))
    }
  }
}
</script>
