<template lang="pug">
  .page.grid
    .page__hd
      h1.page__title 九宫格
      p.page__desc Grid
    weui-myGrids(:items='items')
</template>
<script>
export default {
  name: 'weui-myGrid',
  data() {
    return {
      items: [
        '@/assets/imgs/IMG_7335.png',
        '@/assets/imgs/IMG_7330.png',
        '@/assets/imgs/IMG_7336.png',
        '@/assets/imgs/IMG_7366.png',
        '@/assets/imgs/IMG_0648.png',
        '@/assets/imgs/IMG_0654.png',
        '@/assets/imgs/IMG_0681.png',
        '@/assets/imgs/IMG_0639.png',
        '@/assets/imgs/IMG_0041.png'
      ]
    }
  }
}
</script>
