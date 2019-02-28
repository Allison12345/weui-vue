<template lang="pug">
.container
  .page
    .page__hd
      h1.page_title
        img(src='https://weui.io/images/logo.png' alt='My Weui' height='21px')
      p.page__desc 我的weui样式
    .page__bd.page__bd-spacing
      ul
        pane(v-for='item of items' :key='item.label' :label='item.label' :icon='item.icon' :items='item.items')
    .page__ft
      a
        img
</template>
<script>
export default {
  name: 'home',
  props: ['src', 'alt'],
  data() {
    return {
      items: [
        {
          label: '表单',
          icon: 'icon_nav_form',
          items: [
            {
              label: 'Button',
              path: 'buttons'
            },
            {
              label: 'Input',
              path: 'cells'
            },
            {
              label: 'List',
              path: 'list'
            },
            {
              label: 'Slider',
              path: 'slider'
            },
            {
              label: 'Uploder',
              path: 'uploder'
            }
          ]
        },
        {
          label: '基础组件',
          icon: 'icon_nav_layout',
          items: [
            {
              label: 'Article',
              path: 'article'
            }
          ]
        },
        {
          label: '操作反馈',
          icon: 'icon_nav_feedback',
          items: [
            {
              label: 'Actionsheet',
              path: 'actionsheet'
            }
          ]
        },
        {
          label: '导航相关',
          icon: 'icon_nav_nav',
          items: [
            {
              label: 'Navbar',
              path: 'navbar'
            }
          ]
        },
        {
          label: '搜索相关',
          icon: 'icon_nav_search',
          items: [
            {
              label: 'SearchBar',
              path: 'searchbar'
            }
          ]
        },
        {
          label: '层级范围',
          icon: 'icon_nav_z-index'
        }
      ]
    }
  }
}
</script>
