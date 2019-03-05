<template lang="pug">
div
  page
    template(slot='hd')
        h1.page__title Badge
        p.page__desc 徽章
    weui-cells(slot='bd' title='新消息提示跟摘要信息后，统一在列表右侧')
</template>
<script>
export default {
  name: 'page-badge'
}
</script>
