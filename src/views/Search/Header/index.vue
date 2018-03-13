<template>
  <div class="search-head-wrapper df-sb">
    <div class="search-title df-sb border-half-bottom">
      <div class="search">
        <Icon name="2fangdajing" class="search-icon"></Icon>
        <input type="text" placeholder="搜索些啥呢..." v-model="$store.state.search.keyword" @change="search">
      </div>
      <div class="close" @click="back($router)">取消</div>
    </div>
  </div>
</template>

<script>
  // import { mapGetters } from 'vuex'

  export default {
    name: 'index.vue',
    computed: {
    }
  }
</script>

<style scoped>

</style>
