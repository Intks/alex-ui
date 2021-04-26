<template>
  <div class="adoms-upload">
    <input class="adoms-upload__input"
           type="file"
           ref="input"
           @change="onUploadChange">

    <div class="adoms-upload__trigger"
         @click="triggerUpload">
      <slot></slot>
    </div>

    {{files}}
  </div>
</template>

<script>
export default {
  name: 'AdomsUpload',
  props: {
    limit: {
      type: Number,
      default: null
    },
    beforeUpload: {
      type: Function
    },
    action: {
      type: String,
      default: '123'
    },
    name: {
      type: String,
      default: ''
    },
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      files: [],
      tempIndex: 0
    }
  },
  methods: {
    triggerUpload () {
      this.$refs.input.click()
    },
    onUploadChange (element) {
      const rawFiles = [...element.target.files]
      this.uploadFiles(rawFiles)
    },
    uploadFiles (raw) {
      const filesLength = raw.length + this.files.length
      if (this.limit && this.limit < filesLength) {
        return this.onExceed(raw, this.files)
      }

      this.startUpload(raw)
    },
    startUpload (raw) {
      raw.forEach(rawFile => {
        const file = this.normalizeFiles(rawFile)
        if (!this.beforeUpload || this.beforeUpload()) {
          this.upload(file)
        }
      })
    },
    normalizeFiles (raw) {
      const file = {
        name: raw.name,
        size: raw.size,
        type: raw.type,
        percent: 0,
        uid: Date.now() + this.tempIndex++,
        status: 'init',
        raw
      }

      this.files.push(file)

      return file
    },
    upload (file) {
      const options = {
        url: this.action,
        name: this.name,
        file: file.raw,
        data: this.data,
        onSuccess: this.handleSuccess.bind(this, file),
        onError: this.handleError.bind(this, file),
        onProgress: this.handleProgress.bind(this, file)
      }

      file.status = 'pending'

      this.onChange(file, this.files)

      const req = this.customerHttpRequest(options)

      if (req instanceof Promise) {
        req.then(options.onSuccess, options.onError)
      }
    },
    onChange (file, fileList) {
      console.log(file, fileList)
    },
    handleSuccess (file, response) {
      file.status = 'success'
      this.$set(file, 'url', response.data.path)
      this.onChange(file, this.files)
      this.onSuccess(response, file, this.files)
    },
    handleError (file, error) {
      file.status = 'failure'
      this.onError(error, file, this.files)
    },
    handleProgress (file, event) {
      file.percent = event.percent

      this.onChange(file, this.files)
      this.onProgress(event, file, this.files)
    },
    customerHttpRequest ({ url, name, file, data, onSuccess, onError, onProgress }) {
      const processResponse = (response) => {
        if (typeof response === 'string') {
          try {
            return JSON.parse(response)
          } catch (e) {
            return response
          }
        }
        return response
      }

      const xhr = new XMLHttpRequest()
      const formData = new FormData()

      formData.append(name, file)
      Object.entries(data).forEach(([key, value]) => formData.append(key, value))
      console.log(formData)

      xhr.upload.addEventListener('progress', e => {
        e.percent = e.loaded / e.total * 100

        onProgress(e)

        xhr.open('POST', url)
        xhr.send(formData)
        xhr.addEventListener('load', () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            const response = processResponse(xhr.response)
            onSuccess(response)
          } else {
            onError(new Error('upload request fialed~~'))
          }
        })
      })

      xhr.addEventListener('error', e => {
        onError(e)
      })

      return xhr
    }
  }
}
</script>

<style lang="scss" scoped>
.adoms-upload {
  &__input {
    display: none;
  }

  &__trigger {
    padding: 16px 8px;
    cursor: pointer;
    border: 1px solid #eee;
    border-radius: 8px;
    width: 300px;
    transition: 0.2s;

    &:hover {
      transform: translateY(2px);
    }
  }
}
</style>
