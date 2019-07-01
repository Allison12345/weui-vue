<template lang="pug">
  .page.loadmore
    .page__hd
      h1.page__title Loadmore
      p.page__desc 加载更多
    .page__bd
      weui-loadmore
      weui-loadmore-line
      weui-loadmore-dot
</template>
<script>
export default {
  name: 'weui-loadMore'
}
</script>
