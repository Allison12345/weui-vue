<template lang="pug">
  .page
    .page__hd
      slot(name='hd')
        .page__title {{title}}
        .page__desc {{desc}}
    .page__bd(:class='{"page__bd_spacing":spacing}')
      slot(name='bd')
    .page__ft
      slot(name='ft')
</template>
<script>
export default {
  name: 'page',
  props: ['title', 'desc', 'spacing']
}
</script>
<style>
.page {
  overflow-y: auto;
  z-index: 1;
  background-color: #f8f8f8;
  width: 100%;
  height: 100%;
}
.page.js_show {
  opacity: 1;
}
.page__hd {
  padding: 40px;
}
.page__bd_spacing {
  padding: 0 16px;
}
.page__ft {
  padding-top: 40px;
  padding-bottom: 10px;
  text-align: center;
}
.page__title {
  margin-bottom: 15px;
  text-align: left;
  font-weight: 400;
}
.page__desc {
  margin-top: 5px;
  color: #888;
  text-align: left;
  font-size: 14px;
}
</style>
