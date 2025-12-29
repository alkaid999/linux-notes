import container from 'markdown-it-container'

export function fieldPlugin(md: any) {
  // 处理 ::: field 容器
  md.use(container, 'field', {
    render: (tokens: any, idx: number) => {
      const token = tokens[idx]
      if (token.nesting === 1) {
        // 开始标签
        const name = token.info.trim().match(/name="([^"]*)"/)?.[1] || ''
        const type = token.info.trim().match(/type="([^"]*)"/)?.[1] || ''
        const required = token.info.includes('required')
        const optional = token.info.includes('optional')
        const deprecated = token.info.includes('deprecated')
        const defaultValue = token.info.trim().match(/default="([^"]*)"/)?.[1] || ''

        // 使用自定义组件的语法
        return `<VPField name="${name}" type="${type}" ${required ? ':required="true"' : ''} ${optional ? ':optional="true"' : ''} ${deprecated ? ':deprecated="true"' : ''} ${defaultValue ? `default-value="${defaultValue}"` : ''}>`
      } else {
        // 结束标签
        return '</VPField>\n'
      }
    }
  })

  // 处理 :::: field-group 容器
  md.use(container, 'field-group', {
    render: (tokens: any, idx: number) => {
      const token = tokens[idx]
      if (token.nesting === 1) {
        // 开始标签
        return '<div class="vp-field-group">\n'
      } else {
        // 结束标签
        return '</div>\n'
      }
    }
  })
}