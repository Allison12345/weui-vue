<template lang="pug">
  input.weui-input(:value='value' @input='onInput' :type='type' :placeholder='placeholder' :maxlength='maxlength')
</template>

<script>
export default {
  name: 'weui-input',
  props: ['value', 'type', 'placeholder', 'maxlength'],
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
