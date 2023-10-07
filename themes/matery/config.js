const CONFIG = {
  HOME_BANNER_ENABLE: true,
  // 3.14.1以后的版本中，欢迎语在blog.config.js中配置，用英文逗号','隔开多个。
  HOME_BANNER_GREETINGS: ['探索更多的可能性'], // 首页大图标语文字

  HOME_NAV_BUTTONS: true, // 首页是否显示分类大图标按钮
  HOME_NAV_BACKGROUND_IMG_FIXED: false, // 首页背景图滚动时是否固定，true 则滚动时图片不懂； false则随鼠标滚动

  // 是否显示开始阅读按钮
  SHOW_START_READING: true,

  // 菜单配置
  MENU_CATEGORY: false, // 显示分类
  MENU_TAG: false, // 显示标签
  MENU_ARCHIVE: false, // 显示归档
  MENU_SEARCH: false, // 显示搜索

  POST_LIST_COVER: false, // 文章封面
  POST_LIST_SUMMARY: false, // 文章摘要
  POST_LIST_PREVIEW: false, // 读取文章预览

  ARTICLE_ADJACENT: false, // 显示上一篇下一篇文章推荐
  ARTICLE_COPYRIGHT: false, // 显示文章版权声明
  ARTICLE_RECOMMEND: false, // 文章关联推荐

  WIDGET_LATEST_POSTS: false, // 显示最新文章卡
  WIDGET_ANALYTICS: false, // 显示统计卡
  WIDGET_TO_TOP: false,
  WIDGET_TO_COMMENT: false, // 跳到评论区
  WIDGET_DARK_MODE: false, // 夜间模式
  WIDGET_TOC: false // 移动端悬浮目录
}
export default CONFIG
