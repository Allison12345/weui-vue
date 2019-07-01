<template lang="pug">
  i(:class='className')
</template>
<script>
export default {
  name: 'weui-icon',
  props: ['type', 'isMsg', 'isPrimary', 'circleType'],
  computed: {
    className() {
      const { type, isMsg, isPrimary, circleType } = this
      const className = [`weui-icon-${type}`]
      if (isMsg) {
        if (isPrimary) className.push('weui-icon_msg-primary')
        else className.push('weui-icon_msg')
      }
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
