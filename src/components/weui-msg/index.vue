<template lang="pug">
  .weui-msg
    .weui-msg__icon-area
      i.weui-icon_msg(:class='`weui-icon-${MSG_RESULT.icon}`')
    .weui-msg__text-area
      h2.weui-msg__title {{MSG_RESULT.title}}
      p.weui-mssg__desc {{MSG_RESULT.desc}}
    .weui-msg__opr-area(@click='onClick()')
      weui-button(type='primary') {{MSG_RESULT.btnText}}
    .weui-msg__ips-area
      p.weui-msg__tips {{MSG_RESULT.detail}}
</template>
<script>
import { mapGetters } from 'vuex'
import { MSG_RESULT } from '@/store'
export default {
  name: 'weui-msg',
  computed: mapGetters([MSG_RESULT]),
  methods: {
    onClick() {
      this.$router.back()
    }
  }
}
</script>
