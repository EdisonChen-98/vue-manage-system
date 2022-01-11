export default [
    {
        path: "shopOverview",
        name: "shopOverview",
        component: () => import("@/views/components/shopOverview.vue"),
    },
    {
        path: "myshop",
        name: "myShop",
        component: () => import("@/views/components/myShop.vue"),
    },
]