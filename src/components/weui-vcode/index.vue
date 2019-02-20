<template lang="pug">
  button.weui-vcode-btn(@click='onClick') {{btn}}
</template>
<script>
export default {
  name: 'weui-vcode',
  props: ['btn'],
  methods: {
    onClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
