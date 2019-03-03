<template lang="pug">
  .weui-uploader
    .weui-uploader__hd
      slot(name='hd')
    .weui-uploader__bd
      slot(name='bd')
</template>
<script>
export default {
  name: 'weui-uploader',
  props: ['hd', 'bd']
}
</script>
