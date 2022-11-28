<template>
  <div class="layout">
    <el-tabs type="border-card">
      <el-tab-pane label="登录">
        <el-form
          label-position="right"
          label-width="60px"
          style="max-width: 460px"
          class="loginForm"
        >
          <el-form-item label="账号：">
            <el-input v-model="form.phone" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="form.password" />
          </el-form-item>

          <el-row>
            <el-checkbox
              class="checkBox"
              v-model="form.isAgree"
              label="同意用户使用准则"
              name="type"
            />
          </el-row>
          <el-button
            v-if="form.isAgree"
            type="primary"
            class="loginBtn"
            @click="login"
          >
            登录
          </el-button>
        </el-form>
      </el-tab-pane>

      <el-tab-pane label="注册">
        <el-form
          label-position="right"
          label-width="100px"
          style="max-width: 460px"
          class="loginForm"
        >
          <el-form-item label="账号：">
            <el-input v-model="registerForm.phone" />
          </el-form-item>
          <el-form-item label="密码：">
            <el-input type="password" v-model="registerForm.password" />
          </el-form-item>
          <el-form-item label="确认密码：">
            <el-input
              type="password"
              v-model="registerForm.confirmPassword"
              @blur="confirmFunc"
            />
          </el-form-item>
          <el-form-item label="验证码：">
            <el-row>
              <el-input
                type="text"
                v-model="registerForm.identifyCode"
                class="inpWidth"
              />
              <el-button type="primary" @click="getIdentifyCode" plain>
                获取验证码
              </el-button>
            </el-row>
          </el-form-item>

          <el-row>
            <el-checkbox
              class="checkBox"
              v-model="registerForm.rAgree"
              label="同意用户使用准则"
              name="type"
            />
          </el-row>
          <el-button
            v-if="registerForm.rAgree"
            type="primary"
            class="loginBtn"
            @click="register"
          >
            注册
          </el-button>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang='ts' setup>
import { useUserInfoStore } from "@/store/hei_stores/userInfo";
import { reactive } from "@vue/reactivity";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ElMessage } from "element-plus";

const userInfoStore = useUserInfoStore();
const route = useRoute();
const router = useRouter();
const formref = ref();
const form = reactive({
  phone: "",
  password: "",
  isAgree: 0,
});
const registerForm = reactive({
  phone: "",
  password: "",
  confirmPassword: "",
  identifyCode: "",
  rAgree: 0,
});

// 方法
// 登录
const login = async () => {
  await formref.value?.validate();
  const phone = form.phone;
  const password = form.password;

  try {
    await userInfoStore.login(phone, password);
    if (userInfoStore.token) {
      router.push("/resources");
    } else {
      router.push("/login");
    }
  } catch (error) {}
};
// 注册
const register = async () => {
  const phone = registerForm.phone;
  const password = registerForm.password;
  const code = registerForm.identifyCode;

  try {
    await userInfoStore.userInfo({ phone, password, code });
  } catch (error) {}
};
// 获取验证码
const getIdentifyCode = async () => {
  const phone = registerForm.phone;
  await userInfoStore.userCode(phone);
  // 修改页面的code
  registerForm.identifyCode = userInfoStore.$state.code;
};
// 确认密码
const confirmFunc = () => {
  if (registerForm.confirmPassword !== registerForm.password)
    ElMessage.error("确认密码与密码不一致");
};
</script>

<style scoped>
.layout {
  position: absolute;
  left: calc(50% - 200px);
  top: 20%;
  width: 400px;
}
.loginBtn {
  width: 100px;
}
.loginForm {
  text-align: center;
}
.checkBox {
  margin-left: 7px;
}
.inpWidth {
  width: 165px;
}
</style>