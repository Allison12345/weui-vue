<template lang="pug">
  .weui-tabbar
    a.weui-tabbar__item(v-for='(item,key) of items' @click='onClick(key)' :class='{"weui-bar__item_on": index === key}')
      span(:style="{display: 'inline-block',position: 'relative'}")
        img.weui-tabbar__icon(src='@/assets/imgs/icon_tabbar.png')
        span.weui-badge(:style="{position: 'absolute',top: '-2px',right: '-13px'}")
      p.weui-tabbar__label {{item}}
</template>
<script>
import { SAVE_TABBAR_INDEX } from '@/store'
export default {
  name: 'weui-tabbar',
  props: ['items'],
  data() {
    return {
      index: 0
    }
  },
  methods: {
    onClick(key) {
      this.index = key
      this.$store.commit(SAVE_TABBAR_INDEX, this.index)
    }
  }
}
</script>
<style>
.span {
  display: inline-block;
  position: relative;
}
</style>
