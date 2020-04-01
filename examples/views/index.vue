<template>
  <div class="index">
    <img src="../assets/icon/logo.svg"
         alt="">
    <h1>Alex UI</h1>
    <span>A Component Library for Vue.js.</span>
    <div class="index__btn-wrapper">
      <alex-button type="secondary"
                   @click="startUse"
                   round>開始使用</alex-button>
      <alex-button type="secondary"
                   @click="directToGitHub"
                   round>GitHub</alex-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  methods: {
    startUse () {
      this.$router.push('/guide')
    },
    directToGitHub () {
      window.open('https://github.com/Intks/aDoms', '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat&display=swap");
.index {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  img {
    height: 200px;
    width: 200px;
  }
  h1 {
    margin-bottom: 24px;
    font-size: 40px;
    color: #42b983;
  }

  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: -80%;
    transform: skewX(-4deg);
    box-shadow: 0 -4px 30px 0 #dfe1e6;
  }

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: -80%;
    transform: skewX(4deg);
    box-shadow: 0 -4px 30px 0 #dfe1e6;
  }

  span {
    margin-bottom: 48px;
    font-family: "Caveat", cursive;
    font-size: 24px;
  }

  .index__btn-wrapper {
    z-index: 999;
    .alex-button {
      &:not(:last-child) {
        margin-right: 24px;
      }
    }
  }
}
</style>
