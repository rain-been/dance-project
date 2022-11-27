import { createRouter, createWebHistory } from "vue-router";
import { course } from "./module/course.js";
import { exchange } from "./module/exchange.js";
import { personal } from "./module/personal.js";
import { resource } from "./module/resource.js";
import { trainingRoom } from "./module/trainingRoom.js";
import { courseDetails } from "./module/courseDetails.js";
import { ElLoading } from "element-plus";

//404页面
const NotFound = {
  path: "/404",
  component: () => import("@/views/404/index.vue"),
};
//任意路由
const anyRoute = {
  path: "/:pathMatch(.*)*",
  name: "NotFound",
  redirect: "/404",
};
const staticRoute = [
  {
    path: "/",
    redirect: "/resource",
  },
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: [course, exchange, personal, resource, trainingRoom, courseDetails, ...staticRoute,anyRoute],
//   scrollBehavior() {
//     return { top: 0, left: 0 };
//   },
});

// 保存loading加载的实例
let loadingInstance;

// 全局前置钩子
router.beforeEach((from,to,next)=>{
   loadingInstance = ElLoading.service({})
   next()
})

// 后置钩子关闭loading
router.afterEach((to,next)=>{
   loadingInstance.close();
   next()
})

// 导出路由
export default router;
