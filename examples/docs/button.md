# Button 按钮
----
### 基本用法
使用```type```、```plain```和```round```属性来定義 Button 的樣式。

<div class="demo-block">
  <div>
    <adoms-button>默認按鈕</adoms-button>
    <adoms-button type="primary">主要按鈕</adoms-button>
    <adoms-button type="success">成功按鈕</adoms-button>
    <adoms-button type="info">信息按鈕</adoms-button>
    <adoms-button type="warning">警告按鈕</adoms-button>
    <adoms-button type="danger">危險按鈕</adoms-button>
  </div>
  
  <div class="m-10">
    <adoms-button round>圆形按鈕</adoms-button>
    <adoms-button type="primary" round>主要按鈕</adoms-button>
    <adoms-button type="success" round>成功按鈕</adoms-button>
    <adoms-button type="info" round>信息按鈕</adoms-button>
    <adoms-button type="warning" round>警告按鈕</adoms-button>
    <adoms-button type="danger" round>危险按鈕</adoms-button>
  </div>
</div>

::: demo
```html

<div>
  <adoms-button>默認按鈕</adoms-button>
  <adoms-button type="primary">主要按鈕</adoms-button>
  <adoms-button type="success">成功按鈕</adoms-button>
  <adoms-button type="info">信息按鈕</adoms-button>
  <adoms-button type="warning">警告按鈕</adoms-button>
  <adoms-button type="danger">危险按鈕</adoms-button>
</div>

<div>
  <adoms-button round>圓形按鈕</adoms-button>
  <adoms-button type="primary" round>主要按鈕</adoms-button>
  <adoms-button type="success" round>成功按鈕</adoms-button>
  <adoms-button type="info" round>信息按鈕</adoms-button>
  <adoms-button type="warning" round>警告按鈕</adoms-button>
  <adoms-button type="danger" round>危险按鈕</adoms-button>
</div>

```
:::

### 禁用狀態

按鈕不可用的狀態

<div class="demo-block">
  <div>
    <adoms-button disabled>默认按鈕</adoms-button>
    <adoms-button type="primary" disabled>主要按鈕</adoms-button>
    <adoms-button type="success" disabled>成功按鈕</adoms-button>
    <adoms-button type="info" disabled>信息按鈕</adoms-button>
    <adoms-button type="warning" disabled>警告按鈕</adoms-button>
    <adoms-button type="danger" disabled>危险按鈕</adoms-button>
  </div>
</div>

::: demo
```html

<div>
  <adoms-button disabled>默认按鈕</adoms-button>
  <adoms-button type="primary" disabled>主要按鈕</adoms-button>
  <adoms-button type="success" disabled>成功按鈕</adoms-button>
  <adoms-button type="info" disabled>信息按鈕</adoms-button>
  <adoms-button type="warning" disabled>警告按鈕</adoms-button>
  <adoms-button type="danger" disabled>危险按鈕</adoms-button>
</div>
  
```


:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   default,medium,small            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| plain     | 是否朴素按鈕   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
