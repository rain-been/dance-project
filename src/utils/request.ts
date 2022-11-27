import axios,{type AxiosRequestConfig,type AxiosRequestHeaders,type AxiosResponse} from 'axios';

const request = axios.create({
    baseURL:'apis',
    timeout: 5000,
})
request.interceptors.request.use((config:AxiosRequestConfig) => {
    (config.headers as AxiosRequestHeaders).token = config.token   
    return config 
})
request.interceptors.request.use((response)=>{
    return response.data
})

export default request