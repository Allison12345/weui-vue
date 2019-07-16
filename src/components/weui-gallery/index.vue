<template lang="pug">
  .weui-gallery(:style="{display: 'block'}" @touchstart='onTouchstart' @touchend='onTouchend')
    span.weui-gallery__img(:style="{width: '100%', height: 'auto', backgroundImage: `url(${img})`} ")
    .weui-gallery__opr(@click='$emit("delete")')
      a.weui-gallery__del
        i.weui-icon-delete.weui-icon_gallery-delete
</template>

<script>
export default {
  name: 'weui-gallery',
  props: ['img'],
  data() {
    return {
      startX: 0
    }
  },
  methods: {
    onTouchstart(event) {
      this.startX = event.changedTouches[0].clientX
    },
    onTouchend(event) {
      this.$emit('move', event.changedTouches[0].clientX > this.startX)
    }
  }
}
</script>
