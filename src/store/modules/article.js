import axios from '@/utils/fetch'

const article = {
  state: {
    articleInfo: null
  },
  actions: {
    getArticle ({commit}, params) {
      return new Promise((resolve, reject) => {
        axios.get('article/info', params).then(res => {
          commit('GET_ARTICLE', res.data)
          resolve(res.data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  },
  mutations: {
    // 储存列表数据
    GET_ARTICLE (state, info) {
      state.articleInfo = info
    }
  }
}

export default article
