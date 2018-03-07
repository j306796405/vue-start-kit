import Vue from 'vue'
import Vuex from 'vuex'

import user from '@/store/modules/user'
import home from '@/store/modules/home'
import getters from './getters'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    home
  },
  getters
});

export default store
