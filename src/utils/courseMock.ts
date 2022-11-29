import axios, { type AxiosResponse, type AxiosRequestConfig, type AxiosRequestHeaders } from "axios";

const request = axios.create({
    baseURL: "/mock", // 默认url
    timeout: 20000, // 请求过期时间
});

/* 定义response对象的data接口 */
interface ResponseData<T> {
    code: number;
    data: T;
    message: string;
}

request.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
});

// 添加响应拦截器
request.interceptors.response.use(
    (res) => {
        return res.data.data;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default request;
