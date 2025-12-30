import Teek from "vitepress-theme-teek";
import type { Theme } from "vitepress"; // 引入 VitePress 主题类型
import "./styles/index.scss"; // 引入自定义样式

// Teek 在线主题包引用（需安装 Teek 在线版本）
import "vitepress-theme-teek/index.css";
import "vitepress-theme-teek/vp-plus/aside.scss"; // 右侧目栏录文字悬停和激活样式
import "vitepress-theme-teek/vp-plus/blockquote.scss"; // 引用块样式
import "vitepress-theme-teek/vp-plus/brand-color-animation.scss"; // 主题色定时切换
import "vitepress-theme-teek/vp-plus/code-block-mobile.scss"; // 代码块移动端样式
import "vitepress-theme-teek/vp-plus/container-bg.scss"; // 容器背景样式更改，内置 container-var
// import "vitepress-theme-teek/vp-plus/container-fluid.scss"; // 容器流体样式
import "vitepress-theme-teek/vp-plus/container-icon.scss"; // 容器 ICON 样式
// import "vitepress-theme-teek/vp-plus/container-left.scss"; // 容器左侧框样式
import "vitepress-theme-teek/vp-plus/container-var.scss"; // 容器 css var 变量
import "vitepress-theme-teek/vp-plus/doc-fade-in.scss"; // 文章页淡入效果
import "vitepress-theme-teek/vp-plus/doc-h1-gradient.scss"; // 文章一级标题渐变色
import "vitepress-theme-teek/vp-plus/index-rainbow.scss"; // 首页图片彩虹动画
import "vitepress-theme-teek/vp-plus/mark.scss"; // 文章内容标记样式（mark 标签）
import "vitepress-theme-teek/vp-plus/nav-blur.scss"; // 导航栏毛玻璃样式
import "vitepress-theme-teek/vp-plus/nav-search-button.scss"; // 导航栏搜索按钮样式
import "vitepress-theme-teek/vp-plus/nav-switch-button.scss"; // 导航栏深色、浅色模式切换按钮样式
import "vitepress-theme-teek/vp-plus/nav-translation.scss"; // 导航栏国际化下拉样式
import "vitepress-theme-teek/vp-plus/sidebar.scss"; //侧边栏样式
import "vitepress-theme-teek/vp-plus/table.scss"; // 表格样式调整，去掉单元格之间的线条
import "vitepress-theme-teek/vp-plus/scrollbar.scss"; // 滚动条样式

import "./components/guangbiaoTX/guangbiaoTX.scss"; // 鼠标拖尾星星动画样式
import { useGuangbiaoTX } from "./components/guangbiaoTX/useGuangbiaoTX"; // 鼠标拖尾星星动画

import VPField from "./components/VPField.vue"; // 引入 Field 容器组件
import "vitepress-markdown-timeline/dist/theme/index.css"; // 引入时间线插件样式
import { initComponent } from 'vitepress-mermaid-preview/component'; // 初始化 mermiad 插件组件
import 'vitepress-mermaid-preview/dist/index.css'; // 引入 mermiad 插件样式
import { LiteTree } from '@lite-tree/vue' // 引入 LiteTree 组件

// 定义 VitePress 主题
const theme: Theme = {
  extends: Teek,
  enhanceApp: ({ app }: any) => {
    app.component("VPField", VPField); // 注册 Field 容器组件
    useGuangbiaoTX(); // 初始化鼠标拖尾星星动画
	initComponent(app); // 初始化 mermiad 插件组件
	app.component('LiteTree', LiteTree); // 注册 LiteTree 组件
  },
};

// 导出 VitePress 主题
export default theme;
