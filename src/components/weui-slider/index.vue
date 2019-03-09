<template lang="pug">
  .weui-slider(ref='slider' :class='{vertical}')
    .weui-slider__inner
      .weui-slider__track(:style='cptTrackStyle')
      .weui-slider__handler(@touchstart='onTouchStart' @touchmove='onTouchMove' :style='cptHandlerStyle')
</template>

<script>
export default {
  name: 'weui-slider',
  props: ['value', 'vertical'],
  data() {
    return {
      startX: 0,
      startY: 0
    }
  },
  methods: {
    onTouchStart(event) {
      if (this.vertical) {
        this.startY = event.changedTouches[0].clientY
      } else {
        this.startX = event.changedTouches[0].clientX
      }
    },
    onTouchMove(event) {
      if (this.vertical) {
        const dist = event.changedTouches[0].clientY - this.startY
        this.startY = event.changedTouches[0].clientY
        const sliderHeight = this.$refs.slider.clientHeight
        const percent = parseInt((dist / sliderHeight) * 100, 10)
        this.$emit('move', percent)
      } else {
        const dist = event.changedTouches[0].clientX - this.startX
        this.startX = event.changedTouches[0].clientX
        const sliderWidth = this.$refs.slider.clientWidth
        const percent = parseInt((dist / sliderWidth) * 100, 10)
        this.$emit('move', percent)
      }
    }
  },
  computed: {
    cptTrackStyle() {
      if (this.vertical) return { height: this.value }
      return { width: this.value }
    },
    cptHandlerStyle() {
      if (this.vertical) return { top: this.value }
      return { left: this.value }
    }
  }
}
</script>

<style lang="less">
.vertical {
  width: 32px;
  height: 300px;
  .weui-slider__inner {
    width: 2px;
    height: 100%;
  }
  .weui-slider__track {
    width: 2px;
  }
}
</style>
