import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const request = axios.create({
    baseURL: '',
    timeout: 15000,
    adapter: require('axios/lib/adapters/http')
})

// 异常拦截处理器
const errorHandler = (error: any): void => {
    console.log(error)
    // error.response &&
    //     insertLog(`errorHandler: ${error.response.status}, ${error.response.data.message}`, 'error')
    // return Promise.reject(error)
}

// 请求拦截器
request.interceptors.request.use((config: AxiosRequestConfig) => {
    // if (!config.headers['Content-Type']) config.headers['Content-Type'] = 'application/json'
    // if (config.requestBase) {
    //         config.baseURL = config.requestBase || ''
    // }
    return config
}, errorHandler)

// 响应拦截器
request.interceptors.response.use((response: AxiosResponse) => {
    // if (response.data.streams && response.data.format) {
    //     return response.data
    // }

    // if (response.config.responseType === 'stream') {
    //     return response.data
    // }

    // if (response.status !== 200 || !response.data.success) {
    //     return Promise.reject(response.data)
    // }
    return response.data
}, errorHandler)

export default request
