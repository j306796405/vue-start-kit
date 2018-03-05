import { Cookie } from '@/utils/storage'

const username = Cookie.get('username')
const user = {
  state: {
    isLogin: false,
    user: {
      name: Cookie.get('username') || '',
      avatar: Cookie.get('avatar') || ''
    },
    appFooterList: [
      {title: '首页', icon: 'home', path: '/home'},
      {title: '西瓜视频', icon: 'video', path: '/video'},
      {title: '微头条', icon: 'comment', path: '/headline'},
      {
        title: `${username ? '我的' : '未登录'}`,
        icon: `${username ? 'account' : 'account1'}`,
        path: '/account'
      }
    ]
  }
}

export default user
