import axios from 'axios'

const reqH = (options = {}) => {
  const requestOptions = {}

  if (typeof options.method === 'undefined') {
    options.method = 'GET'
  }
  requestOptions.method = options.method

  if (typeof options.params === 'undefined') {
    options.params = {}
  }
  requestOptions.params = options.params

  if (options.method !== 'GET' && options.data) {
    if (typeof options.sendMethod === 'undefined') {
      options.sendMethod = 'json'
    }


    requestOptions.data = options.data
  }

  if (options.urlPrefix) {
    options.url = `${options.urlPrefix}/${options.url}`
  }

  requestOptions.url = options.url

  requestOptions.headers = new Headers()
  requestOptions.mode = 'cors'
  requestOptions.withCredentials = false

  const axiosInstance = axios.create({
    baseURL: options.apiURL,
    timeout: 1000 * 60 * 1.5,
  })

  const requestInterceptor = (config) => {
    if (!window.navigator.onLine) {
      alert('No internet connection')
    }

    return config
  }

  axiosInstance.interceptors.request.use(requestInterceptor)

  return axiosInstance(requestOptions)
}

export default reqH
