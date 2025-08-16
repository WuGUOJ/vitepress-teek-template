import { defineConfig } from 'vitepress'
import { MermaidPlugin } from "vitepress-plugin-mermaid";
import { teekConfig } from "./teekConfig";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: teekConfig,
  base: '/vitepress-teek-template/',  // 部署到 github pages
  title: "Vitepress-teek-template",
  description: "基于 vitepress-theme-teek 主题的基础模板，可基于此快速构建文档。",
  lastUpdated: true,
  lang: "zh-CN",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // 引入图标
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' }]
  ],
  srcDir: 'src',
  themeConfig: {
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新时间",
    search: {
      provider: 'local'
    },
    nav: [
      {
        text: "💎案例",
        items: [
          { text: 'PlantUML', link: '/examples/plantuml' },
          { text: 'Mermaid', link: '/pages/da099f' },
        ]
      },
      {
        text: "📚文章索引",
        items: [
          { text: "归档", link: "/archives" },
          // { text: "清单", link: "/articleOverview" },
          // { text: "登录", link: "/login" },
          // { text: "风险链接", link: "/risk-link?target=https://vp.teek.top" },
          { text: "分类", link: "/categories" },
          { text: "标签", link: "/tags" },
        ],
      },
    ],
    outline: {
      level: [2, 4],
      label: "本页导航",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
  },
  markdown: {
    math: true,
    lineNumbers: true,
    image: {
      lazyLoading: true
    },
    container: {
      tipLabel: '提示',
      warningLabel: '注意',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },
  vite: {
    plugins: [MermaidPlugin()],
    optimizeDeps: {
      include: ['mermaid']
    },
    ssr: {
      noExternal: ['mermaid']
    }
  }
})
