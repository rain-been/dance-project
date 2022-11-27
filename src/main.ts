import { createApp } from 'vue'
import App from './App.vue'

import router from './router';
const app = createApp(App);
// //全局注册组件
// app.component('Header', Header);
// app.component('Footer', Footer);
app.use(router)
.mount('#app');
