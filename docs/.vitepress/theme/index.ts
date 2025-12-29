import Teek from "vitepress-theme-teek";
import './styles/index.scss'; // 引入自定义样式

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
useGuangbiaoTX(); // 调用鼠标拖尾星星动画

export default {
	extends: Teek,
};