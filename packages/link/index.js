import adomsLink from './src/link.vue'

adomsLink.install = function (Vue) {
  Vue.component(adomsLink.name, adomsLink)
}

export default adomsLink
