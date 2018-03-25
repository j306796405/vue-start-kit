import axios from '@/utils/fetch'

const video = {
  state: {
    list: [],
    isLoading: false,
    hasMore: true
  },
  actions: {
    getVideoList ({commit, state}, params) {
      const {hasMore, isLoading} = state

      if (!hasMore || isLoading) return
      state.isLoading = true

      return new Promise((resolve, reject) => {
        axios.get('video/list', params).then((res) => {
          const {data: {list}} = res
          state.isLoading = false

          if (list.length < 6) {
            state.hasMore = false
          }

          commit('GET_VIDEO_LIST', res.data.list)
          resolve(list)
        }).catch(err => {
          reject(err)
        }).finally(() => {
          state.isLoading = false
        })
      })
    }
  },
  mutations: {
    GET_VIDEO_LIST (state, list) {
      state.list = state.list.concat(list)
    }
  }
}

export default video
