<template lang="pug">
div
  weui-mask.weui-animate-fade-in
  .weui-picker.weui-animate-slide-up
    .weui-picker__hd
      a.weui-picker__action(@click='onCancel') 取消
      a.weui-picker__action(@click='onConfirm') 确定
    .weui-picker__bd
      .weui-picker__group(v-for='(item,index) of items' :key='index' class="wrapper" ref='wrapper')
        .weui-picker__content
          .weui-picker__item(v-for='(a,key) of item' :key='key') {{a}}
        .weui-picker__mask
        .weui-picker__indicator
</template>
<script>
import BScroll from '@better-scroll/core'
import Wheel from '@better-scroll/wheel'
BScroll.use(Wheel)
export default {
  name: 'weui-picker',
  props: ['items', 'selectedIndex'],
  mounted() {
    this.initScroll()
  },
  methods: {
    onCancel() {
      this.$emit('cancel')
    },
    onConfirm() {
      this.$emit('confirm')
    },
    initScroll() {
      this.wheels = this.$refs.wrapper.map((group, index) =>
        this.createWheel(group, index)
      )
    },
    createWheel(group, index) {
      const wheel = new BScroll(group, {
        wheel: {
          selectedIndex: this.selectedIndex[index],
          wheelWrapperClass: 'weui-picker__content',
          wheelItemClass: 'weui-picker__item'
        },
        probeType: 3
      })
      wheel.on('scrollEnd', () => {
        this.$emit('change', index, wheel.getSelectedIndex())
      })
      return wheel
    }
  }
}
</script>

<style lang="less">
.weui-picker__group {
  overflow: hidden;
  .weui-picker__content {
    padding: 0;
    margin-top: 102px;
  }
}
</style>
