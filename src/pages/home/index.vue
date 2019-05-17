<template lang="pug">
.container
  .page.js_show
    .page__hd
      h1.page_title
        img(:src='LogoImg' alt='My Weui' height='21px')
      p.page__desc 我的weui样式
    .page__bd.page__bd-spacing
      ul
        pane(v-for='item of items' :key='item.label' :label='item.label' :icon='item.icon' :items='item.items')
    .page__ft
      a
        img
</template>
<script>
import LogoImg from '@/assets/imgs/logo.png'
export default {
  name: 'home',
  props: ['src', 'alt'],
  data() {
    return {
      LogoImg,
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
              label: 'Uplaoder',
              path: 'uploader'
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
            },
            {
              label: 'badge',
              path: 'badge'
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
            },
            {
              label: 'Dialog',
              path: 'dialog'
            },
            {
              label: 'Msg',
              path: 'msg'
            },
            {
              label: 'Toast',
              path: 'toast'
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
<style>
.container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}
.page {
  overflow-y: auto;
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #f8f8f8;
}
.page.js_show {
  opacity: 1;
}
.page__hd {
  padding: 40px;
}
.page__bd-spacing {
  padding: 0 15px;
}
.page__ft {
  padding-top: 40px;
  padding-bottom: 10px;
  text-align: center;
}
.page__title {
  margin-bottom: 15px;
  text-align: left;
  font-weight: 400;
}
.page__desc {
  margin-top: 5px;
  color: #888;
  text-align: left;
  font-size: 14px;
}
</style>
