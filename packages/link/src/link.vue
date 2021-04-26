<template>
  <a class="adoms-link"
     :disabled="disabled"
     :class="[`adoms-link__${type}`, {
            'adoms-link__is-disabled': disabled
          }]"
     :href="href">
    <span>
      <slot></slot>
    </span>
  </a>
</template>

<script>
export default {
  name: 'AdomsLink',
  props: {
    href: String,
    type: String,
    disabled: Boolean
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.adoms-link {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
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
  font-size: 14px;
  border-radius: 4px;

  &__primary {
    color: #409eff;
    &:hover,
    &:focus {
      color: #409eff;
    }
  }

  &__secondary {
    color: #3e4459;
    &:hover,
    &:focus {
      color: #3e4459;
    }
  }

  &__success {
    color: #42c928;
    &:hover,
    &:focus {
      color: #42c928;
    }
  }

  &__warning {
    color: #ffc50d;
    &:hover,
    &:focus {
      color: #ffc50d;
    }
  }

  &__danger {
    color: #c9302c;
    &:hover,
    &:focus {
      color: #c9302c;
    }
  }
  &__info {
    color: #ccc;
    &:hover,
    &:focus {
      color: #ccc;
    }
  }
  &__is-disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
}
</style>
