<template lang="pug">
  .icon-box__ctn
    h3.icon-box__title {{title}}
    p.icon_box__desc {{desc}}
</template>
<script>
export default {
  name: 'weui-icon-box-ctn',
  props: ['title', 'desc']
}
</script>
<style>
.icon-box__title {
  font-weight: 400;
}
.icon-box__desc {
  margin-top: 6px;
  font-size: 12px;
  color: #888;
}
</style>
