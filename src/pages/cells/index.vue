<template lang="pug">
div
  weui-cells(form='form' title='标题')
    weui-cell
      label.weui-label(slot='hd') 请输入qq
      weui-input(slot='bd' placeholder='qq号' v-model='qq')
      div(slot='ft') ft
    weui-cell
      label.weui-label(slot='hd') qq
      div(slot='bd') {{qq}}
    weui-cell(access='access')
      label.weui-label(slot='hd') hd
      div(slot='bd') bd
  weui-cells(title='标题😊' tips='底部说明文字')
    weui-cell
      label.weui-label(slot='hd') 请输入qq
      weui-input(slot='bd' placeholder='qq号' v-model='qq')
      div(slot='ft') ft
</template>

<script>
export default {
  name: 'cells',
  data() {
    return {
      qq: ''
    }
  }
}
</script>
