<template>
  <div id="app">
    <the-header></the-header>
    <div :class="{'container': nowRoute !== 'index', 'view': nowRoute === 'index'}">
      <template v-if="nowRoute !== 'index'">
        <side-nav></side-nav>
        <router-view class="view"></router-view>
      </template>

      <router-view v-else></router-view>
    </div>
  </div>
</template>

<script>
import theHeader from './components/header'
import sideNav from './components/sideNav'
export default {
  name: 'app',
  components: {
    theHeader,
    sideNav
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
@import "./assets/scss/main.scss";
@font-face {
  font-family: "myFont";
  src: url("./font/jf-openhuninn.ttf") format("truetype");
}
#app {
  height: 100%;
  font-family: "myFont";
  width: 100%;
  .container {
    margin: 48px auto;
    display: flex;
    width: 90%;
    background-color: #fff;
    box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
    .view {
      padding: 32px;
    }
  }
  .view {
    height: calc(100% - 90px);
    width: calc(100% - 64px);
  }
}
</style>
