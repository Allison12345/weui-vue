<template lang="pug">
  button.weui-vcode-btn(@click='onClick')
    slot
</template>
<script>
export default {
  name: 'weui-vcode',
  methods: {
    onClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
