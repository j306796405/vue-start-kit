import Vue from 'vue'
import Vuex from 'vuex'

import user from '@/store/modules/user'
import home from '@/store/modules/home'
import article from '@/store/modules/article'
import search from '@/store/modules/search'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    home,
    article,
    search
  },
  getters
})

export default store
