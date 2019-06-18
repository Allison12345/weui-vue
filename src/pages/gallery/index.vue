<template lang="pug">
  .page.gallery
    .page__hd
      h1.page__title Gallery
      p.page__desc 上传图片
    weui-gallery(:imgs='imgs')
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
