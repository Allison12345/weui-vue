<template lang="pug">
  a.weui-swiped-btn(:class='className' href='href')
</template>
<script>
export default {
  name: 'weui-swiped',
  props: ['warn', 'href'],
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
