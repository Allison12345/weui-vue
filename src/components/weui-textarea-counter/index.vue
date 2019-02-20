<template lang="pug">
  .weui-textarea-counter {{count}}/{{limit}}
</template>

<script>
export default {
  name: 'weui-textarea-counter',
  props: ['count', 'limit']
}
</script>
