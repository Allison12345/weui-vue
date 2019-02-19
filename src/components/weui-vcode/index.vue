<template lang="pug">
  button.weui-vcode(:class='{'weui-vcode-btn'=btn}' @click='onClick')
</template>
<script>
export default {
  name: 'button',
  methods: {
    onClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
