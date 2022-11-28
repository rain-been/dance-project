import { createApp } from 'vue'
import App from './App.vue'


//element-plus插件:完整引入
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "element-plus/dist/index.css";
import Header from '@/components/Header/index.vue'
import Footer from '@/components/footer/index.vue'
import TopNav from '@/components/TopNav/index.vue'
import pinia from "@/store/hei_stores";

import router from './router';
const app = createApp(App);
// //全局注册组件
app.component('Header', Header);
app.component('Footer', Footer);
app.component('TopNav', TopNav);
app.use(pinia)
.use(router)
.use(ElementPlus, {
  locale: zhCn,
})
.mount('#app');
