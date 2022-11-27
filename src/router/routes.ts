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
        children: [
            {
                path: '/vip',
                name: 'vip',
                component: () => import('@/views/Course/vip/vip.vue'),
            },
            {
                path: '/videolesson',
                name: 'videolesson',
                component: () => import('@/views/Course/videolesson/videolesson.vue'),
            },
            {
                path: '/online',
                name: 'online',
                component: () => import('@/views/Course/online/online.vue'),
            },
            {
                path: '/offline',
                name: 'offline',
                component: () => import('@/views/Course/offline/offline.vue'),
            },
            {
                path: '/theme',
                name: 'theme',
                component: () => import('@/views/Course/theme/theme.vue'),
            },
            {
                path:'/course',
                redirect:"/vip"
            }
        ]
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
    /* 匹配任意路由，必须放到最后 */
    {
        path: '/:pathMatch(.*)', 
        name: 'Any',
        redirect: '/404', 
    }
]