<template lang="pug">
div
  .page.js_show
    .page__hd
      slot(name='hd')
    .page__bd
      slot(name='bd')
    .page__ft
      slot(name='ft')
</template>
<script>
export default {
  name: 'page'
}
</script>
<style>
.page {
  overflow-y: auto;
  z-index: 1;
  background-color: #f8f8f8;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.page.js_show {
  opacity: 1;
}
</style>
