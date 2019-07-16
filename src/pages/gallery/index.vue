<template lang="pug">
  page.gallery(title='Gallery' desc='上传图片')
      weui-gallery(:imgs='imgs' slot='bd')
</template>
<script>
export default {
  name: 'weui-myGallery',
  data() {
    return {
      imgs: [
        '@/assets/imgs/IMG_7335.png',
        '@/assets/imgs/IMG_7330.png',
        '@/assets/imgs/IMG_7336.png',
        '@/assets/imgs/IMG_7366.png'
      ]
    }
  }
}
</script>
