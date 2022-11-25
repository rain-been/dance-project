import type { RouteRecordRaw } from 'vue-router';
export const staticRoutes: Array<RouteRecordRaw> =[
    {
        path: '/',
        redirect: '/resources'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login/index.vue'),
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/error/404.vue'),
    },
    {
        path: '/resources',
        name: 'Resources',
        component: () => import('@/views/Resources/index.vue'),
    },
    {
        path: '/course',
        name: 'Course',
        component: () => import('@/views/Course/index.vue'),
    },
    {
        path: '/training',
        name: 'Training',
        component: () => import('@/views/Training/index.vue'),
    },
    {
        path: '/communicate',
        name: 'Communicate',
        component: () => import('@/views/Communicate/index.vue'),
    },
    {
        path: '/person',
        name: 'Person',
        component: () => import('@/views/Person/index.vue'),
    },
    {
        path:'/register',
        name:'Register',
        component: () => import('@/views/Register/index.vue'),
    },
    /* 匹配任意路由，必须放到最后 */
    {
        path: '/:pathMatch(.*)', 
        name: 'Any',
        redirect: '/404', 
    }
]