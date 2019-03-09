<template lang="pug">
  .weui-slider-box
    weui-slider(:value='value' @move='onMove')
    .weui-slider-box__value {{value}}
</template>
<script>
export default {
  name: 'weui-slider-box',
  props: ['value'],
  methods: {
    onMove(percent) {
      this.$emit('move', percent)
    }
  }
}
</script>
