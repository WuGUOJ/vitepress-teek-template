// import DefaultTheme from 'vitepress/theme'
import Teek from "vitepress-theme-teek";
import TeekLayoutProvider from "./components/TeekLayoutProvider.vue";

import "vitepress-theme-teek/index.css";
import "vitepress-theme-teek/theme-chalk/tk-code-block-mobile.css";
import "vitepress-theme-teek/theme-chalk/tk-sidebar.css";
import "vitepress-theme-teek/theme-chalk/tk-nav.css";
import "vitepress-theme-teek/theme-chalk/tk-aside.css";
import "vitepress-theme-teek/theme-chalk/tk-doc-h1-gradient.css";
// import "vitepress-theme-teek/theme-chalk/tk-table.css";
import "vitepress-theme-teek/theme-chalk/tk-mark.css";
import "vitepress-theme-teek/theme-chalk/tk-blockquote.css";
import "vitepress-theme-teek/theme-chalk/tk-index-rainbow.css";
import "vitepress-theme-teek/theme-chalk/tk-doc-fade-in.css";
import "vitepress-theme-teek/theme-chalk/tk-banner-desc-gradient.css";
// import "vitepress-theme-teek/theme-chalk/tk-container-flow.css";  // 边框线条流动

import ArticleMetadata from "./components/ArticleMetadata.vue"
import './style/index.css'


export default {
  extends: Teek,
  Layout: TeekLayoutProvider,
  enhanceApp({ app, router }) {
    // 注册全局组件
    app.component('ArticleMetadata', ArticleMetadata)
  },
}