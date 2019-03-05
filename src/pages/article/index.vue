<template lang="pug">
div
  my-article
    template(slot='hd')
      h1.page__title title
      p.page__desc desc
    .page__bd(slot='bd') bd
      article.weui-article
        h1 大标题
        section
          h3 1.1 节标题
          p 内容
          p
            img(src='https://weui.io/images/pic_article.png')
            img(src='https://weui.io/images/pic_article.png')
        section
          h3 1.2 节标题
          p 内容
    .page__ft(slot='ft')
      a(href='http://localhost:8080/')
        img(src='https://weui.io/images/icon_footer_link.png')
</template>
<script>
export default {
  name: 'page-article'
}
</script>
