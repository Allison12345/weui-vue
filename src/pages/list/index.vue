<template lang="pug">
div
  weui-cells(title='带说明的列表项')
  weui-cells
    weui-cell(:hd='null' ft='说明文字')
      p.weui-cell(slot='bd') 标题文字
    weui-cell(swiped='swiped' :hd='null' bdStyle='transform: translateX(-68px)' @click='toggleShow()')
      weui-cell(slot='bd' :hd='null' ft="说明文字" )
        p(slot='bd') 标题文字
      .weui-cell__ft(slot='ft')
        weui-swiped(v-if='isShow' warn='warn' href='javascript:') 删除
  weui-cells(title='带图标、说明的列表项')
  weui-cells
    weui-cell(ft='说明文字')
      .weui-cell(slot='hd' )
        img
      p.weui-cell(slot='bd') 标题
    weui-cell(ft='说明文字')
      .weui-cell(slot='hd' )
        img
      p.weui-cell(slot='bd') 标题
  weui-cells(title='带跳转的列表项')
  weui-cells
    weui-cell(access='access' :hd='null' @click='onClick()')
      .weui-cell(slot='bd') cell standard
      .weiu-cell(slot='ft')
  weui-cells(title='带说明,跳转的列表项')
  weui-cells
    weui-cell(access='access' :hd='null' ft='说明文字' @click='onClick()')
      p.weui-cell(slot='bd') 
        a cell standard
  weui-cells(title='带图标,说明,跳转的列表项' ft='说明文字' )
    weui-cell(access='access' @click='onClick()')
      .weui-cell(slot='hd') 
        img
      p.weui-cell(slot='bd') cell standard
</template>
<script>
export default {
  name: 'list',
  data() {
    return { isShow: false }
  },
  methods: {
    toggleShow() {
      this.isShow = !this.isShow
    },
    onClick() {
      window.open('https://www.baidu.com/')
    }
  }
}
</script>
