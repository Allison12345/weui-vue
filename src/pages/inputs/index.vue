<template lang="pug">
  div
    weui-input(v-model='txt1' type='number')
    div input1:{{txt1}}
    weui-input(v-model='txt2' type='password')
    div input2:{{txt2}}
    weui-input(v-model='txt3' type='text' placeholder='6位数字' :maxlength='6')
</template>
<script>
export default {
  name: 'inputs',
  data() {
    return {
      txt1: 'hello world',
      txt2: '',
      txt3: ''
    }
  }
}
</script>
