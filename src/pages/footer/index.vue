<template lang="pug">
  page.footer(title='Title' desc='页脚' spacing='true')
    template(slot='bd')
      .weui-footer
        p.weui-footer__text Copyright © 2008-2016 weui.io
        br
        br
      .weui-footer
        p.weui-footer__links
          a.weui-footer__link(href='https://www.baidu.com/') 网页链接
        p.weui-footer__text Copyright © 2008-2016 weui.io
        br
        br
      .weui-footer
        p.weui-footer__links
          a.weui-footer__link(href="https://www.baidu.com/") 网页链接
          a.weui-footer__link(href="https://www.baidu.com/") 网页链接
        p.weui-footer__text Copyright © 2008-2016 weui.io
      .weui-footer.weui-footer_fixed-bottom
        p.weui-footer__links
          p(@click='onClick()') weui首页
          p.weui-footer__text Copyright © 2008-2016 weui.io
</template>
<script>
export default {
  name: 'weui-footer',
  methods: {
    onClick() {
      this.$router.push('/')
    }
  }
}
</script>
