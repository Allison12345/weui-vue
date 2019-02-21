<template lang="pug">
  input.weui-agree__checkbox(:id='id' :type='type')
</template>
<script>
export default {
  name: 'weui-agree-checkbox',
  props: ['id', 'type']
}
</script>
