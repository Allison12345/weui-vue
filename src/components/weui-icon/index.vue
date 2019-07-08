<template lang="pug">
  i(:class='className')
</template>
<script>
export default {
  name: 'weui-icon',
  props: ['type', 'isMsg', 'isPrimary'],
  computed: {
    className() {
      const { type, isMsg, isPrimary } = this
      const className = [`weui-icon-${type}`]
      if (isMsg) {
        className.push('weui-icon_msg')
      }
      if (isPrimary) className[0] = 'weui-icon_msg-primary weui-icon-warn'
      return className
    }
  }
}
</script>
