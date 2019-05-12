<template lang="pug">
  .weui-dialog
    .weui-dialog__hd(v-if='type==="confirm"')
      strong.weui-dialog__title {{title}}
    .weui-dialog__bd {{content}}
    .weui-dialog__ft
      .weui-dialog__btn.weui-dialog__btn_default(@click='$emit("cancel")' v-if='type === "confirm"') {{cancelTxt}}
      .weui-dialog__btn.weui-dialog__btn_primary(@click='$emit("confirm")') {{confirmTxt}}
</template>
<script>
export default {
  name: 'weui-dialog',
  props: ['type', 'title', 'content', 'cancelTxt', 'confirmTxt']
}
</script>
