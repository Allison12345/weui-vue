<template lang="pug">
  i(:class='className')
</template>
<script>
export default {
  name: 'weui-icon',
  props: ['type', 'isPrimary', 'circleType'],
  computed: {
    className() {
      const { type, isPrimary, circleType } = this
      const className = [`weui-icon-${type}`]
      if (type) {
        className.push('weui-icon_msg')
      } else if (isPrimary)
        className[0] = 'weui-icon_msg-primary weui-icon-warn'
      if (circleType) {
        if (type === 'success') {
          className[0] = 'weui-icon-success-no-circle'
        } else if (type === 'info') {
          className[0] = 'weui-icon-info-circle'
        }
      }
      return className
    }
  }
}
</script>
