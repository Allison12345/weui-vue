<template lang="pug">
  weui-slider(:value='value')
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
