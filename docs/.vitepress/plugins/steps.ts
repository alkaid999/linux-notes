/**
 * VitePress Steps 插件
 * 将 ::: steps 语法转换为步骤容器
 */

import container from 'markdown-it-container';

export function stepsPlugin(md: any) {
  // 处理 ::: steps 容器
  md.use(container, 'steps', {
    render: (tokens: any, idx: number) => {
      const token = tokens[idx];
      if (token.nesting === 1) {
        // 开始标签
        return '<div class="vp-steps">\n';
      } else {
        // 结束标签
        return '</div>\n';
      }
    }
  });
}