<template lang="pug">
div
  weui-slider
  weui-slider-box(:value='value')
</template>
<script>
export default {
  name: 'slider',
  data() {
    return {
      value: 65
    }
  }
}
</script>
