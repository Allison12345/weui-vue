<template lang="pug">
  .weui-gallery(:style="{display: 'block'}")
    span.weui-gallery__img
      img(v-for='(img,index) of imgs' :src="img" :key="index" :style="{width: '100%', height: '100%'} ")
    .weui-gallery__opr
      a.weui-gallery__del
        i.weui-icon-delete.weui-icon_gallery-delete
</template>
<script>
export default {
  name: 'weui-gallery',
  props: ['imgs'],
  data() {
    return {
      index: 0
    }
  }
}
</script>
<style>
.weui-gallery__img {
  position: absolute;
  top: env(safe-area-inset-top);
  right: env(safe-area-inset-right);
  bottom: calc(60px + env(safe-area-inset-bottom));
  left: env(safe-area-inset-left);
  background: center center no-repeat;
  background-size: contain;
}
</style>
