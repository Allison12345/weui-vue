<template lang="pug">
  .page
    .page__hd
      h1.page_title
        img(:src='src' :alt='alt')
    .page__bd
      ul
        pane(v-for='item of items' :key='item.label' :label='item.label' :icon='item.icon' :items='item.items')
    .page__ft
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
        }
      ]
    }
  }
}
</script>
