<template lang="pug">
  .page.icons
    .page__hd
      h1.page__title icons
      p.page__desc 图标
    .page__bd.page__bd_spacing
      weui-icon-box(v-for = '(item,index) of items' :key = 'index')
        weui-icon(:type='item.logo' :isMsg='!item.isPrimary' :isPrimary='item.isPrimary')
        weui-icon-box-ctn(v-bind='item')
      .icon-sp-area
        weui-icon(v-for='(item,index) of littleItems' :key = 'index' :type='item') 
</template>
<script>
export default {
  name: 'weui-MyIcons',
  data() {
    return {
      items: [
        {
          title: '成功',
          desc: '用于操作顺利成功',
          logo: 'success'
        },
        {
          title: '提示',
          desc:
            '用于表示信息提示；也常用于缺乏条件的操作拦截，提示用户所需信息',
          logo: 'info'
        },
        {
          title: '普通警告',
          desc: '用于表示操作后将引起一定后果的情况',
          isPrimary: true
        },
        {
          title: '强烈警告',
          desc: '用于表示操作后将引起严重的不可挽回的后果的情况',
          logo: 'warn'
        },
        { title: '等待', desc: '用于表示等待', logo: 'waiting' }
      ],
      littleItems: [
        'success',
        'success-no-circle',
        'circle',
        'warn',
        'download',
        'info-circle',
        'cancel',
        'search'
      ],
      isShown: true
    }
  }
}
</script>
<style>
.page.icons .page__bd {
  padding: 0 40px;
  text-align: left;
}
.page.icons .icon-box {
  margin-bottom: 25px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.page.icons .icon-box i {
  margin-right: 18px;
}
</style>
