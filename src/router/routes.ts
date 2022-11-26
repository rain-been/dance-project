import type { RouteRecordRaw } from 'vue-router';
export const staticRoutes: Array<RouteRecordRaw> =[
    {
        path: '/',
        redirect: '/resources'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/index.vue'),
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
        redirect: '/communicate/systemNote',
        children:[
            {
                path:'/communicate/systemNote',
                name:'systemNote',
                component:() => import('@/views/Communicate/components/systemNote.vue'),
                meta:{
                    name:'systemNote'
                }
            },
            {
                path:'/communicate/orderNote',
                name:'orderNote',
                component:() => import('@/views/Communicate/components/orderNote.vue'),
                meta:{
                    name:'orderNote'
                }
            },
            {
                path:'/communicate/interactNote',
                name:'interactNote',
                component:() => import('@/views/Communicate/components/interactNote.vue'),
                meta:{
                    name:'interactNote'
                }
            },

        ]
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