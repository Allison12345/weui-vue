<template lang="pug">
page.uploader(title='UpLoader' desc='上传组件，一般配合gallery使用')
  template(slot='bd')
    weui-gallery(v-if='imgs[activeIndex]' :img='imgs[activeIndex]')
    weui-cells(form='form')
      weui-cell(:hd='null' :ft='null')
        weui-uploader(slot='bd' title='图片上传' :max='max' @file='onFile' :imgs='imgs' @click='index=>activeIndex=index')
</template>
<script>
export default {
  name: 'uploader',
  data() {
    return {
      imgs: [],
      max: 9,
      activeIndex: -1
    }
  },
  methods: {
    onFile(fileList) {
      if (fileList.length + this.imgs.length > this.max) {
        alert(`最多选择${this.max}张`)
        return
      }
      for (let i = 0; i < fileList.length; i++) {
        const reader = new FileReader()
        reader.readAsDataURL(fileList[i])
        reader.onload = event => this.imgs.push(event.target.result)
      }
    }
  }
}
</script>
