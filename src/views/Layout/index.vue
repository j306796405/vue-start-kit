<template>
  <div class="app-wrapper">
    <AppHeader></AppHeader>
    <router-view class="main-container"></router-view>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { AppHeader, AppFooter } from './index'

  export default {
    components: {
      AppHeader,
      AppFooter
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
