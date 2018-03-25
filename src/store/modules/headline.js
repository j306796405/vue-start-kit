import axios from '@/utils/fetch'

const headline = {
  state: {
    list: [],
    isLoading: false,
    hasMore: false
  },
  actions: {
    getHeadlineList ({commit, state}, params) {
      if (state.isLoading) return false
      state.isLoading = true

      return new Promise((resolve, reject) => {
        axios.get('headline/list', {params}).then(({data: {list}}) => {
          commit('GET_HEAD_LINE_LIST', list)
          resolve(list)
        }).finally(() => {
          state.isLoading = false
        })
      })
    }
  },
  mutations: {
    GET_HEAD_LINE_LIST (state, list) {
      state.list = state.list.concat(list)
    }
  }
}

export default headline
