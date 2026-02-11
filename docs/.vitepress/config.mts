import { defineConfig } from "vitepress"; // 导入 VitePress 配置函数
import { defineTeekConfig } from "vitepress-theme-teek/config"; // 导入 Teek 主题配置函数
import { stepsPlugin } from "./plugins/steps"; // 导入步骤插件
import { fieldPlugin } from "./plugins/field"; // 导入字段插件
import timeline from "vitepress-markdown-timeline"; // 导入时间线插件
import { vitepressMermaidPreview } from "vitepress-mermaid-preview"; // 导入 mermaid 插件
import { nav } from "./config/nav.mts"; // 导航栏

// Teek 主题配置
const teekConfig = defineTeekConfig({
  teekHome: true, // 开启 Teek 首页风格
  vpHome: false, // 关闭 VitePress 首页风格
  backTop: { content: "icon" }, // 回到顶部将实时数字换成一个火箭图标
  toComment: { enabled: false }, // 关闭滚动滚动到评论区按钮
  // 代码块配置
  codeBlock: {
    langTextTransform: "capitalize", // 代码块语言文本转换为首字母大写
    collapseHeight: 700, // 折叠高度，超过此高度的代码块将折叠
    overlay: true, // 代码块底部是否显示展开/折叠遮罩层
    overlayHeight: 400, // 当出现遮罩层时，指定代码块显示高度，当 overlay 为 true 时生效
    copiedDone: (TkMessage) => TkMessage.success("复制成功！"), // 复制成功提示
  },
  sidebarTrigger: true, // 开启边栏展开/折叠触发器
  articleUpdate: { enabled: false }, // 关闭文章最近更新栏
  vitePlugins: {
    sidebarOption: { collapsed: true }, // 开启侧边栏折叠
  },
  // 自定义 Banner 配置
  banner: {
    enabled: true, // 是否启用 Banner
    name: "Teek", // Banner 标题，默认读取 vitepress 的 title 属性
    bgStyle: "fullImg", // Banner 背景风格：pure 为纯色背景，partImg 为局部图片背景，fullImg 为全屏图片背景
    pureBgColor: "#28282d", // Banner 背景色，bgStyle 为 pure 时生效
    imgSrc: ["/images/banner.png"], // Banner 图片链接。bgStyle 为 partImg 或 fullImg 时生效
    imgInterval: 15000, // 当多张图片时（imgSrc 为数组），设置切换时间，单位：毫秒
    imgShuffle: false, // 图片是否随机切换，为 false 时按顺序切换，bgStyle 为 partImg 或 fullImg 时生效
    imgWaves: true, // 是否开启 Banner 图片波浪纹，bgStyle 为 fullImg 时生效
    mask: true, // Banner 图片遮罩，bgStyle 为 partImg 或 fullImg 时生效
    maskBg: "rgba(0, 0, 0, 0.4)", // Banner 遮罩颜色，如果为数字，则是 rgba(0, 0, 0, ${maskBg})，如果为字符串，则作为背景色。bgStyle 为 partImg 或 fullImg 且 mask 为 true 时生效
    textColor: "#ffffff", // Banner 字体颜色，bgStyle 为 pure 时为 '#000000'，其他为 '#ffffff'
    titleFontSize: "3.2rem", // 标题字体大小
    descFontSize: "1.4rem", // 描述字体大小
    descStyle: "types", // 描述信息风格：default 为纯文字渲染风格（如果 description 为数组，则取第一个），types 为文字打印风格，switch 为文字切换风格
    description: [
      "自然赠予你 树冠 微风 肩头的暴雨 片刻后生成 平衡 忠诚 不息的身体 捕食饮水 清早眉间白云生",
      "跳跃漫游 晚来拂面渤海风 朝霞化精灵 轻快 明亮 恒温的伴侣 她与你共存 违背 对抗 相同的命运 爱与疼痛 不觉茫茫道路长",
      "生活历险 并肩莽莽原野荒 山崖复远望 仓皇 无告 不回的河流 平原不可见 晦暗 无声 未知的存亡",
      "大雾重重 时代喧哗造物忙 火光忷忷 指引盗寇入太行 大雾重重 时代喧哗造物忙 火光忷忷 指引盗寇入太行",
    ], // 描述信息
    switchTime: 4000, // 描述信息切换间隔时间，单位：毫秒。descStyle 为 switch 时生效
    switchShuffle: false, // 描述信息是否随机切换，为 false 时按顺序切换。descStyle 为 switch 时生效
    typesInTime: 200, // 输出一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesOutTime: 50, // 删除一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesNextTime: 500, // 打字与删字的间隔时间，单位：毫秒。descStyle 为 types 时生效
    typesShuffle: false, // 描述信息是否随机打字，为 false 时按顺序打字，descStyle 为 types 时生效
  },
});

// vitepress 配置
export default defineConfig({
  extends: teekConfig,

  title: "My Awesome Project",
  description: "A VitePress Site",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico", type: "image/png" }], // favicon
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/c/font_3243406_csbxz52z397.css", // 配置 iconfont 图标
      },
    ],
  ], 
  // 配置 markdown 解析器
  markdown: {
    config: (md) => {
      md.use(fieldPlugin); // 注册字段插件
      md.use(stepsPlugin); // 注册步骤插件
      md.use(timeline); // 注册时间线插件
      md.use(vitepressMermaidPreview); // 注册 mermaid 插件
    },
  },

  // Vue 配置选项
  vue: {
    template: {
      compilerOptions: {
        whitespace: "preserve",
      },
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav, // 导航栏
    outline: [2, 3], // 侧边栏大纲深度，默认值为 [2, 4]

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    search: {
      provider: "local",
    },
  },
});
