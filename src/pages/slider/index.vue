<template lang="pug">
div
  weui-slider(:value='`${value1}%`' @move='percent=>onMove(percent,"value1")')
  weui-slider(:value='`${value2}%`' @move='percent=>onMove(percent,"value2")' vertical='vertical')
  //- weui-slider-box(:value='`${value}%`' @move='onMove')
</template>
<script>
export default {
  name: 'slider',
  data() {
    return {
      value1: 50,
      value2: 80
    }
  },
  methods: {
    onMove(percent, key) {
      let newValue = this[key] + percent
      if (newValue < 0) newValue = 0
      else if (newValue > 100) newValue = 100
      this[key] = newValue
    }
  }
}
</script>
