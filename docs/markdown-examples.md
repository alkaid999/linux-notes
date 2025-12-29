# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).

1. 代码块悬停样式：https://github.com/shikijs/shiki/issues/123 https://github.com/shikijs/shiki/pull/106 代码块悬停样式：https://github.com/shikijs/shiki/issues/123 https://github.com/shikijs/shiki/pull/106 代码块悬停样式：https://github.com/shikijs/shiki/issues/123 https://github.com/shikijs/shiki/pull/106 代码块悬停样式：https://github.com/shikijs/shiki/issues/123 https://github.com/shikijs/shiki/pull/106 
2. 代码块悬停样式：https://github.com/shikijs/shiki/issues/123 https://github.com/shikijs/shiki/pull/106 代码块悬停样式：https://github.com/shikijs/shiki/issues/123 https://github.com/shikijs/shiki/pull/106 代码块悬停样式：https://github.com/shikijs/shiki/issues/123 https://github.com/shikijs/shiki/pull/106 代码块悬停样式：https://github.com/shikijs/shiki/issues/123 https://github.com/shikijs/shiki/pull/106 代码块悬停样式：https://github.com/shikijs/shiki/issues/123 https://github.com/shikijs/shiki/pull/106 代码块悬停样式：https://github.com/shikijs/shiki/issues/123 https://github.com/shikijs/shiki/pull/106 代码块悬停样式：https://github.com/shikijs/shiki/issues/123 https://github.com/shikijs/shiki/pull/106 
3. 代码块悬停样式：https://github.com/shikijs/shiki/issues/123 https://github.com/shikijs/shiki/pull/106 代码块悬停样式：https://github.com/shikijs/shiki/issues/123 https://github.com/shikijs/shiki/pull/106 代码块悬停样式：https://github.com/shikijs/shiki/issues/123 https://github.com/shikijs/shiki/pull/106 代码块悬停样式：https://github.com/shikijs/shiki/issues/123 https://github.com/shikijs/shiki/pull/106 

- 代码块悬停样式：https://github.com/shikijs/shiki/issues/123 https://github.com/shikijs/shiki/pull/106 代码块悬停样式：https://github.com/shikijs/shiki/issues/123 https://github.com/shikijs/shiki/pull/106 代码块悬停样式：https://github.com/shikijs/shiki/issues/123 https://github.com/shikijs/shiki/pull/106 
- 代码块悬停样式：https://github.com/shikijs/shiki/issues/123 https://github.com/shikijs/shiki/pull/106 代码块悬停样式：https://github.com/shikijs/shiki/issues/123 https://github.com/shikijs/shiki/pull/106 代码块悬停样式：https://github.com/shikijs/shiki/issues/123 https://github.com/shikijs/shiki/pull/106 
- 代码块悬停样式：https://github.com/shikijs/shiki/issues/123 https://github.com/shikijs/shiki/pull/106 代码块悬停样式：https://github.com/shikijs/shiki/issues/123 https://github.com/shikijs/shiki/pull/106 

```bash
echo "Hello World"
```

```console
Hello World
```

:::: field-group



::: field name="theme" type="ThemeConfig" required default="{ base: '/' }"
主题配置
:::

::: field name="enabled" type="boolean" optional default="true"
是否启用
:::

::: field name="callback" type="(...args: any[]) => void" optional default="() => {}"
回调函数
:::

::: field name="other" type="string" deprecated
已弃用属性
:::

::::


---

::: steps

1. 步骤 1

	相关内容
2. **步**骤 2

	**相关内容**

:::

  **相关内容** 粗体？