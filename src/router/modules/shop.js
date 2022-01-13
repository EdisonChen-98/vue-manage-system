/*
 * @Author: Edison Chen
 * @Date: 2022-01-13 09:14:40
 */
export default [
    {
        path: "shopOverview",
        name: "shopOverview",
        component: () => import("@/views/shop/shopOverview.vue"),
    },
    {
        path: "myShop",
        name: "myShop",
        component: () => import("@/views/shop/myShop.vue"),
    },
]
