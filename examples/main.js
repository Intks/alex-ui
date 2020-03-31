import Vue from 'vue'
import App from './App.vue'

import AlexUI from '../packages/index'

Vue.config.productionTip = false

Vue.use(AlexUI)

new Vue({
  render: h => h(App)
}).$mount('#app')