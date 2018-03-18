<template>
  <div class="search-head-wrapper df-sb">
    <div class="search-title df-sb border-half-bottom">
      <div class="search">
        <Icon name="2fangdajing" class="search-icon"></Icon>
        <input type="text" placeholder="搜索些啥呢..." v-model="searchKeyword" @change="toSearch">
      </div>
      <div class="close" @click="back($router)">取消</div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    computed: {
      searchKeyword: {
        get () {
          return this.$store.state.search.keyword
        },
        set (newVlaue) {
          this.$store.state.search.keyword = newVlaue
        }
      }
    },
    methods: {
      ...mapActions([
        'getSearchList'
      ]),
      toSearch () {
        this.getSearchList({keyword: this.searchKeyword, pageIndex: 1})
      }
    }
  }
</script>

<style lang="less" scoped>
  .search-title {
    width: 100%;
    height: 0.5rem;
    padding: 0 0.1rem;
    .search {
      width: e("calc(100% - 0.45rem)");
      position: relative;
      color: @font-gray;
      .search-icon {
        position: absolute;
        left: 0.06rem;
        top: 50%;
        transform: translateY(-50%);
      }
      input {
        width: 100%;
        height: 0.3rem;
        border: none;
        outline: none;
        background: @bg-color;
        text-indent: 0.3rem;
        border-radius: 0.04rem;
        font-size: 0.12rem;
        color: #ccc;
      }
    }
    .close {
      z-index: 9;
      color: @theme-blue;
    }
  }

</style>
