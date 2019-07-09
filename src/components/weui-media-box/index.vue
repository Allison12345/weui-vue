<template lang="pug">
  .weui-media-box(:class='`weui-media-box_${type}`')
    slot
      .weui-media-box__hd
        slot(name='hd') {{title}}
      .weui-media-box__bd 
        slot(name='bd') {{desc}}
</template>

<script>
export default {
  name: 'weui-media-box',
  props: ['type', 'title', 'desc']
}
</script>
