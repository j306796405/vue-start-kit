<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="less" scoped>
  #app {
    width: 100%;
    height: 100%;
    .login-active {
      opacity: 1;
      top: 0;
    }
  }
  #view {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }
</style>
