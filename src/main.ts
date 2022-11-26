import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import router from './router';
const app = createApp(App);
// //全局注册组件
// app.component('Header', Header);
// app.component('Footer', Footer);
app.use(router);
app.use(ElementPlus);
app.mount('#app');


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
