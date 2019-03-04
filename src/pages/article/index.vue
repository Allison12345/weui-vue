<template lang="pug">
div
  my-article
    h1.page__title(slot='hd') 
    p.page__desc(slot='hd')
    .page__bd(slot='bd' :spacing='spacing')
      
</template>
<script>
export default {
  name: 'article'
}
</script>
