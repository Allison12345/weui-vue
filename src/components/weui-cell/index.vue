<template lang="pug">
  .weui-cell(:class='className')
    slot(name='hd')
      .weui-cell__hd(v-if='hd!==null')
        label.weui-label {{hd}}
    .weui-cell__bd(v-if='bd!==null')
      slot(name='bd') {{bd}}
    slot(name='ft')
      .weui-cell__ft(v-if='ft!==null') {{ft}}
</template>

<script>
export default {
  name: 'weui-cell',
  props: [
    'hd',
    'bd',
    'ft',
    'access',
    'vcode',
    'warn',
    'switchs',
    'select',
    'select-before'
  ],
  computed: {
    className() {
      const { access, vcode, warn, switchs, select } = this
      return {
        'weui-cell_access': access,
        'weui-cell_vcode': vcode,
        'weui-cell_warn': warn,
        'weui-cell_switch': switchs,
        'weui-cell_select weui-cell_select-before': select
      }
    }
  }
}
</script>
