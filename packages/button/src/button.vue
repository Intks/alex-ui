<template>
  <button class="adoms-button"
          :disabled="disabled"
          @click="handleClick"
          :class="[`adoms-button__${type}`, {
            'adoms-button__is-round': round,
            'adoms-button__is-circle': circle,
            'adoms-button__is-disabled': disabled
          }]">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'AdomsButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.adoms-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }

  &__primary {
    background-color: #409eff;
    border-color: #409eff;
    color: #fff;
    &:hover,
    &:focus {
      color: #fff;
      border-color: #3790ed;
      background-color: #3790ed;
    }
  }

  &__secondary {
    background-color: #3e4459;
    border-color: #3e4459;
    color: #fff;
    &:hover,
    &:focus {
      color: #fff;
      border-color: #292d3b;
      background-color: #292d3b;
    }
  }

  &__success {
    background-color: #42c928;
    border-color: #42c928;
    color: #fff;
    &:hover,
    &:focus {
      color: #fff;
      border-color: #00b847;
      background-color: #00b847;
    }
  }

  &__warning {
    background-color: #ffc50d;
    border-color: #ffc50d;
    color: #fff;
    &:hover,
    &:focus {
      color: #fff;
      border-color: #eaa108;
      background-color: #eaa108;
    }
  }

  &__danger {
    background-color: #c9302c;
    border-color: #c9302c;
    color: #fff;
    &:hover,
    &:focus {
      color: #fff;
      border-color: #b32420;
      background-color: #b32420;
    }
  }
  // 圆角
  &__is-round {
    border-radius: 20px;
    padding: 12px 24px;
  }
  &__is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  &__is-disabled {
    background-color: #f5f4f4;
    color: #9b9b9b;
    border-color: #f5f4f4;
    cursor: not-allowed;
    &:hover,
    &:focus {
      color: #9b9b9b;
      border-color: #f5f4f4;
      background-color: #f5f4f4;
    }
  }
}
</style>
