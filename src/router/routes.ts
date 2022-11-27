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
        meta: { isShow: false },
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/error/404.vue'),
        meta: { isShow: false },
    },
    {
        path: '/resources',
        name: 'Resources',
        component: () => import('@/views/Resources/index.vue'),
        meta: { isShow: true },
    },
    {
        path: '/course',
        name: 'Course',
        component: () => import('@/views/Course/index.vue'),
        meta: { isShow: true },
        children: [
            {
                path: '/vip',
                name: 'vip',
                component: () => import('@/views/Course/vip/vip.vue'),
                meta: { isShow: true },
            },
            {
                path: '/videolesson',
                name: 'videolesson',
                component: () => import('@/views/Course/videolesson/videolesson.vue'),
                meta: { isShow: true },
            },
            {
                path: '/online',
                name: 'online',
                component: () => import('@/views/Course/online/online.vue'),
                meta: { isShow: true },
            },
            {
                path: '/offline',
                name: 'offline',
                component: () => import('@/views/Course/offline/offline.vue'),
                meta: { isShow: true },
            },
            {
                path: '/theme',
                name: 'theme',
                component: () => import('@/views/Course/theme/theme.vue'),
                meta: { isShow: true },
            },
            {
                path:'/course',
                redirect:"/vip",
                meta: { isShow: true },
            }
        ]
    },
    {
        path: '/training',
        name: 'Training',
        component: () => import('@/views/Training/index.vue'),
        meta: { isShow: true },
    },
    {
        path: '/communicate',
        name: 'Communicate',
        component: () => import('@/views/Communicate/index.vue'),
        meta: { isShow: true },
    },
    {
        path: '/person',
        name: 'Person',
        component: () => import('@/views/Person/index.vue'),
        meta: { isShow: true },
    },
    /* 匹配任意路由，必须放到最后 */
    {
        path: '/:pathMatch(.*)', 
        name: 'Any',
        redirect: '/404', 
        meta: { isShow: false },
    }
]