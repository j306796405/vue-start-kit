<template>
    <div class="search-wrapper">
      <Header></Header>
      <Body></Body>
    </div>
</template>

<script>
  import Header from './Head'
  import Body from './Body'

  export default {
    components: {
      Header,
      Body
    }
  }
</script>

<style lang="less" scoped>
  .search-wrapper {
    width: 100%; height: 100%;
    background: #fff;
  }
</style>
