import Vue from 'vue'
import App from './App'
import router from './router'

// 样式
import './styles/index.css'
import './styles/index.less'

// 工具类
import './utils/rem.js'
import { Cookie } from './utils/storage'

Vue.prototype.Cookie = Cookie

Vue.config.productionTip = false

// 返回
Vue.prototype.back = (route) => {
  history.go(-1)
}

// 跳转文章页
Vue.prototype.skip = (route, id) => {
  route.push('/article/' + id)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
