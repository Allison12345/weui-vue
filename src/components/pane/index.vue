<template lang="pug">
  li(@click='toggleShow()')
    .weui-flex
      p.weiu-flex__item {{label}}
      img(:src='src')
    .page-category(v-if='isShow')
      weui-cells
        weui-cell(v-for='item of items' :key='item.path' :hd='null' access='access' :bd='item.label' @click='onClick(item.path)')
</template>
<script>
export default {
  name: 'pane',
  props: ['label', 'icon', 'items'],
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    onClick(path) {
      console.log(path)
      this.$router.push(path)
    },
    toggleShow() {
      this.isShow = !this.isShow
    }
  },
  computed: {
    src() {
      return `https://weui.io/images/${this.icon}.png`
    }
  }
}
</script>
