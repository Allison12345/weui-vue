<template lang="pug">
  .weui-grids
    a.weui-grid(v-for='(img,index) in items' :key ='index')
      .weui-grid__icon
        img(:src="img" :style='{width: "100%", height: "100%", display: "block"}')
      p.weui-grid__label Grid
</template>
<script>
export default {
  name: 'weui-grids',
  props: ['items']
}
</script>
