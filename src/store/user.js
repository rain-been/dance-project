import { defineStore } from 'pinia';
import { reqEditInfo } from "@/api/personal";

export const useUserStore = defineStore({
  id: 'user',
  state() {
    return {
      userInfo: {},
    };
  },
  actions: {
    // 获取用户个人信息
    async getUserInfo() {
      try {
        const result = await reqEditInfo();
        this.userInfo = result;
      } catch (error) {
        ElMessage.error('获取用户信息失败');
      }
    },
  },
});
