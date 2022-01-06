/*
 * @Author: Edison Chen
 * @Date: 2022-01-06 11:48:07
 */
import Router from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("@/views/AppMain.vue"),
        redirect: '/login',
        children: [
            {
                path: "login",
                name: "Login",
                component: () => import("@/views/Login.vue"),
            }
        ]

    },
]
const createRouter = () =>
    new Router({
        routes
    });
const router = createRouter();

export default router;
