<template lang="pug">
div
  .my-article.js_show
    .page__hd
      slot(name='hd')
    .page__bd
      slot(name='bd')
    .page__ft
      slot(name='ft')
</template>
<script>
export default {
  name: 'my-article'
}
</script>
<style>
.my-article {
  overflow-y: auto;
  z-index: 1;
  background-color: #f8f8f8;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.my-article.js_show {
  opacity: 1;
}
</style>
