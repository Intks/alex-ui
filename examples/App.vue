<template>
  <div id="app">
    <the-header></the-header>
    <div :class="{'container': nowRoute !== 'index', 'view': nowRoute === 'index'}">
      <router-view :class="{'view': nowRoute !== 'index'}"></router-view>
    </div>
  </div>
</template>

<script>
import theHeader from './components/header'
export default {
  name: 'app',
  components: {
    theHeader
  },
  data () {
    return {
    }
  },
  computed: {
    nowRoute () {
      return this.$route.name
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  font-family: "myFont";
  width: 100%;
  .container {
    margin: 48px auto;
    width: 90%;
    background-color: #fff;
    box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
    .view {
      padding: 32px;
    }
  }
  .view {
    height: calc(100% - 90px);
    width: 100%;
  }
}
</style>
