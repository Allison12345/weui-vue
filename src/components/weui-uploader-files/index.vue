<template lang="pug">
  ul.weui-uploader-files
    li.weui-uploader-file()
      slot=('hd')
</template>
<script>
export default {
  name: 'weui-uploader-files'
}
</script>
