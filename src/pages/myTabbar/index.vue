<template lang="pug">
  .page.tabbar
    .page__bd(:style="{height: '100%'}")
      .weui-tab
        .weui-tab__panel
        weui-tabbar(:items='items')
</template>
<script>
export default {
  name: 'myTabbar',
  data() {
    return {
      items: ['微信', '通讯录', '发现', '我']
    }
  }
}
</script>
