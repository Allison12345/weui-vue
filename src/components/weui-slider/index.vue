<template lang="pug">
div
  .weui-slider
    .weui-slider__inner
      .weui-slider__track(:style='{width:start}')
      .wuei-slider__handler(:style='{left:start}')
  .weui-slider-box
    .weui-slider__inner
        .weui-slider__track(:style='{width:`${end}%`}')
        .wuei-slider__handler(:style='{left:`${end}%`}')
    .weui-slider-box__value {{value}}
</template>

<script>
export default {
  name: 'weui-slider',
  props: ['value'],
  data() {
    return {
      start: 0,
      end: 80
    }
  }
}
</script>
