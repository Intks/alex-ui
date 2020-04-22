# Input 輸入框

通過鼠標或鍵盤輸入字符

Input 為受控組件，它**總會顯示 Vue 綁定值**。

通常情況下，應當處理 `input` 事件，並更新組件的綁定值（或使用`v-model`）。否則，輸入框內顯示的值將不會改變。

不支持 `v-model` 修飾符。


## 基礎用法
<div class="demo-block">
  <adoms-input type="text" placeholder="請輸入內容"></adoms-input>
</div>

:::demo
```html
<adoms-input type="text" placeholder="請輸入內容"></adoms-input>

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


## 禁用狀態

<div class="demo-block">
  <adoms-input type="text" placeholder="請輸入內容" :disabled="true"></adoms-input>
</div>

:::demo 通過 `disabled` 屬性指定是否禁用 input 組件
```html
<adoms-input
  placeholder="請輸入內容"
  type="text"
  :disabled="true">
</adoms-input>

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

## 復合型用法

<div class="demo-block">
  <adoms-input placeholder="請輸入內容" type="text">
      <template slot="prepend">Http://</template>
      <template slot="append">.com</template>
  </adoms-input>
</div>

:::demo
```html
<adoms-input placeholder="請輸入內容" type="type">
    <template slot="prepend">Http://</template>
    <template slot="append">.com</template>
</adoms-input>

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

## 文本域
用於輸入多行文本信息，通過將 `type` 屬性的值指定為 textarea。

<div class="demo-block">
  <adoms-input
    type="textarea"
    :rows="2"
    placeholder="請輸入內容">
  </adoms-input>
</div>

:::demo 文本域高度可通過 `rows` 屬性控制
```html
<adoms-input
  type="textarea"
  :rows="2"
  placeholder="請輸入內容">
</adoms-input>

<script>
export default {
  data() {
    return {
      textarea: null
    }
  }
}
</script>
```
:::

## Attributes

| 參數          | 說明            | 類型            | 可選值                 | 默認值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type         | 類型   | string  | text，textarea 和其他 [原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text |
| value / v-model | 綁定值           | string / number  | — | — |
| maxlength     | 原生屬性，最大輸入長度      | number          |  —  | — |
| minlength     | 原生屬性，最小輸入長度      | number          | — | — |
| placeholder   | 輸入框佔位文本    | string          | — | — |
| disabled      | 禁用            | boolean         | — | false   |
| size          | 輸入框尺寸，只在 `type!="textarea"` 時有效      | string          | medium / small / mini  | — |
| rows          | 輸入框行數，只對 `type="textarea"` 有效  |  number | — |  2   |
| name | 原生屬性 | string | — | — |
| readonly | 原生屬性，是否只讀 | boolean | — | false |
| resize | 控制是否能被用戶縮放 | string | none, both, horizontal, vertical | — |
| autofocus | 原生屬性，自動獲取焦點 | boolean | true, false | false |
| form | 原生屬性 | string | — | — |
| label | 輸入框關聯的label文字 | string | — | — |
| tabindex | 輸入框的tabindex | string | - | - |

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
| blur | 使 input 失去焦點 | — |