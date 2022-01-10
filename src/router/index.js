/*
 * @Author: Edison Chen
 * @Date: 2022-01-06 11:48:07
 */
import Router from "vue-router";
import dashboard from './modules/dashboard'
import user from './modules/user'

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
            redirect: 'system/dashboard',
            children: [
                ...dashboard, ...user
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
