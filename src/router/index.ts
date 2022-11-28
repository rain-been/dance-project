import { createRouter, createWebHistory} from 'vue-router'
import { staticRoutes } from "./routes";
export default createRouter({
    history: createWebHistory(),
    routes: staticRoutes,
    scrollBehavior() {
        return { top: 0, left: 0}
      },
})