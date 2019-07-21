<template lang="pug">
  page.home.js_show(desc='我的weui样式' spacing='spacing')
    template(slot='hd')
      h1.page_title
        img(:src='require("@/assets/imgs/IMG_8034.png")' :style='{height:"auto",width:"60px"}' alt='My Weui')
      p.page__desc 我的weui样式
    ul(slot='bd')
      pane(v-for='(item,index) of items' :key='item.label' v-bind='item' @click.native='onClick(index)' :isShow='HOME_ACTIVEINDEX===index')
</template>
<script>
import { HOME_ACTIVEINDEX, SAVE_HOME_ACTIVEINDEX } from '@/store'

import { mapGetters } from 'vuex'
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
      if (this[HOME_ACTIVEINDEX] === index) {
        this.$store.commit(SAVE_HOME_ACTIVEINDEX, -1)
      } else {
        this.$store.commit(SAVE_HOME_ACTIVEINDEX, index)
      }
    }
  },
  computed: mapGetters([HOME_ACTIVEINDEX])
}
</script>
<style>
ul {
  list-style: none;
}
</style>
