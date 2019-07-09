<template lang="pug">
  .weui-panel(:class='{"weui-panel_access":access}')
    .weui-panel__hd {{hd}}
    .weui-panel__bd
      slot(name='bd')
    .weui-panel__ft
      slot(name='ft')
</template>
<script>
export default {
  name: 'weui-panel-access',
  data() {
    return {
      model: false
    }
  },
  props: ['access', 'hd']
}
</script>
