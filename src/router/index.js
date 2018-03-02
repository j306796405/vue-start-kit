import Vue from 'vue'
import Router from 'vue-router'

const _import_ = file => () => import('@/views/' + file + '.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: _import_('Layout/index'),
      redirect: '/home'
    }
  ]
})
