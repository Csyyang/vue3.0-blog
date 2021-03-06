import axios from 'axios'
import loading from '@/plugin/loading/index'
import tips from '@/plugin/tips/index'


let loadings = loading.serve()

const service = axios.create({
  baseURL: process.env.VUE_APP_URL,
  timeout: 100000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    loadings.show()
    // do something before request is sent

    // config.data['tokenId'] = sessionStorage.getItem('tokenId')
    // }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    // toast.clear()
    loadings.close()
    const res = response.data
    if (res.code === 'timeout') {
      // to re-login
      return Promise.reject(new Error(res.message || 'Error'))
    } else if (res.code !== '00') {
        console.log(res.message)
        tips.serve(res.message,'danger')
        return res
    } else {
      return res
    }
  },
  error => {
    loadings.close()
    tips.serve(error,'danger')
    console.log(error) // for debug
    const reg1 = /timeout/gi
    let msg = error.message
    if (reg1.test(msg)) {
      msg = '请求超时,请检查网络环境'
    }
    return Promise.reject(error)
  }
)

export default service
