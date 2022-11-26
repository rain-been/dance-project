export const personal = {
  path: "/personal",
  // name: "personal",
  redirect: "/personal/dynamics",
  component: () => import("@/views/personal/index.vue"),
  meta: {
    title: "个人中心",
  },
  children: [
    {
      path: "dynamics",
      name: "dynamics",
      component: () => import("@/views/personal/dynamics/index.vue"),
      meta: {
        title: "资源动态",
      },
    },
    {
      path: "myMember",
      name: "myMember",
      component: () => import("@/views/personal/myMember/index.vue"),
      meta: {
        title: "我的会员",
      },
    },
    {
      path: "wallet",
      name: "wallet",
      component: () => import("@/views/personal/wallet/index.vue"),
      meta: {
        title: "我的钱包",
      },
    },
    {
      path: "coupons",
      name: "coupons",
      component: () => import("@/views/personal/coupons/index.vue"),
      meta: {
        title: "我的优惠劵",
      },
    },
    {
      path: "buyOrder",
      name: "buyOrder",
      component: () => import("@/views/personal/buyOrder/index.vue"),
      meta: {
        title: "我买的订单",
      },
    },
    {
      path: "sell",
      name: "sell",
      component: () => import("@/views/personal/sell/index.vue"),
      redirect: "/personal/sell/orders",
      meta: {
        title: "我卖的",
      },
      children: [
        {
          path: "orders",
          name: "orders",
          component: () => import("@/views/personal/sell/orders/index.vue"),
          meta: {
            title: "订单管理",
          },
        },
        {
          path: "goods",
          name: "goods",
          component: () => import("@/views/personal/sell/goods/index.vue"),
          meta: {
            title: "商品管理",
          },
        },
        {
          path: "customers",
          name: "customers",
          component: () => import("@/views/personal/sell/customers/index.vue"),
          meta: {
            title: "客户管理",
          },
        },
        {
          path: "payments",
          name: "payments",
          component: () => import("@/views/personal/sell/payments/index.vue"),
          meta: {
            title: "待收款",
          },
        },
        {
          path: "preferential",
          name: "preferential",
          component: () => import("@/views/personal/sell/preferential/index.vue"),
          meta: {
            title: "优惠管理",
          },
        },
        {
          path: "evaluate",
          name: "evaluate",
          component: () => import("@/views/personal/sell/evaluate/index.vue"),
          meta: {
            title: "评价管理",
          },
        },
        {
          path: "deposit",
          name: "deposit",
          component: () => import("@/views/personal/sell/deposit/index.vue"),
          meta: {
            title: "保证金",
          },
        },
      ],
    },
    {
      path: "editInfo",
      name: "editInfo",
      component: () => import("@/views/personal/editInfo/index.vue"),
      meta: {
        title: "我的资料",
      },
    },
  ]
};
