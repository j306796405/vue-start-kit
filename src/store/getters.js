const getters = {
  appFooterList: state => state.user.appFooterList,

  // 首页
  newsList: state => state.home.newsList,
  homeNewsCurrIndex: state => state.home.newsCurrIndex,
  homeNewsPrevIndex: state => state.home.newsPrevIndex,
  homeEnd: state => state.home.end,
  homeNewsLoading: state => state.home.newsLoading,

  // 详情页
  detailArticle: state => state.article.articleInfo
}

export default getters
