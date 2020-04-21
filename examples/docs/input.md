## Input 輸入框

通過鼠標或鍵盤輸入字符

Input 為受控組件，它**總會顯示 Vue 綁定值**。

通常情況下，應當處理 `input` 事件，並更新組件的綁定值（或使用`v-model`）。否則，輸入框內顯示的值將不會改變。

不支持 `v-model` 修飾符。


### 基礎用法

<div class="demo-block">
  <adoms-input v-model="input" placeholder="請輸入內容"></adoms-input>
</div>

:::demo
```html
<adoms-input v-model="input" placeholder="請輸入內容"></adoms-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::


### 禁用狀態

<div class="demo-block">
  <adoms-input v-model="input" placeholder="請輸入內容" :disabled="true"></adoms-input>
</div>

:::demo 通過 `disabled` 屬性指定是否禁用 input 組件
```html
<adoms-input
  placeholder="請輸入內容"
  v-model="input"
  :disabled="true">
</adoms-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::

### 文本域

<div class="demo-block">
  <adoms-input
  type="textarea"
  :rows="2"
  placeholder="請輸入內容"
  v-model="textarea">
</adoms-input>
</div>


用於輸入多行文本信息，通過將 `type` 屬性的值指定為 textarea。

:::demo 文本域高度可通過 `rows` 屬性控制
```html
<adoms-input
  type="textarea"
  :rows="2"
  placeholder="請輸入內容"
  v-model="textarea">
</adoms-input>

<script>
export default {
  data() {
    return {
      textarea: ''
    }
  }
}
</script>
```
:::

### 可自適應文本高度的文本域

<div class="demo-block">
  <adoms-input
  type="textarea"
  autosize
  placeholder="請輸入內容"
  v-model="textarea1">
</adoms-input>
<div style="margin: 20px 0;"></div>
<adoms-input
  type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}"
  placeholder="請輸入內容"
  v-model="textarea2">
</adoms-input>
</div>

通過設置 `autosize` 屬性可以使得文本域的高度能夠根據文本內容自動進行調整，並且 `autosize` 還可以設定為一個對象，指定最小行數和最大行數。

:::demo
```html
<adoms-input
  type="textarea"
  autosize
  placeholder="請輸入內容"
  v-model="textarea1">
</adoms-input>
<div style="margin: 20px 0;"></div>
<adoms-input
  type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}"
  placeholder="請輸入內容"
  v-model="textarea2">
</adoms-input>

<script>
export default {
  data() {
    return {
      textarea1: '',
      textarea2: ''
    }
  }
}
</script>
```
:::

### Input Attributes

