<template lang="pug">
div
  .weui-cells__title(v-if='title') {{title}}
  .weui-cells(:class='{"weui-cells_form":form}')
    slot
  .weui-cells__tips(v-if='tips') {{tips}}
</template>

<script>
export default {
  name: 'weui-cells',
  props: ['form', 'title', 'tips']
}
</script>
<style>
.weui-cells {
  margin-top: 0;
}
</style>
