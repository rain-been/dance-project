<template>
  <div class="login-container">
    <!-- 登录 -->
    <div class="login-wrap">
      <div class="login">
        <div class="loginform">
          <ul class="tab clearFix">
            <li>
              <a href="javascript:;" style="border-right: 0">扫描登录</a>
            </li>
            <li>
              <a href="javascript:;" class="current">账户登录</a>
            </li>
          </ul>

          <div class="content">
            <form action="javascript:;">
              <div class="input-text clearFix">
                <span style="padding-left: 6px; padding-top: 5px"
                  ><el-icon :size="20"><PhoneFilled /></el-icon
                ></span>
                <input
                  type="text"
                  placeholder="请输入手机号"
                  v-model="formData.phone"
                />
              </div>
              <div class="input-text clearFix">
                <span style="padding-left: 6px; padding-top: 5px"
                  ><el-icon :size="20"><Key /></el-icon
                ></span>

                <input
                  type="password"
                  placeholder="请输入密码"
                  v-model="formData.password"
                />
              </div>
              <div class="setting clearFix">
                <label class="checkbox inline">
                  <input name="m1" type="checkbox" value="2" />
                  自动登录
                </label>
                <span class="forget">忘记密码？</span>
              </div>
              <button class="btn" @click="loginHandelr">
                登&nbsp;&nbsp;录
              </button>
            </form>

            <div class="call clearFix">
              <ul>
                <li><img src="./images/qq.png" alt="" /></li>
                <li><img src="./images/sina.png" alt="" /></li>
                <li><img src="./images/ali.png" alt="" /></li>
                <li><img src="./images/weixin.png" alt="" /></li>
              </ul>
              <router-link class="register" to="/register"
                >立即注册</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default  {
  name:'Login'
}
</script>

<script setup lang="ts">
import "./css/reset.css";
import "./css/iconfont.css";
import { onMounted, ref, watch } from "vue";
// import useUserInfoStore from "@/stores/userInfo";
import router from "@/router";
// const getUserInfo = useUserInfoStore();
const formData = ref({
  phone: "13700000000",
  password: "111111",
});

// // 登录的回调,携带参数
// const loginHandelr = async () => {
//   const { phone, password } = formData.value;
//   try {
//     await getUserInfo.login(phone, password);
//     // console.log("store里的token", getUserInfo.token);

//     router.push("/");
//   } catch (error) {
//     // console.log("登录回调错误");
//     return Promise.reject(error);
//   }
// };
</script>

<style scoped>
.login-container .login-wrap {
  height: 487px;
  background-color: #e93854;
}
.login-container .login-wrap .login {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: url(images/loginbg.jpg) no-repeat;
}
.login-container .login-wrap .loginform {
  width: 420px;
  height: 406px;
  box-sizing: border-box;
  background: #fff;
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  position: relative;
  padding: 20px;
}
.login-container .login-wrap .loginform .tab li {
  width: 50%;
  float: left;
  text-align: center;
}
.login-container .login-wrap .loginform .tab li a {
  width: 100%;
  display: block;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  font-weight: 700;
  color: #333;
  border: 1px solid #ddd;
  box-sizing: border-box;
  text-decoration: none;
}
.login-container .login-wrap .loginform .tab li .current {
  border-bottom: none;
  border-top-color: #28a3ef;
  color: #e1251b;
}
.login-container .login-wrap .loginform .content {
  width: 380px;
  height: 316px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-top: none;
  padding: 18px;
}
.login-container .login-wrap .loginform .content form {
  margin: 15px 0 18px 0;
  font-size: 12px;
  line-height: 18px;
}
.login-container .login-wrap .loginform .content form .input-text {
  margin-bottom: 16px;
}
.login-container .login-wrap .loginform .content form .input-text span {
  float: left;
  width: 37px;
  height: 32px;
  border: 1px solid #ccc;
  background: url(../../assets/images/icons.png) no-repeat -10px -201px;
  box-sizing: border-box;
  border-radius: 2px 0 0 2px;
}
.login-container .login-wrap .loginform .content form .input-text .pwd {
  background-position: -72px -201px;
}
.login-container .login-wrap .loginform .content form .input-text input {
  width: 302px;
  height: 32px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-left: none;
  float: left;
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 14px;
  line-height: 22px;
  padding-right: 8px;
  padding-left: 8px;
  border-radius: 0 2px 2px 0;
  outline: none;
}
.login-container .login-wrap .loginform .content form .setting label {
  float: left;
}
.login-container .login-wrap .loginform .content form .setting .forget {
  float: right;
}
.login-container .login-wrap .loginform .content form .btn {
  background-color: #e1251b;
  padding: 6px;
  border-radius: 0;
  font-size: 16px;
  font-family: 微软雅黑;
  word-spacing: 4px;
  border: 1px solid #e1251b;
  color: #fff;
  width: 100%;
  height: 36px;
  margin-top: 25px;
  outline: none;
}
.login-container .login-wrap .loginform .content .call {
  margin-top: 30px;
}
.login-container .login-wrap .loginform .content .call ul {
  float: left;
}
.login-container .login-wrap .loginform .content .call ul li {
  float: left;
  margin-right: 5px;
}
.login-container .login-wrap .loginform .content .call .register {
  float: right;
  font-size: 15px;
  line-height: 38px;
}
.login-container .login-wrap .loginform .content .call .register:hover {
  color: #4cb9fc;
  text-decoration: underline;
}
</style>
