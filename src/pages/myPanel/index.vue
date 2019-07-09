<template lang="pug">
  .page.panel
    .page__hd
      .page__title Panel
      .page__desc 面板
    .page__bd
      weui-panel-access(access='access' hd='图文组合列表') 
        weui-media-box(slot='bd' type='appmsg' )
      weui-panel-access(access='access' hd='文字组合列表') 
        weui-media-box(slot='bd' type='text')
      weui-panel-access(hd='小图文组合列表')
        weui-media-box(slot='bd' isSmall='true')
          weui-cells
      weui-panel-access(hd='文字列表附来源' )
        weui-media-box(slot='bd' type='text')
</template>

<script>
export default {
  name: 'weui-myPanel'
}
</script>
