<template>
  <header class="page-header">
    <div class="header-container">
      <router-link :to="{name: 'index'}">
        <img src="../assets/icon/logo.svg"
             alt="">
      </router-link>
      <router-link :to="{name: 'Document'}">Document</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.page-header {
  background-color: #fff;
  box-shadow: 0 10px 60px 0 rgba(29, 29, 31, 0.07);
  opacity: 0.98;
  position: relative !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  transition: all 0.3s;
  z-index: 100;
  .header-container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 80px;
    justify-content: space-between;
    a {
      color: #42b983;
      transition: 0.2s;
      img {
        height: 60px;
        width: 60px;
      }
      &:hover {
        color: #bbe6d6;
      }
    }
  }
}
</style>
