<template lang="pug">
  page.msg(title='msg' desc='提示页' spacing='true')
    template(slot='bd')
      weui-button(type='default' @click='onClick(0)') 成功提示页
      weui-button(type='default' @click='onClick(1)') 失败提示页
      weui-button(type='default' @click='onClick(2)') 无图标提示页
      weui-button(type='default' @click='onClick(3)') 无图标提示页
    .j_bottom(slot='ft')
</template>

<script>
import { SAVE_MSG_RESULT } from '@/store'
export default {
  name: 'msg',
  methods: {
    onClick(type) {
      let data = {}
      switch (type) {
        case 0:
          data = {
            icon: 'success',
            title: '成功的标题',
            desc: '描述',
            btnText: '推荐操作',
            detail: '细节'
          }
          break
        case 1:
          data = {
            icon: 'warn',
            title: 'fail title',
            desc: 'fail desc',
            btnText: 'fail btn',
            detail: 'fail detail'
          }
          break
        case 2:
          data = {
            title: 'success title',
            desc: 'success desc',
            btnText: 'success btn',
            detail: 'success detail'
          }
          break
        case 3:
          data = {
            title: 'fail title',
            desc: 'fail desc',
            btnText: 'fail btn',
            detail: 'fail detail'
          }
          break
        default:
      }
      this.$store.commit(SAVE_MSG_RESULT, data)
      this.$router.push('weuiMsg')
    }
  }
}
</script>
