<template lang="pug">
div
  weui-cells(title='带说明的列表项')
  weui-cells
    weui-cell(:hd='null' ft='说明文字')
      p.weui-cell(slot='bd') 标题文字
    weui-cell(swiped='swiped' :hd='null')
      .weui-cell_bd(slot='bd' style='transform: translateX(-68px)')
        weui-cell(:hd='null' ft="说明文字")
          p.weui-cell(slot='bd') 标题文字
      .weui-cell_ft(slot='ft')
        weui-swiped(warn='warn' href='javascript:') 删除
</template>
<script>
export default {
  name: 'list'
}
</script>
