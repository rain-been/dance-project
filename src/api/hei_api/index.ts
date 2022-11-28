//引入二次封装request
import request from "@/utils/hei_utils/request";
//登录请求
//注册接口
// 获取验证码
//退出登录
//ts枚举:定义接口地址
enum API {
  login = "/user/passport/login",
  info = "/user/passport/register",
  code = 'user/passport/sendCode',
  logout = "user/passport/logout",
}

//登录请求  post 第一个参数：请求地址
export const reqLogin = (data: any) => request.post<any>(API.login, data);
//注册接口
export const reqUserInfo = (data:any) => request.post<any>(API.info,data);
// 获取验证码
export const reqCode = (phone:any) => request.get(`${API.code}/${phone}`);
//退出登录接口
export const reqLogout = () => request.get(API.logout);
