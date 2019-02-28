<template lang="pug">
  .weui-slider-box
    weui-slider
    .weui-slider-box__value {{value}}
</template>
<script>
export default {
  name: 'weui-slider-box',
  props: ['value']
}
</script>
