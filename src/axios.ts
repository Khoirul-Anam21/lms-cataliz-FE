import axios from 'axios'
import cookie from '@point-hub/vue-cookie'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: Number(import.meta.env.VITE_TIMEOUT),
})

if (cookie.get("accessToken")){
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${cookie.get('accessToken')}`
}
axiosInstance.interceptors.request.use(
  (config) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log('Request: ', config.url)
      console.log('Request: ', config)
    }
    return config
  },
  function (error) {
    console.log('Response Error: ', error.response)
    return Promise.reject(error.response)
  }
)

export default axiosInstance
