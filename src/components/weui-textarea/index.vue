<template lang="pug">
  textarea.weui-textarea(:placeholder='placeholder' :maxlength='maxlength' :rows='rows' :value='value' @input='onInput')
</template>
<script>
export default {
  name: 'weui-textarea',
  props: ['placeholder', 'rows', 'value', 'maxlength'],
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
