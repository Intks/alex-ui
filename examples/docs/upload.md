# Upload 上傳

上傳進度條顯示

圖片預覽

自定義上傳方法(request)

圖片數量限制

拖曳上傳


## 基礎用法
<div class="demo-block">
  <adoms-upload>上傳</adoms-upload>
</div>

:::demo
```html
<adoms-upload ></adoms-upload>

<script>
export default {
  data() {
    return {
      input: null
    }
  }
}
</script>
```
:::

## Attributes

| 參數          | 說明            | 類型            | 可選值                 | 默認值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| name         | 類型   | string  | — | text |
| limit | 文件上傳限制數量          |  number  | — | — |
| fileList     | 已上傳的文件列表      | array          |  —  | — |
| action     | 文件上傳地址      | string          | — | — |
<!-- 
## Slots
| name | 說明 |
|------|--------|
| prepend | 輸入框前置內容，只對 `type="text"` 有效 |
| append | 輸入框後置內容，只對 `type="text"` 有效 |

## Events
| 事件名稱 | 說明 | 回調參數 |
|---------|--------|---------|
| blur | 在 Input 失去焦點時觸發 | (event: Event) |
| focus | 在 Input 獲得焦點時觸發 | (event: Event) |
| change | 僅在輸入框失去焦點或用戶按下回車時觸發 | (value: string \| number) |
| input | 在 Input 值改變時觸發 | (value: string \| number) |

## Methods
| 方法名 | 說明 | 參數 |
| ---- | ---- | ---- |
| focus | 使 input 獲取焦點 | — |
| blur | 使 input 失去焦點 | — | -->