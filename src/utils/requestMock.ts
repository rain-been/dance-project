import axios from 'axios';
// import { ElMessage, ElMessageBox } from 'element-plus';

/* 定义response对象的data接口 */
interface ResponseData<T> {
    code: number;
    data: T;
    message: string;
}

// 配置新建一个 axios 实例
const service = axios.create({
    baseURL: '/mock',
    timeout: 50000,
});

// 添加请求拦截器
service.interceptors.request.use(
    (config: any) => {
        return config;
    }
);

// 添加响应拦截器
service.interceptors.response.use(
    (res)=>{
     return res.data   
    }
);

export default service;
