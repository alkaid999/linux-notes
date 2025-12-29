import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";
import { stepsPlugin } from './plugins/steps';
import { fieldPlugin } from './plugins/field';

// Teek 主题配置
const teekConfig = defineTeekConfig({});

// vitepress 配置
export default defineConfig({
  extends: teekConfig,
  
  title: "My Awesome Project",
  description: "A VitePress Site",
  
  markdown: {
    config: (md) => {
      md.use(fieldPlugin);
      md.use(stepsPlugin);
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
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  
});
