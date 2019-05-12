<template lang="pug">
  .weui-actionsheet.weui-actionsheet_toggle(@click.stop)
    .weui-actionsheet__title
      p.weui-actionsheet__title-text {{title}}
    .weui-actionsheet__menu
      .weui-actionsheet__cell(v-for='(item,index) in items' :key="index" @click='$emit("confirm",index)') {{item}}
    .weui-actionsheet__action
      .weui-actionsheet__cell(@click='$emit("cancel")') 取消
</template>
<script>
export default {
  name: 'weui-actionsheet',
  props: ['title', 'items']
}
</script>
