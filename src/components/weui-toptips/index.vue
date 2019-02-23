<template lang="pug">
  .weui-toptips(:class='className' style='display: block;')
    slot
</template>
<script>
export default {
  name: 'weui-toptips',
  props: ['warn'],
  computed: {
    className() {
      const { warn } = this
      return { 'weui-toptips_warn': warn }
    }
  }
}
</script>
