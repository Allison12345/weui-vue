<template lang="pug">
.container
  .page.js_show
    .page__hd
      h1.page_title
        img(:src='require("@/assets/imgs/IMG_8034.png")' :style='{height:"auto",width:"60px"}' alt='My Weui')
      p.page__desc 我的weui样式
    .page__bd.page__bd-spacing
      ul
        pane(v-for='(item,index) of items' :key='item.label' v-bind='item' @click.native='onClick(index)' :isShow='activeIndex===index')
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
      activeIndex: -1,
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
            },
            {
              label: 'flex',
              path: 'flex'
            },
            {
              label: 'footer',
              path: 'footer'
            },
            {
              label: 'gallery',
              path: 'gallery'
            },
            {
              label: 'grid',
              path: 'grid'
            },
            {
              label: 'icons',
              path: 'icons'
            },
            {
              label: 'loadMore',
              path: 'loadMore'
            },
            {
              label: 'panel',
              path: 'panel'
            },
            {
              label: 'preview',
              path: 'preview'
            },
            {
              label: 'progress',
              path: 'progress'
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
            },
            {
              label: 'Picker',
              path: 'picker'
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
            },
            {
              label: 'Tabbar',
              path: 'myTabbar'
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
  },
  methods: {
    onClick(index) {
      if (this.activeIndex === index) {
        this.activeIndex = -1
      } else this.activeIndex = index
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
  box-sizing: border-box;
  background-color: #ededed;
}
.page.js_show {
  opacity: 1;
}
.page__hd {
  padding: 40px;
}
.page__bd-spacing {
  padding: 0 16px;
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
ul {
  list-style: none;
}
</style>
