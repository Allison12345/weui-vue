<template lang="pug">
  page.loadmore(title='Loadmore' desc='加载更多')
    template(slot='bd')
      weui-loadmore
      weui-loadmore-line
      weui-loadmore-dot
</template>
<script>
export default {
  name: 'weui-loadMore'
}
</script>
