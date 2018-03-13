import axios from 'src/utils/fetch'

const common = {
  state: {
    keyword: '',
    pageIndex: 1,
    list: null,
    isLoading: false,
    hasMore: true
  },
  actions: {
    getSearchList ({commit, state}, params = {}) {
      state.isLoading = true

      return new Promise((resolve, reject) => {
        axios.get('search', params).then((res) => {
          const {data: {list}} = res
          state.isLoading = false

          if (list.length < 6) {
            state.hasMore = false
          }

          commit('GET_SEARCH_LIST', list)
        })
      })
    }
  },
  mutations: {
    GET_SEARCH_LIST (state, list) {
      state.list = state.pageIndex === 1 ? list : state.list.concat(list)
    }
  }
}

export default common
