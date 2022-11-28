import axios, { type AxiosRequestConfig, type AxiosRequestHeaders, type AxiosResponse } from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus';
// import pinia from '@/stores/index';



/* 定义response对象的data接口 */
interface ResponseData<T> {
  code: number;
  data: T;
  message: string;
}


// 配置新建一个 axios 实例


const request = axios.create({
  baseURL: "/apis",
  timeout: 5000,
 
});



// 添加请求拦截器
// 请求拦截器
request.interceptors.request.use((config) => {

  return config;
});

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return new Promise(() => {});
  }
);

export default request;