| 參數          | 說明            | 類型            | 可選值                 | 默認值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type         | 類型   | string  | text，textarea 和其他 [原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text |
| value / v-model | 綁定值           | string / number  | — | — |
| maxlength     | 原生屬性，最大輸入長度      | number          |  —  | — |
| minlength     | 原生屬性，最小輸入長度      | number          | — | — |
| show-word-limit | 是否顯示輸入字數統計，只在 `type = "text"` 或 `type = "textarea"` 時有效 | boolean    |  —  | false |
| placeholder   | 輸入框佔位文本    | string          | — | — |
| clearable     | 是否可清空        | boolean         | — | false |
| show-password | 是否顯示切換密碼圖標| boolean         | — | false |
| disabled      | 禁用            | boolean         | — | false   |
| size          | 輸入框尺寸，只在 `type!="textarea"` 時有效      | string          | medium / small / mini  | — |
| prefix-icon   | 輸入框頭部圖標    | string          | — | — |
| suffix-icon   | 輸入框尾部圖標    | string          | — | — |
| rows          | 輸入框行數，只對 `type="textarea"` 有效  |  number | — |  2   |
| autosize      | 自適應內容高度，只對 `type="textarea"` 有效，可傳入對象，如，{ minRows: 2, maxRows: 6 }  |  boolean / object | — |  false   |
| autocomplete | 原生屬性，自動補全 | string | on, off | off |
| auto-complete | 下個主版本棄用 | string | on, off | off |
| name | 原生屬性 | string | — | — |
| readonly | 原生屬性，是否只讀 | boolean | — | false |
| max | 原生屬性，設置最大值 | — | — | — |
| min | 原生屬性，設置最小值 | — | — | — |
| step | 原生屬性，設置輸入字段的合法數字間隔 | — | — | — |
| resize | 控制是否能被用戶縮放 | string | none, both, horizontal, vertical | — |
| autofocus | 原生屬性，自動獲取焦點 | boolean | true, false | false |
| form | 原生屬性 | string | — | — |
| label | 輸入框關聯的label文字 | string | — | — |
| tabindex | 輸入框的tabindex | string | - | - |
| validate-event | 輸入時是否觸發表單的校驗 | boolean | - | true |

### Input Slots
| name | 說明 |
|------|--------|
| prefix | 輸入框頭部內容，只對 `type="text"` 有效 |
| suffix | 輸入框尾部內容，只對 `type="text"` 有效 |
| prepend | 輸入框前置內容，只對 `type="text"` 有效 |
| append | 輸入框後置內容，只對 `type="text"` 有效 |

### Input Events
| 事件名稱 | 說明 | 回調參數 |
|---------|--------|---------|
| blur | 在 Input 失去焦點時觸發 | (event: Event) |
| focus | 在 Input 獲得焦點時觸發 | (event: Event) |
| change | 僅在輸入框失去焦點或用戶按下回車時觸發 | (value: string \| number) |
| input | 在 Input 值改變時觸發 | (value: string \| number) |
| clear | 在點擊由 `clearable` 屬性生成的清空按鈕時觸發 | — |

### Input Methods
| 方法名 | 說明 | 參數 |
| ---- | ---- | ---- |
| focus | 使 input 獲取焦點 | — |
| blur | 使 input 失去焦點 | — |
| select | 選中 input 中的文字 | — |

### Autocomplete Attributes

| 參數          | 說明            | 類型            | 可選值                 | 默認值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| placeholder   | 輸入框佔位文本   | string          | — | — |
| disabled      | 禁用            | boolean         | — | false   |
| value-key | 輸入建議對象中用於顯示的鍵名 | string | — | value |
| value         | 必填值，輸入綁定值   | string  | — | — |
| debounce      | 獲取輸入建議的去抖延時 | number         | — | 300 |
| placement     | 菜單彈出位置 | string         | top / top-start / top-end / bottom / bottom-start / bottom-end | bottom-start |
| fetch-suggestions | 返回輸入建議的方法，僅當你的輸入建議數據 resolve 時，通過調用 callback(data:[]) 來返回它  | Function(queryString, callback)  | — | — |
| popper-class | Autocomplete 下拉列表的類名 | string | — | — |
| trigger-on-focus | 是否在輸入框 focus 時顯示建議列表 | boolean | — | true |
| name | 原生屬性 | string | — | — |
| select-when-unmatched | 在輸入沒有任何匹配建議的情況下，按下回車是否觸發 `select` 事件 | boolean | — | false |
| label | 輸入框關聯的label文字 | string | — | — |
| prefix-icon | 輸入框頭部圖標 | string | — | — |
| suffix-icon | 輸入框尾部圖標 | string | — | — |
| hide-loading | 是否隱藏遠程加載時的加載圖標 | boolean | — | false |
| popper-append-to-body | 是否將下拉列表插入至 body 元素。在下拉列表的定位出現問題時，可將該屬性設置為 false | boolean | - | true |
| highlight-first-item | 是否默認突出顯示遠程搜索建議中的第一項 | boolean | — | false |

### Autocomplete Slots
| name | 說明 |
|------|--------|
| prefix | 輸入框頭部內容 |
| suffix | 輸入框尾部內容 |
| prepend | 輸入框前置內容 |
| append | 輸入框後置內容 |

### Autocomplete Scoped Slot
| name | 說明 |
|------|--------|
| — | 自定義輸入建議，參數為 { item } |

### Autocomplete Events
| 事件名稱 | 說明 | 回調參數 |
|---------|--------|---------|
| select | 點擊選中建議項時觸發 | 選中建議項 |
| change | 在 Input 值改變時觸發 | (value: string \| number) |

### Autocomplete Methods
| 方法名 | 說明 | 參數 |
| ---- | ---- | ---- |
| focus | 使 input 獲取焦點 | - |