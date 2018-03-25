const getters = {
  appFooterList: state => state.user.appFooterList,

  // 首页
  newsList: state => state.home.newsList,
  homeNewsCurrIndex: state => state.home.newsCurrIndex,
  homeNewsPrevIndex: state => state.home.newsPrevIndex,
  homeEnd: state => state.home.end,
  homeNewsLoading: state => state.home.newsLoading,

  // 详情页
  detailArticle: state => state.article.articleInfo,

  // 搜索页
  searchKeyword: state => state.search.keyword,
  searchPageIndex: state => state.search.pageIndex,
  searchList: state => state.search.list,
  searchIsLoading: state => state.search.isLoading,
  searchHasMore: state => state.search.hasMore,

  // 视频页
  videoList: state => state.video.list,
  videoIsLoading: state => state.video.isLoading,
  videoHasMore: state => state.video.hasMore,

  // headline
  headlineList: state => state.headline.list,
  isLoading: state => state.headline.isLoading,
  hasMore: state => state.headline.hasMore
}

export default getters
