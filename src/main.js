import { createApp } from "vue";
import App from "./App.vue";
//引入路由
import router from "./router";
//引入样式初始化文件
import "./styles/index.css";
import "@/assets/element/index.css";
import "element-plus/theme-chalk/index.css";
//引入store
import pinia from "@/store";

// import ElementPlus from "element-plus";
// import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import 'element-plus/theme-chalk/index.css' 
// import 'element-plus/es/components/message/style/css'
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

import CardItem from "@/components/CardItem/index.vue";
import Loading from "@/components/Loading/index.vue";

const app = createApp(App);

app.component("CardItem", CardItem);
app.component("Loading", Loading);
app
  .use(pinia)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .use(router)
  .mount("#app");
