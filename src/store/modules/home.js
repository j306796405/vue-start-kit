import { newsList } from './classify'
import { Local } from '@/utils/storage'
import axios from '@/utils/fetch'
import Vue from 'vue'

const home = {
  state: {
    newsList: (function () {
      let newList = JSON.parse(Local.get('newList')) || newsList.slice(0, 12)
      newList.forEach(news => {
        // ??? 为什么要删除title
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
    // 获取列表数据
    getHomeList ({commit, state}, params) {
      const news = state.newsList.find((v) => v.id === params.id)
      if (news.list) return

      state.newsLoading = true
      return new Promise((resolve, reject) => {
        axios.get('home/list', params).then(res => {
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
    // 储存列表数据
    GET_HOME_LIST (state, list) {
      // 增加list属性
      state.newsList[state.newsCurrIndex].list = list
      // 因为新增属性 所以使用Vue.set方法
      Vue.set(state.newsList, state.newsCurrIndex,
        state.newsList[state.newsCurrIndex])
    },
    UPDATE_NEWS_INDEX (state, currentIndex) {
      const prevIndex = state.newsCurrIndex
      state.newsCurrIndex = currentIndex
      state.newsPrevIndex = prevIndex
    }
  }
}

export default home
