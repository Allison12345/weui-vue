<template lang="pug">
  a.weui-swiped-btn(:class='className' href='javascript:')
    slot
</template>
<script>
export default {
  name: 'weui-swiped',
  props: ['warn'],
  computed: {
    className() {
      const { warn } = this
      return {
        'weui-swiped-btn_warn': warn
      }
    }
  }
}
</script>
