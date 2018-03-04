<template>
  <div class="app-wrapper">
    <header></header>
    <router-view class="main-container"></router-view>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { header } from './index'

  export default {
    name: 'layout',
    components: {
      header
    }
  }
</script>
<style lang="less" scoped>
  .app-wrapper {
    width: 100%;
    height: 100%;
  }

  .main-container {
    width: 100%;
    height: e("calc(100% - 1rem)");
    position: relative;
  }

</style>
