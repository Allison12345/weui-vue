<template lang="pug">
div
  weui-cells(from='from')
    weui-cell(:hd='null' :ft='null')
      weui-uploader(slot='bd')
        p.weui-uploader__title(slot='hd') 图片上传
        weui-uploader-info(slot='hd')
        weui-uploader-files(slot='bd' src='https://weui.io/images/pic_160.png')
          
</template>
<script>
export default {
  name: 'uploader'
}
</script>
