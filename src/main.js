import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 样式
import './styles/index.css'
import './styles/index.less'

// 工具类
import './utils/iconfont.js'
import './utils/rem.js'
import { Cookie } from './utils/storage'

// 指令
import './directive'
import '@/utils/FakePromise'

// 全局组件
import components from '@/components/index'
import FakePromise from './utils/FakePromise'

Vue.use(components)

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
  store,
  components: {App},
  template: '<App/>'
})

new FakePromise((resolve, reject) => {
  setTimeout(() => {
    resolve(666)
  })
}).then((value) => {
  console.log(`success: ${value}`)
}, (reason) => {
  console.log(`error: ${reason}`)
})
