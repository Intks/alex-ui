<template>
  <div :class="[
    type === 'textarea' ? 'adoms-textarea' : 'adoms-input',
    size ? 'adoms-input--' + size : '',
    {
      'adoms-input-group': $slots.prepend || $slots.append
    }
    ]">
    <template v-if="type !== 'textarea'">
      <div class="adoms-input__prepend"
           v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>

      <input class="adoms-input__inner"
             ref="input"
             v-bind="$attrs"
             :type="type"
             :disabled="disabled"
             :readonly="readonly"
             :tabindex="tabindex"
             @compositionstart="handleCompositionStart"
             @compositionend="handleCompositionEnd"
             @input="handleInput"
             @focus="handleFocus"
             @blur="handleBlur"
             @change="handleChange">

      <span class="adoms-input__prefix"
            v-if="$slots.prefix">
        <slot name="prefix"></slot>
      </span>

      <span class="admos-input__suffix"
            v-if="$slots.suffix">
        <slot name="suffix"></slot>
      </span>

      <div class="adoms-input__append"
           v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </template>

    <textarea v-else
              ref="textarea"
              :tabindex="tabindex"
              class="adoms-textarea__inner"
              @compositionstart="handleCompositionStart"
              @compositionend="handleCompositionEnd"
              @input="handleInput"
              v-bind="$attrs"
              :disabled="disabled"
              :readonly="readonly"
              :style="textareaStyle"
              :aria-label="label"
              @focus="handleFocus"
              @blur="handleBlur"
              @change="handleChange"></textarea>
  </div>
</template>

<script>
export default {
  name: 'AdomsInput',
  props: {
    value: [String, Number],
    type: {
      type: String,
      required: true
    },
    tabindex: String,
    disabled: Boolean,
    readonly: Boolean,
    resize: String,
    size: String,
    label: String
  },
  data () {
    return {
      isComposing: false
    }
  },
  computed: {
    nativeInputValue () {
      return this.value === null || this.value === undefined ? null : String(this.value)
    },
    textareaStyle () {
      return { ...{ resize: this.resize } }
    }
  },
  methods: {
    handleCompositionStart () {
      // 正在輸入
      this.isComposing = true
    },
    handleCompositionEnd (event) {
      // 如果輸入結束並選擇了字詞，就觸發 input 事件
      if (this.isComposing) {
        this.isComposing = false
        this.handleInput(event)
      }
    },
    handleInput () {
      // 如果正在輸入就不觸發 input 事件
      if (this.isComposing) return
      // 沒懂這個 nativeInputValue 是啥意思
      if (event.target.value === this.nativeInputValue) return
      // 通知父組件觸發 input 方法
      this.$emit('input', event.target.value)

      this.$nextTick(this.setNativeInputValue)
    },
    handleFocus () {

    },
    handleBlur () {

    },
    handleChange () {

    }
  }
}
</script>

<style lang="scss" scoped>
.adoms-input {
  &-group {
    display: flex;
    .adoms-input__inner {
      border-radius: 0;
    }
  }
  &__prepend,
  &__append {
    display: flex;
    justify-self: center;
    align-items: center;
    padding: 8px 16px;
    background-color: #eee;
  }

  &__prepend {
    border-radius: 2px 0px 0px 2px;
  }

  &__append {
    border-radius: 0px 2px 2px 0px;
  }

  &__inner {
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid #eee;
    outline: none;
    &:disabled {
      cursor: not-allowed;
      background: #eee;
    }
  }
}
.adoms-textarea {
  &__inner {
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px solid #eee;
    outline: none;
  }
}
</style>
