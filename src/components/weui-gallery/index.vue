<template lang="pug">
  .weui-gallery(:style="{display: 'block'}" )
    span.weui-gallery__img(:style="{width: '100%', height: 'auto', backgroundImage: `url(${img})`, transform: `translateX(${tsX}px)`} " @touchmove='onTouchMove' @touchstart='onTouchstart' @touchend='onTouchend' @click='$emit("back")')
    .weui-gallery__opr(@click.stop='$emit("delete")')
      a.weui-gallery__del
        i.weui-icon-delete.weui-icon_gallery-delete
</template>

<script>
export default {
  name: 'weui-gallery',
  props: ['img'],
  data() {
    return {
      startX: 0,
      tsX: 0
    }
  },
  methods: {
    onTouchstart(event) {
      this.startX = event.changedTouches[0].clientX
    },
    onTouchend(event) {
      this.tsX = 0
      if (Math.abs(event.changedTouches[0].clientX - this.startX) > 5)
        this.$emit('move', event.changedTouches[0].clientX > this.startX)
    },
    onTouchMove(event) {
      this.tsX = event.changedTouches[0].clientX - this.startX
    }
  }
}
</script>
