import { message } from 'ant-design-vue'

export default function ({ $axios }) {
  $axios.interceptors.request.use((config) => {
    return config
  })

  $axios.interceptors.response.use(
    (response) => {
      return Promise.resolve(response.data)
    },
    (error) => {
      // 客户端抛出错误
      if (process.client) {
        message.error(error.message || '发生未知错误，请稍后重试')
      }
      return Promise.reject(error.response || {})
    },
  )
}
