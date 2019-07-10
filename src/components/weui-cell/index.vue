<template lang="pug">
  .weui-cell(:class='className' @click='onClick')
    slot(name='hd')
      .weui-cell__hd(v-if='hd!==null')
        label.weui-label {{hd}}
    .weui-cell__bd(v-if='bd!==null' :style='bdStyle')
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
    'selects',
    'selectss',
    'swiped',
    'bdStyle',
    'example'
  ],
  methods: {
    onClick() {
      this.$emit('click')
    }
  },
  computed: {
    className() {
      const {
        access,
        vcode,
        warn,
        switchs,
        select,
        selects,
        selectss,
        swiped,
        example
      } = this
      return {
        'weui-cell_access': access,
        'weui-cell_vcode': vcode,
        'weui-cell_warn': warn,
        'weui-cell_switch': switchs,
        'weui-cell_select weui-cell_select-before': select,
        'weui-cell_select': selects,
        'weui-cell_select weui-cell_select-after': selectss,
        'weui-cell_swiped': swiped,
        'weui-cell_access weui-cell_example': example
      }
    }
  }
}
</script>
