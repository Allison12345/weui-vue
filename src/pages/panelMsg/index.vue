<template lang="pug">
  page(:title='PANEL_MSG.title' :desc='PANEL_MSG.desc')
      weui-button(type='primary' @click='onClick()' slot='bd') 返回
</template>
<script>
import { mapGetters } from 'vuex'
import { PANEL_MSG } from '@/store'
export default {
  name: 'weui-panelMsg',
  computed: mapGetters([PANEL_MSG]),
  methods: {
    onClick() {
      this.$router.back()
    }
  }
}
</script>
