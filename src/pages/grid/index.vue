<template lang="pug">
  page.grid(title='九宫格' desc='Grid')
    weui-grids(:items='items' slot='bd')
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
