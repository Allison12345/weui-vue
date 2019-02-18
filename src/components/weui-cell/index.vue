<template lang="pug">
  .weui-cell(:class='{"weui-cell_access":access}')
    .weui-cell__hd
      slot(name='hd')
    .weui-cell__bd
      slot(name='bd')
    .weui-cell__ft
      slot(name='ft')
</template>

<script>
export default {
  name: 'weui-cell',
  props: ['access']
}
</script>
