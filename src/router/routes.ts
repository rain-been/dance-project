import type { RouteRecordRaw } from 'vue-router';
/**
 * 路由meta对象参数说明
 * meta: {
 *      title:          菜单栏及 tagsView 栏、菜单搜索名称（国际化）
 *      hidden：        是否隐藏此路由
 *      icon：          菜单、tagsView 图标，阿里：加 `iconfont xxx`，fontawesome：加 `fa xxx`
 * }
 */
/**
 * 静态路由（默认路由）
 */
 export const staticRoutes: Array<RouteRecordRaw> = [
	//登录的路由
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true
    }
  },
  //404路由
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404.vue'),
    meta: {
      hidden: true
    }
  },
  //resources首页
  {
    path: '/resources',
    name: 'Resources',
    component: () => import('@/resources/index.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/',
    redirect:'/resources'
  },

  /* 匹配任意的路由 必须最后注册 */
  { 
    path: '/:pathMatch(.*)', 
    name: 'Any',
    redirect: '/404', 
    meta: {
      hidden: true 
    }
  }
];


/**
 * 定义动态路由
 */
export const allAsyncRoutes: Array<RouteRecordRaw> = [];
