<template lang="pug">
  page.panel(title='Panel' desc='面板')
    template(slot='bd')
      weui-panel-access(v-for='(item,index) of items' :key='index' v-bind='item')
        template(slot='bd')
          weui-media-box(v-for='(box,key) of item.boxes' :key='key' v-bind='box' :type='item.type' @click.native='onClick(box)')
            img.weui-media-box__thumb(v-if='item.img' slot='hd' :src='require("@/assets/imgs/weui-panel.png")')
            template(v-if='item.img' slot='bd')
              h4.weui-media-box__title {{box.title}}
              p.weui-media-box__desc {{box.desc}}
            weui-cells(v-if='item.cells' )
              weui-cell(example='example')
                img(:src="require('@/assets/imgs/weui-littlePanel.png')" slot='hd')
                .weui-cell_primary(slot='bd')
                  p  {{box.title}}
</template>

<script>
import { SAVE_PANEL_MSG } from '@/store'
export default {
  name: 'weui-myPanel',
  data() {
    return {
      items: [
        {
          access: true,
          hd: '图文组合列表',
          type: 'appmsg',
          img: true,
          boxes: new Array(3).fill(0).map((item, index) => ({
            title: `标题${index + 1}`,
            desc: Array(parseInt(Math.random() * 50 + 10, 10))
              .fill(0)
              .join(',')
          }))
        },
        {
          access: true,
          hd: '文字组合列表',
          type: 'text',
          boxes: new Array(3).fill(0).map((item, index) => ({
            title: `标题${index + 1}`,
            desc: Array(parseInt(Math.random() * 50 + 10, 10))
              .fill(0)
              .join(',')
          }))
        },
        {
          type: 'small-appmsg',
          cells: true,
          hd: '小图文组合列表',
          boxes: new Array(3).fill(0).map((item, index) => ({
            title: `文字标题${index + 1}`
          }))
        },
        {
          hd: '文字列表附来源',
          type: 'text',
          boxes: new Array(3).fill(0).map((item, index) => ({
            title: `标题${index + 1}`,
            desc: Array(parseInt(Math.random() * 50 + 10, 10))
              .fill(0)
              .join(',')
          }))
        }
      ]
    }
  },
  methods: {
    onClick(box) {
      this.$store.commit(SAVE_PANEL_MSG, box)
      this.$router.push('panelMsg')
    }
  }
}
</script>
