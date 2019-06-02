<template lang="pug">
  .page.flex
    .page__hd
      h1.page__title Flex
      p.page__desc Flex 布局
    .page__bd.page__bd_spacing
      weui-flex
        weui-flex-item
      weui-flex
        weui-flex-item
        weui-flex-item
      weui-flex
        weui-flex-item
        weui-flex-item
        weui-flex-item
      weui-flex
        weui-flex-item
        weui-flex-item
        weui-flex-item
        weui-flex-item
      weui-flex
        div
          weui-flex-item 
        weui-flex-item
        div
          weui-flex-item
</template>
<script>
export default {
  name: 'weui-MyFlex'
}
</script>
