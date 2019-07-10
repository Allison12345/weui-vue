<template lang="pug">
  .weui-form-preview__item
      label.weui-form-preview__label {{title}}
      span.weui-form-preview__value {{desc}}
</template>
<script>
export default {
  name: 'weui-form-preview-item',
  props: ['title', 'desc']
}
</script>
