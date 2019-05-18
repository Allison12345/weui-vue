<template lang="pug">
  .weui-navbar
    .weui-navbar__item(v-for='(item,key) of items' @click='onClick(key)'  :key='key' :class='{"weui-bar__item_on":index===key}') {{item}}
</template>
<script>
import { SAVE_NAV_INDEX } from '@/store'
export default {
  name: 'weui-navbar',
  props: ['items'],
  data() {
    return {
      index: 0
    }
  },
  methods: {
    onClick(key) {
      this.index = key
      this.$store.commit(SAVE_NAV_INDEX, this.index)
    }
  }
}
</script>
