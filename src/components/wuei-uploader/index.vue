<template lang="pug">
  .weui-uploader
    .weui-uploader__hd
      p.weui-uploader__title {{title}}
      .weui-uploader__info {{imgs.length}}/{{max}}
    .weui-uploader__bd
      ul.weui-uploader__files
        li.weui-uploader__file(v-for='(img,key) of imgs' :key='key' :style='{backgroundImage:`url(${img})`}' @click='$emit("click",key)')
      .weui-uploader__input-box(v-if='imgs.length < max')
        input.weui-uploader__input(type='file' @change='getImg' ref='inputer' multiple accept='.jpg,.png,.jpeg,.svg,.webp')
</template>

<script>
export default {
  name: 'weui-uploader',
  props: ['title', 'max', 'imgs'],
  methods: {
    getImg() {
      const inputDom = this.$refs.inputer
      const fileList = inputDom.files
      this.$emit('file', fileList)
    }
  }
}
</script>
