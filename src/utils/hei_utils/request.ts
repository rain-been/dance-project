import axios, { type AxiosResponse } from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus';
import pinia from '@/store/hei_stores/index';

import { useUserInfoStore } from '@/store/hei_stores/userInfo';


// 配置新建一个 axios 实例
const service = axios.create({
	baseURL: '/api',
	timeout: 5000,
});

// 添加请求拦截器
service.interceptors.request.use(
	(config: any) => {
		//请求携带token[pinia小仓库里面]
		if (useUserInfoStore(pinia).token) {
			
			config.headers.token = useUserInfoStore(pinia).token;
		}
		return config;
	}
);

// 添加响应拦截器
service.interceptors.response.use(
	/* 约束一下response */
	async (response: AxiosResponse) => {
		// 对响应数据做点什么
		const res = response.data;
		
		if (res.code !== 200) { 

			// `token` 过期或者账号已在别处登录
			if (response.status === 401) {
				const storeUserInfo = useUserInfoStore(pinia)
				await storeUserInfo.reset()
				window.location.href = '/' // 去登录页
				ElMessageBox.alert('你已被登出，请重新登录', '提示', {})
					.then(() => { })
					.catch(() => { })
			}
			return Promise.reject(service.interceptors.response);
		} else {
			return res.data; /* 返回成功响应数据中的data属性数据 */
		}
	},
	(error) => {
		// 对响应错误做点什么
		if (error.message.indexOf('timeout') != -1) {
			ElMessage.error('网络超时');
		} else if (error.message == 'Network Error') {
			ElMessage.error('网络连接错误');
		} else {
			if (error.response.data) ElMessage.error(error.response.statusText);
			else ElMessage.error('接口路径找不到');
		}
		return Promise.reject(error);
	}
);

export default service;
