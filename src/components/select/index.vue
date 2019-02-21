<template lang="pug">
  select.weui-select(:name='name')
    option(v-for='item in items' :value='item.value') {{item.label}}
</template>
<script>
export default {
  name: 'select',
  props: ['name', 'items']
}
</script>
