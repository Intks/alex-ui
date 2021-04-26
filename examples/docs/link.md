# Link
----
## 基本用法
使用```type```屬性来定義 Link 的樣式。

<div class="demo-block">
  <div>
    <adoms-link>默認</adoms-link>
    <adoms-link type="primary">主要</adoms-link>
    <adoms-link type="success">成功</adoms-link>
    <adoms-link type="info">信息</adoms-link>
    <adoms-link type="warning">警告</adoms-link>
    <adoms-link type="danger">危險</adoms-link>
  </div>
</div>

::: demo
```html

<div>
  <adoms-link>默認</adoms-link>
  <adoms-link type="primary">主要</adoms-link>
  <adoms-link type="success">成功</adoms-link>
  <adoms-link type="info">信息</adoms-link>
  <adoms-link type="warning">警告</adoms-link>
  <adoms-link type="danger">危險</adoms-link>
</div>

```
:::

## 禁用狀態

按鈕不可用的狀態

<div class="demo-block">
  <div>
    <adoms-link disabled>默認</adoms-link>
    <adoms-link type="primary" disabled>主要</adoms-link>
    <adoms-link type="success" disabled>成功</adoms-link>
    <adoms-link type="info" disabled>信息</adoms-link>
    <adoms-link type="warning" disabled>警告</adoms-link>
    <adoms-link type="danger" disabled>危險</adoms-link>
  </div>
</div>

::: demo
```html

<div>
  <adoms-link disabled>默認</adoms-link>
  <adoms-link type="primary" disabled>主要</adoms-link>
  <adoms-link type="success" disabled>成功</adoms-link>
  <adoms-link type="info" disabled>信息</adoms-link>
  <adoms-link type="warning" disabled>警告</adoms-link>
  <adoms-link type="danger" disabled>危險</adoms-link>
</div>
  
```
:::

## Attributes
| 參數      | 說明    | 類型      | 可選值       | 默認值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   default,medium,small            |    —     |
| type     | 類型   | string    |   primary,success,warning,danger,info |     —    |
| disabled  | 是否禁用狀態    | boolean   | —   | false   |
| href  | 原生屬性    | string   | —   |  —  |
