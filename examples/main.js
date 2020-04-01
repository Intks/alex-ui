import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import AlexUI from '../packages/index'
import './assets/scss/main.scss'
Vue.config.productionTip = false

Vue.use(AlexUI)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
