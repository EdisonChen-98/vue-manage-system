/*
 * @Author: Edison Chen
 * @Date: 2022-01-06 11:48:07
 */
import Router from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("@/App.vue"),
        redirect: '/login',
        children: [{
            path: "login",
            name: "Login",
            component: () => import("@/views/Login.vue"),
        },
        {
            path: "register",
            name: "Register",
            component: () => import("@/views/Register.vue"),
        },
        {
            path: "/system",
            name: "System",
            component: () => import("@/views/Layout.vue"),
            redirect: 'system/personalInfo',
            children: [
                {
                    path: "personalInfo",
                    name: "personalInfo",
                    component: () => import("@/views/components/personalInfo.vue"),
                },
                {
                    path: "covidOverview",
                    name: "covidOverview",
                    component: () => import("@/views/components/covidOverview.vue"),
                }
            ]
        }]
    },

]
const createRouter = () =>
    new Router({
        routes
    });
const router = createRouter();

export default router;
