<template lang="pug">
  select.weui-select
    option(v-for='item in items' :value='item.value' :key='item.value') {{item.label}}
</template>
<script>
export default {
  name: 'weui-select',
  props: ['items']
}
</script>
