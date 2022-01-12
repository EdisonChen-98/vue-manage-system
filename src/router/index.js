/*
 * @Author: Edison Chen
 * @Date: 2022-01-06 11:48:07
 */
import Router from "vue-router";
import Home from './modules/home';
import User from './modules/user';
import Shop from './modules/shop';
import Auth from './modules/auth';

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
            redirect: 'system/home',
            children: [
                ...Home, ...User, ...Shop, ...Auth,
            ]
        }]
    },

]
console.log('+++route', routes);

//防止到相同路由时冗余路由报错
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }
const createRouter = () =>
    new Router({
        routes
    });
const router = createRouter();

export default router;
