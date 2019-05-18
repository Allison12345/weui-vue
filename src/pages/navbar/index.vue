<template lang="pug">
  .page
    .weui-tab
      weui-navbar(:items='items')
      weui-panel {{NAV_INDEX}}
</template>

<script>
import { NAV_INDEX } from '@/store'
import { mapGetters } from 'vuex'
export default {
  name: 'navbar',
  data() {
    return {
      items: ['选项一', '选项二', '选项三']
    }
  },
  computed: mapGetters([NAV_INDEX])
}
</script>
