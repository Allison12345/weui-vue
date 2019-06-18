<template lang="pug">
  .weui-grids
    a.weui-grid(v-for='(item,index) in items' :key ='index')
      img(:src="item" :style='{width: "100%", height: "100&", display: "block"}')
</template>
<script>
export default {
  name: 'weui-myGrids',
  props: ['items']
}
</script>
<style>
.weui-grids {
  position: relative;
  overflow: hidden;
}
.weui-grid {
  position: relative;
  float: left;
  padding: 20px 10px;
  width: 33.33333333%;
  box-sizing: border-box;
}
</style>
