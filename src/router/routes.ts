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
        redirect:'/resources/recommend',
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
        children: [
            {
                path: '/training',
                redirect: '/trainRoom'
              },
            {
                path: '/trainRoom',
                name:'TrainRoom',
                component: () => import('@/views/Training/TrainRoom/index.vue'),
            },

            {
                path: '/mediaCache',
                name:'MediaCache',
                component: () => import('@/views/Training/MediaCache/index.vue')
            },
            {
                path: '/collections',
                name: 'Collections',
                component: () => import('@/views/Training/Collections/index.vue')
            },

            {
                path: '/view_records',
                name: 'View_records',
                component: () => import('@/views/Training/ViewRecords/index.vue')
            }
        ]
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
        children: [
            {
                path: '/dynamics',
                name: 'dynamics',
                component: () => import('@/views/Person/dynamics/index.vue'),
                meta: { isShow: true },
            },
            {
                path: '/myMember',
                name: 'myMember',
                component: () => import('@/views/Person/myMember/index.vue'),
                meta: { isShow: true },
            },
            {
                path: '/wallet',
                name: 'wallet',
                component: () => import('@/views/Person/wallet/index.vue'),
                meta: { isShow: true },
            },
            {
                path: '/coupons',
                name: 'coupons',
                component: () => import('@/views/Person/coupons/index.vue'),
                meta: { isShow: true },
            },
            {
                path: '/buyOrder',
                name: 'buyOrder',
                component: () => import('@/views/Person/buyOrder/index.vue'),
                meta: { isShow: true },
            },
            {
                path: '/customers',
                name: 'customers',
                component: () => import('@/views/Person/sell/customers/index.vue'),
                meta: { isShow: true },
            },
            {
                path: '/deposit',
                name: 'deposit',
                component: () => import('@/views/Person/sell/deposit/index.vue'),
                meta: { isShow: true },
            },
            {
                path: '/goods',
                name: 'goods',
                component: () => import('@/views/Person/sell/goods/index.vue'),
                meta: { isShow: true },
            },
            {
                path: '/orders',
                name: 'orders',
                component: () => import('@/views/Person/sell/orders/index.vue'),
                meta: { isShow: true },
            },
            {
                path: '/payments',
                name: 'payments',
                component: () => import('@/views/Person/sell/payments/index.vue'),
                meta: { isShow: true },
            },
            {
                path: '/preferential',
                name: 'preferential',
                component: () => import('@/views/Person/sell/preferential/index.vue'),
                meta: { isShow: true },
            },
            {
                path: '/evaluate',
                name: 'evaluate',
                component: () => import('@/views/Person/sell/evaluate/index.vue'),
                meta: { isShow: true },
            },
            {
                path: '/editInfo',
                name: 'editInfo',
                component: () => import('@/views/Person/editInfo/index.vue'),
                meta: { isShow: true },
            }
        ]
    },
    /* 匹配任意路由，必须放到最后 */
    {
        path: '/:pathMatch(.*)', 
        name: 'Any',
        redirect: '/404', 
        meta: { isShow: false },
    }
]