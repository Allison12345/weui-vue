<template lang="pug">
  page.picker(title='Picker' desc='多列选择器 配合js实现' spacing='true')
    template(slot='bd')
      a.weui-btn.weui-btn_default(@click='isShownSingle = !isShownSingle') 单项选择器
      a.weui-btn.weui-btn_default(@click='isShowMul = !isShowMul') 日期选择器
      weui-picker(v-if='isShownSingle' :selectedIndex='sigSelIndex' :items='singelItems' @confirm='isShownSingle = false' @cancel='isShownSingle = false')
      weui-picker(v-if='isShowMul' :selectedIndex='mulSelIndex' :items='mulItems' @confirm='isShowMul = false' @cancel='isShowMul = false')
</template>
<script>
export default {
  name: 'picker-page',
  data() {
    return {
      isShownSingle: false,
      isShowMul: false,
      sigSelIndex: [2],
      singelItems: [['飞机票', '火车票', '的士票', '公交票', '其他']],
      mulSelIndex: [10, 5, 9],
      mulItems: [
        Array(20)
          .fill(0)
          .map((item, index) => `${1990 + index + 1}年`),
        Array(12)
          .fill(0)
          .map((item, index) => `${index + 1}月`),
        Array(31)
          .fill(0)
          .map((item, index) => `${index + 1}日`)
      ]
    }
  }
}
</script>
<style>
.picker {
  background-color: #fff;
}
</style>
