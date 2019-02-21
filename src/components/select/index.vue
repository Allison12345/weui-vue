<template lang="pug">
  select.weui-select(:name='name')
    option(v-for='item in options' :value='item.value') 
</template>
<script>
export default {
  name: 'select',
  props: ['name', 'value'],
  data() {
    return {
      options: ['1', '2', '3', '4']
    }
  }
}
</script>
