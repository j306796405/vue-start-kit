import axios from '@/utils/fetch'

const common = {
  state: {
    keyword: '',
    pageIndex: 1,
    list: [],
    isLoading: false,
    hasMore: true
  },
  actions: {
    getSearchList ({commit, state}, params = {}) {
      if (!state.hasMore || state.isLoading) return
      state.isLoading = true

      return new Promise((resolve, reject) => {
        axios.get('search', params).then((res) => {
          const {data: {list}} = res
          state.isLoading = false

          if (list.length < 6) {
            state.hasMore = false
          }

          commit('SET_SEARCH_PARAM', params)
          commit('GET_SEARCH_LIST', list)
        })
      })
    }
  },
  mutations: {
    GET_SEARCH_LIST (state, list) {
      state.list = state.pageIndex === 1 ? list : state.list.concat(list)
    },
    SET_SEARCH_PARAM (state, search) {
      const {keyword, pageIndex} = search
      state.keyword = keyword
      state.pageIndex = pageIndex
    }
  }
}

export default common
