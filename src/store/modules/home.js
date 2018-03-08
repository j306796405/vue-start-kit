import { newsList } from './classify'
import { Local } from '@/utils/storage'
import axios from '@/utils/fetch'
import Vue from 'vue'

const home = {
  state: {
    newsList: (function () {
      let newList = JSON.parse(Local.get('newList')) || newsList.slice(0, 12)
      newList.forEach(news => {
        if (news.list) delete news.title
      })
      Local.set('newList', JSON.stringify(newList))
      return newList
    })(),
    newsCurrIndex: 0,
    newsPrevIndex: 0,
    newsLoading: false,
    end: false
  },
  actions: {
    getHomeList ({commit, state}, params) {
      const news = state.newsList.find((v) => v.id === params.id)
      if (news.list) return

      state.newsLoading = true
      return new Promise((resolve, reject) => {
        axios.get('home/list', params)
          .then(res => {
            state.newsLoading = false
            // 不满11条说明，已经加载到最后一页
            if (res.data.list.length < 11) {
              state.end = true
            }
            commit('GET_HOME_LIST', res.data.list)
            resolve(res.data.list)
          }).catch(err => {
          reject(err)
        })
      })
    }
  },
  mutations: {
    GET_HOME_LIST (state, list) {
      // 此处存储两边 存疑
      state.newsList[state.newsIndex].list = list
      Vue.prototype.$set(state.newsList, state.newsIndex, state.newsList[state.newsIndex])
    }
  }
}

export default home
