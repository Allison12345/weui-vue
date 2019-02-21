<template lang="pug">
  button.weui-btn(:class='className' @click='onClick' :href="href" :id='id') {{label}}
    i.weui-loading(v-if='loading')
</template>

<script>
export default {
  name: 'weui-button',
  // type: primary/default/warn
  props: [
    'type',
    'label',
    'loading',
    'disabled',
    'plain',
    'mini',
    'href',
    'id'
  ],
  computed: {
    className() {
      const { type, loading, disabled, plain, mini } = this
      return {
        [`weui-btn_${type}`]: true,
        'weui-btn-loading': loading,
        'weui-btn_disabled': disabled,
        [`weui-btn_plain-${type}`]: plain,
        'weui-btn_mini': mini
      }
    }
  },
  methods: {
    onClick(e) {
      if (this.disabled || this.loading) return
      this.$emit('click', e)
    }
  }
}
</script>
