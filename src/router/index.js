import Vue from 'vue'
import Router from 'vue-router'

const _import_ = file => () => import('@/views/' + file + '.vue')

Vue.use(Router)

export default new Router({
  routes: [
    // 如果路由匹配了path，但children的path没有匹配成功，则代表匹配错误
    {
      path: '/',
      name: '结构',
      component: _import_('Layout/index'),
      redirect: '/home',
      children: [
        {path: 'home', component: _import_('Home/index'), name: '首页'}
      ]
    },
    {
      path: '/article/:id',
      name: '文章',
      component: _import_('Article/index')
    },
    {
      path: '/search',
      name: '搜索',
      component: _import_('Search/index')
    },
    {
      path: '/video',
      name: '视频',
      component: _import_('Video/index')
    }
  ]
})
