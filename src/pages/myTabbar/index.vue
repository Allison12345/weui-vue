<template lang="pug">
  page.tabbar
    template(:style="{height: '100%'}" slot='bd')
      .weui-tab
        .weui-tab__panel {{TABBAR_INDEX}}
        weui-tabbar(:items='items')
</template>
<script>
import { TABBAR_INDEX } from '@/store'
import { mapGetters } from 'vuex'
export default {
  name: 'myTabbar',
  data() {
    return {
      items: ['微信', '通讯录', '发现', '我']
    }
  },
  computed: mapGetters([TABBAR_INDEX])
}
</script>
