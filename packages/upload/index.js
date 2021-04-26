import adomsUpload from './src/upload.vue'

adomsUpload.install = function (Vue) {
  Vue.component(adomsUpload.name, adomsUpload)
}

export default adomsUpload
