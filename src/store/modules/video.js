import axios from 'src/utils/fetch'

const video = {
  state: {
    list: [],
    isLoading: false,
    hasMore: true
  },
  action: {
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

          commit('GET_VIDEO_LIST', res.list)
          resolve(list)
        }).catch(err => {
          state.isLoading = false
          reject(err)
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
