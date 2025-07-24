import { defineTeekConfig } from "vitepress-theme-teek/config";
import { version } from "vitepress-theme-teek/es/version";
import { plantuml } from "@mdit/plugin-plantuml";
import { MermaidMarkdown } from "vitepress-plugin-mermaid";


export const teekConfig = defineTeekConfig({
  author: { name: "Teeker", link: "https://github.com/Kele-Bingtang" },
  pageStyle: "segment-nav",
  blogger: {
    avatar: "https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/user/avatar1.png",
    shape: "circle-rotate",
    name: "天客",
    slogan: "朝圣的使徒，正在走向编程的至高殿堂！",
    circleBgImg: "/blog/bg4.webp",
    color: "#ffffff",
  },
  teekHome: true,  // 是否启用 Teek 的首页风格
  vpHome: false,
  banner: {
    name: "🎉 Vitepress-teek-template 🎉",
    bgStyle: "fullImg",
    imgSrc: ["/blog/bg1.webp", "/blog/bg2.webp", "/blog/bg3.webp"],
    description: [
      "那不是我的月亮，但有一刻，月光确实照在了我的身上。—— 佚名",
      "我宁愿犯错，也不愿什么都不做。不要放弃，直到做对为止。—— 艾克",
      "无人扶我青云志， 我自踏雪至山巅。若是命中无此运， 孤身亦可登昆仑。—— 佚名",
      "我曾踏足山巅，也曾陷入低谷，二者都让我受益良多。攀登的过程也许漫长，但巅峰的风景是值得的。—— 塔里克",
      "时间不在于你拥有多少，而在于你怎样使用。—— 艾克",
      "真正的大师，永远都怀着一颗学徒的心。—— 易",
    ],
    descStyle: "types",
  },
  // 背景图片配置
  bodyBgImg: {},
  vitePlugins: {
    permalink: true,
    permalinkOption: {
      ignoreList: ["**/imgs/"], // 支持正则表达式
    },
    autoFrontmatter: true,
    sidebar: true,
    docAnalysis: true,
    sidebarOption: {
      initItems: false,
      collapsed: true,  // 是否折叠
      ignoreList: ["imgs"],
    },
  },
  breadcrumb: {
    enabled: false, // 是否启用面包屑
    showCurrentName: false, // 面包屑最后一列是否显示当前文章的文件名
    separator: "/", // 面包屑分隔符
  },
  docAnalysis: {
    createTime: "2025-07-24",
    statistics: {
      provider: "busuanzi",
    },
  },
  // https://teek.tianke99.cn/reference/article-config.html#articleanalyze
  articleAnalyze: {
    showIcon: true, // 作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息的图标是否显示
    dateFormat: "yyyy-MM-dd", // 文章日期格式，首页和文章页解析日期时使用
    showInfo: true, // 是否展示作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息，分别作用于首页和文章页
    showAuthor: false, // 是否展示作者
    showCreateDate: true, // 是否展示创建日期
    showUpdateDate: true, // 是否展示更新日期，仅在文章页显示
    showCategory: false, // 是否展示分类
    showTag: false, // 是否展示标签
    // 有问题：第一次不显示，刷新后显示。
    // teleport: {
    //   selector: "h1",
    //   position: "after",
    //   className: "h1-bottom-info",
    // },
  },
  // 精选文章
  topArticle: {
    enabled: true, // 是否启用精选文章卡片
    limit: 5, // 一页显示的数量
    autoPage: false, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
    dateFormat: "yyyy-MM-dd", // 精选文章的日期格式
  },
  // 文章页底部的最近更新栏
  articleUpdate: {
    enabled: false, // 是否启用文章最近更新栏
    limit: 3, // 文章最近更新栏显示数量
  },
  footerInfo: {
    theme: {
      name: `Theme By Teek@${version}`,
    },
    copyright: {
      createYear: 2024,
      suffix: "Teek",
    },
    icpRecord: {
      name: '粤ICP备xxxxxx号-1',
      link: 'https://beian.miit.gov.cn/'
    }
  },
  codeBlock: {
    disabled: false, // 是否禁用新版代码块
    collapseHeight: 700, // 超出高度后自动折叠，设置 true 则默认折叠，false 则默认不折叠
    copiedDone: TkMessage => TkMessage.success("复制成功！"),
  },
  post: {
    showCapture: false,
  },
  articleShare: { enabled: true },
  // 请参考文档配置
  // comment: {
  //   provider: "twikoo",
  //   options: {
  //     envId: '',
  //   },
  // },
  // siteAnalytics: [
  //   {
  //     provider: "google",
  //     options: {
  //       id: "",
  //     },
  //   },
  // ],
  friendLink: {
    list: [
      {
        name: "Teeker",
        desc: "朝圣的使徒，正在走向编程的至高殿堂！",
        avatar: "https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/user/avatar2.png",
        link: "http://notes.teek.top/",
      },
      {
        name: "vitepress-theme-teek",
        desc: "✨一个轻量、简洁高效、灵活配置的 VitePress 主题",
        avatar: "https://vp.teek.top/teek-logo-large.png",
        link: "http://vp.teek.top/",
      },
      {
        name: "二丫讲梵",
        desc: "💻学习📝记录🔗分享",
        avatar: "https://wiki.eryajf.net/img/logo.png",
        link: "https://wiki.eryajf.net/",
      },
    ],
    autoPage: true,
    titleClick: router => router.go("/friends"),
  },
  markdown: {
    config: (md) => {
      md.use(plantuml).use(plantuml, { name: 'mindmap' }).use(plantuml, { name: 'wbs' })
        .use(MermaidMarkdown);
    }
  }
});