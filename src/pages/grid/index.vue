<template lang="pug">
  .page.grid
    .page__hd
      h1.page__title 九宫格
      p.page__desc Grid
    weui-grids(:items='items')
</template>
<script>
export default {
  name: 'weui-myGrid',
  data() {
    return {
      items: new Array(9)
        .fill(0)
        .map((item, index) => require(`@/assets/imgs/IMG_${index}.png`))
    }
  }
}
</script>
