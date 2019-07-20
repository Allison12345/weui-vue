<template lang="pug">
  li
    .weui-flex.pane-hd(@click='changeColor =! changeColor ' :class='{changeColor}')
      p.weui-flex__item {{label}}
      img.pane-img(:src='src')
    .page-category(v-if='isShow')
      weui-cells
        weui-cell(v-for='item of items' :key='item.path' :hd='null' access='access' :bd='item.label' @click='onClick(item.path)')
</template>
<script>
export default {
  name: 'pane',
  props: ['label', 'icon', 'items', 'isShow'],
  data() {
    return {
      changeColor: false
    }
  },
  methods: {
    onClick(path) {
      console.log(path)
      this.$router.push(path)
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
.page.home .page__bd li {
  margin: 8px 0;
  background-color: #fff;
  overflow: hidden;
  border-radius: 2px;
  cursor: pointer;
}

.changeColor {
  opacity: 0.5;
}
</style>
