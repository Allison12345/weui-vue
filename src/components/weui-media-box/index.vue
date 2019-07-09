<template lang="pug">
  .weui-media-box(:class='className')
    slot
      .weui-media-box__hd
      .weui-medis-box__bd
</template>

<script>
export default {
  name: 'weui-media-box',
  props: ['type', 'isSmall'],
  computed: {
    className() {
      const { type, isSmall } = this
      const className = [`weui-media-box_${type}`]
      if (isSmall) {
        className[0] = 'weui-media-box_small-appmsg'
      }
      return className
    }
  }
}
</script>
