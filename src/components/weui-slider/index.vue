<template lang="pug">
  .weui-slider
    .weui-slider__inner
      .weui-slider__track(:style='{width:start}')
      .wuei-slider__handler(:style='{left:start}')
</template>

<script>
export default {
  name: 'weui-slider',
  data() {
    return {
      start: 0
    }
  }
}
</script>
