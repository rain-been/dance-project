//defineStore定义小仓库的方法,书写形式有两种:选择器{},组合式()=>{}
import { defineStore } from "pinia";
//封装三个函数:获取本地存储token|移出本地存储token|本地持久化存储token    utils
import { getToken, removeToken, setToken } from "@/utils/hei_utils/token-utils";
//项目配置好路由信息[数组套对象]   router

//引入登录|获取用户信息|退出登录接口   api
import { reqLogin, reqUserInfo, reqCode, reqLogout } from "@/api/hei_api/index";

export const useUserInfoStore = defineStore("userInfo", {
  state: () => ({
    token: getToken() as string, //token
    code:'',//验证码
  }),

  actions: {
    //点击登录按钮调用次仓库login方法
    async login(phone: string, password: string) {
      //用户登录成功,返回用户唯一标识token
      try {
        //登录成功
        let result: any = await reqLogin({ phone, password });
        //小仓库存储一份token
        this.token = result.token;
        //本地存储持久化存储
        setToken(result.token);
        //登录成功返回成功Promise
        return "ok";
      } catch (error) {
        alert('登录失败，请重试')
      }
    },
    // 获取验证码
    async userCode(phone:any){
      try {
        let result: any = await reqCode(phone)
        this.code = result;
      } catch (error: any) {
        alert('获取验证码失败')
      }
    },

    // 注册账号

    async userInfo(data:any){
      try {
        await reqUserInfo(data)
      alert('注册成功，请登录')
      } catch (error: any) {
        alert('注册失败，请重试')
      }
    },

    //退出登录:点击退出登录按钮触发这个小仓库方法
    async reset() {
      try {
        // 删除local中保存的token
        removeToken();
        //清空pinia仓库数据
        this.token = "";
        //通知服务器:当前token退出登录，不需要了！！
        await reqLogout();
        return "ok";
      } catch (error: any) {
        alert('退出登录失败')
      }
    },
  },
});
