import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/mock/mackServe';
import router from './router';
//引入大仓库
import pinia from "./stores";
const app = createApp(App);
// //全局注册组件
// app.component('Header', Header);
// app.component('Footer', Footer);
app.use(router).use(pinia).use(ElementPlus);
app.mount('#app');


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
