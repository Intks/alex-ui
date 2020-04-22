import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/scss/main.scss'

import aDomsUI from '../packages/index'

import DemoBlock from './components/demoBlock.vue'
Vue.component('demo-block', DemoBlock)

Vue.config.productionTip = false

Vue.use(aDomsUI)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
