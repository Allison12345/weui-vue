<template lang="pug">
div
  .weui-progress
    .weui-progress__bar
      .weui-progress__inner-bar(:style='{width:`${data}`+ "%"}')
    a.weui-progress__opr
      i.weui-icon-cancel
  weui-btn-area
  weui-button(primary='primary' @click='percent2') 开始
</template>
<script>
export default {
  name: 'weui-progress',
  data() {
    return {
      data: 0
    }
  },
  methods: {
    percent() {
      if (this.data === 100) return
      this.data++
      setTimeout(this.percent, 10)
    },
    percent2() {
      const inter = setInterval(() => {
        this.data += 5
        if (this.data === 100) clearInterval(inter)
      }, 1000)
    }
  }
}
</script>
