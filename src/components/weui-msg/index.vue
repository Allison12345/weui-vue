<template lang="pug">
  .weui-msg
    .weui-msg__icon-area
      i.weui-icon-success.weui-icon_msg
    .weui-msg__text-area
      h2.weui-msg__title 操作成功
      p.weui-mssg__desc 内容详情 居中显示
    .weui-msg__opr-area(@click='onClick()')
      weui-button(type='primary') 推荐操作
    .weui-msg__ips-area
      p.weui-msg__tips 提示详情
    .weui-msg__extra-area

</template>
<script>
export default {
  name: 'weui-msg',
  methods: {
    onClick() {
      this.$router.push({ path: 'msg' })
    }
  }
}
</script>
