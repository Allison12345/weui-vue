<template lang="pug">
  textarea.weui-textarea(:placeholder='placeholder' :rows='rows')
    slot
</template>
<script>
export default {
  name: 'weui-textarea',
  props: ['placeholder', 'rows']
}
</script>
