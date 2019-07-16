<template lang="pug">
  page.gallery(title='Gallery' desc='上传图片')
    weui-gallery(:img='imgs[currentIndex]' @delete='onDelete' slot='bd' @move='onMove')
</template>
<script>
export default {
  name: 'weui-myGallery',
  data() {
    return {
      currentIndex: 0,
      imgs: Array(9)
        .fill(0)
        .map((img, index) => require(`@/assets/imgs/IMG_${index}.png`))
    }
  },
  methods: {
    onDelete() {
      if (this.imgs.length > 1) {
        this.imgs = this.imgs.filter(
          (img, index) => this.currentIndex !== index
        )
      }
    },
    onMove(isRight) {
      if (isRight) {
        if (this.currentIndex > 0) {
          this.currentIndex--
        }
      } else {
        if (this.currentIndex < this.imgs.length - 1) {
          this.currentIndex++
        }
      }
    }
  }
}
</script>
