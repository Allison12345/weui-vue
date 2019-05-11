<template lang="pug">
  li(@click='toggleShow()')
    .weui-flex.pane-hd
      p.weui-flex__item {{label}}
      img.pane-img(:src='src')
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
      return require(`@/assets/imgs/${this.icon}.png`)
    }
  }
}
</script>

<style>
.pane-hd {
  padding: 20px;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
}
.pane-img {
  width: 30px;
  height: 30px;
}
</style>
