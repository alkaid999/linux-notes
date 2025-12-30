import { defineConfig } from "vitepress"; // 导入 VitePress 配置函数
import { defineTeekConfig } from "vitepress-theme-teek/config"; // 导入 Teek 主题配置函数
import { stepsPlugin } from './plugins/steps'; // 导入步骤插件
import { fieldPlugin } from './plugins/field'; // 导入字段插件
import timeline from "vitepress-markdown-timeline"; // 导入时间线插件
import { vitepressMermaidPreview } from 'vitepress-mermaid-preview'; // 导入 mermaid 插件

// Teek 主题配置
const teekConfig = defineTeekConfig({});

// vitepress 配置
export default defineConfig({
  extends: teekConfig,
  
  title: "My Awesome Project",
  description: "A VitePress Site",
  
  markdown: {
    config: (md) => {
      md.use(fieldPlugin); // 注册字段插件
      md.use(stepsPlugin); // 注册步骤插件
      md.use(timeline); // 注册时间线插件
      md.use(vitepressMermaidPreview); // 注册 mermaid 插件
    }
  },
    vue:{
    template: {                      
      compilerOptions: {
        whitespace: 'preserve'
      }
	}
	},


  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
          { text: "Field Component Test", link: "/field-test" },
          { text: "Steps Plugin Test", link: "/steps-test" },
          { text: "Timeline Test", link: "/timelink" },
          { text: "Mermaid Test", link: "/mermaid-test" },
          { text: "Code Block Test", link: "/code-test" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  
});