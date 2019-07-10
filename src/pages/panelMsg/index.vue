<template lang="pug">
  .page 
    .page__hd 
      h1.page__tittle {{PANEL_MSG.title}}
      p.page__desc {{PANEL_MSG.desc}}
    .page__bd
      weui-button(type='primary' @click='onClick()') 返回

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
