import NoData from './NoData'
import NoMoreData from './NoMoreData'
import IconSvg from './IconSvg'

import CircleLoading from './CircleLoading/index.vue'
import FullCircleLoading from './CircleLoading/full-loading.vue'
import DefaultLoading from './DefaultLoading/index.vue'
import Alert from './Dialog'

import { showLoading, hideLoading } from './DefaultLoading/index.js'

const install = Vue => {
  Vue.component('NoData', NoData)
  Vue.component('NoMoreData', NoMoreData)
  Vue.component('Icon', IconSvg)

  Vue.component('CircleLoading', CircleLoading)
  Vue.component('FullCircleLoading', FullCircleLoading)
  Vue.component('DefaultLoading', DefaultLoading)

  Vue.prototype.$showLoading = showLoading
  Vue.prototype.$hideLoading = hideLoading
  Vue.prototype.$alert = Alert
}

export default install
