<template lang="pug">
  input.weui-switch-cp__input(:type='type' :checked='checked')
</template>
<script>
export default {
  name: 'weui-switch-cp-input',
  props: ['type', 'checked']
}
</script>
