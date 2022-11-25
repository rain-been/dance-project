//对于axios进行二次封装:目的要给axios添加请求|响应拦截器
import axios from 'axios';

//引入进度条
import Nprogress from 'nprogress';
//引入样式
import 'nprogress/nprogress.css'

//进度条的加载效果关闭
Nprogress.configure({ showSpinner: true });

//第一步:我先利用axios.create在创建一个新的axios
let request = axios.create({
      baseURL: '/api',//基础路径设置
      timeout: 5000,//超时的设置
});

//第二步:添加请求拦截器,当发送请求的时候会触发！！！
//interceptors:本身含义拦截器
request.interceptors.request.use((config) => {
      //coonfig:配置对象最重要的一件事情，请求头 [给服务器携带公共参数]
      console.log('请求拦截器');
      //进度条开始动
      Nprogress.start();
      //当前回调函数箭头函数:当检测到有请求发送的时候会触发！！！
      //config:是一个配置对象
      return config;//导致请求都发布出去
});

//第三步:添加响应拦截器
//use:第一个回调，响应成功的回调
request.interceptors.response.use((res) => {

      if (res.status == 200) {
            //进度条结束
            Nprogress.done();
            //res:其实就是服务器返回数据
            return res.data;//简化服务器返回数据[组件在使用的时候,不重要的数据就忽略掉]
      } else {
            alert("亲,你的状态码并非200可能后台小哥哥划水那");
      }
}, (error) => {
      if (error.code == 'ERR_BAD_REQUEST') {
            alert(error.message);
      }
      //返回一个pendding类型Promise对象->终止Promise链
      return new Promise(() => { });
})



//第四步:对外暴露咱们自己封装axios，可以在组件内部使用
export default request;