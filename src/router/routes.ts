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
        children: [
            {
                path: 'recommend',
                name: 'Recommend',
                component: () => import('@/views/Resources/Main/components/Recommend/index.vue'),
            },
            {
                path: 'production',
                name: 'Production',
                component: () => import('@/views/Resources/Main/components/Production/index.vue')
            },
            {
                path: 'tutorial',
                name: 'Tutorial',
                component: () => import('@/views/Resources/Main/components/Tutorial/index.vue')
            },
            {
                path: 'subject',
                name: 'Subject',
                component: () => import('@/views/Resources/Main/components/Subject/index.vue')
            },
            {
                path: 'dynamic',
                name: 'Dynamic',
                component: () => import('@/views/Resources/Main/components/Dynamic/index.vue')
            },
            {
                path: 'attention',
                name: 'Attention',
                component: () => import('@/views/Resources/Main/components/Attention/index.vue')
            },
        ]
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
    /* 匹配任意路由，必须放到最后 */
    {
        path: '/:pathMatch(.*)', 
        name: 'Any',
        redirect: '/404', 
    }
]