import { createApp } from 'vue'
import App from './App.vue'
import headBar from '@/components/Header/index.vue'
import router from './router';
const app = createApp(App);
// //全局注册组件
app.component('headBar', headBar);
// app.component('Footer', Footer);
app.use(router)
.mount('#app');
