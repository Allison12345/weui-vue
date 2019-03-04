<template lang="pug">
div
  .my-article
    .page__hd
      slot(name='hd')
    .page__bd(:class='{"page__bd_spacing": spacing}')
      slot(name='bd')
    .page__ft
      slot(name='ft')
</template>
<script>
export default {
  name: 'my-article',
  props: ['spacing']
}
</script>
<style>
.page {
  overflow-y: auto;
  z-index: 1;
}
.page.article {
  background-color: #ffffff;
}
.page.js_show {
  opacity: 1;
}
</style>
