<template lang="pug">
  page.actionsheet(title='ActionSheet' desc='弹出式菜单' spacing='true')
    template(slot='bd')
      a.weui-btn.weui-btn_default(href='javascript:;' @click='isShow=true') iOS ActionSheet
      a.weui-btn.weui-btn_default(href='javascript:;') Android ActionSheet
      weui-mask(v-if='isShow' @click='isShow=false')
        weui-actionsheet(:items='items' title='标题' @confirm='onConfirm' @cancel='isShow=false')   
</template>
<script>
export default {
  name: 'actionsheet',
  data() {
    return {
      isShow: false,
      items: ['示例菜单1', '示例菜单2', '示例菜单3', '示例菜单4']
    }
  },
  methods: {
    onConfirm(index) {
      console.log(this.items[index])
      this.isShow = false
    }
  }
}
</script>
