<template lang="pug">
  page.flex(title='Flex' desc='Flex 布局' spacing='true')
    template(slot='bd')
      weui-flex(v-for='(item,index) of items' :key='index')
        weui-flex-item(v-for='(it,key) of item' :key='key')
      weui-flex
        div
          weui-flex-item
        weui-flex-item
        div
          weui-flex-item
</template>
<script>
export default {
  name: 'weui-MyFlex',
  data() {
    return {
      items: Array(4)
        .fill(0)
        .map((item, i) => i + 1)
    }
  }
}
</script>
