<template lang="pug">
  span.weui-textarea-counter(:count='conut' :limit='limit')
</template>
<script>
export default {
  name: 'weui-textarea-counter',
  props: ['count', 'limit']
}
</script>
