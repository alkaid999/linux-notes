# Field 组件测试

这是一个测试页面，用于验证 VPField 组件是否正常工作。

## 基本用法

::: field name="username" type="string" required
用户名，用于登录系统
:::

::: field name="password" type="string" required
密码，用于验证用户身份
:::

## 带默认值的字段

::: field name="age" type="number" optional default="18"
用户年龄，可选填
:::

::: field name="email" type="string" optional default="user@example.com"
用户邮箱，可选填
:::

## 已弃用的字段

::: field name="oldApi" type="string" deprecated
旧的API接口，已弃用
:::

## 字段组

:::: field-group

::: field name="firstName" type="string" required
名字
:::

::: field name="lastName" type="string" required
姓氏
:::

::: field name="middleName" type="string" optional
中间名
:::

::::

## 复杂描述

::: field name="options" type="object" optional
配置选项对象，包含以下属性：
- `theme`: 主题设置
- `language`: 语言设置
- `timezone`: 时区设置

这些选项可以在用户设置中进行修改。
:::