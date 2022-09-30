import { createRouter, createWebHistory } from "vue-router"
const router = createRouter({
    history: createWebHistory("/appWeb/"),
    routes: [
        {
            path: "/",
            redirect: "/main"
        }, {
            path: "/login",
            name: "loginPage",
            component: () => import("@/views/basic/login/index.vue")
        }, {
            path: "/register",
            name: "register",
            component: () => import("@/views/basic/register/index.vue")
        }, {
            path: "/main",
            name: "main",
            component: () => import("@/views/main/index.vue"),
            redirect: "/main/home",
            children: [
                {
                    path: "home",
                    name: "home",
                    component: () => import("@/views/main/home/index.vue")
                }, {
                    path: "mine",
                    name: "mime",
                    component: () => import("@/views/main/mine/index.vue")
                }
            ]
        }, {
            path: "/approve",
            name: "approve",
            component: () => import("@/views/funcs/approve/index.vue")
        }, {
            path: "/lab",
            name: "lab",
            component: () => import("@/views/funcs/lab/index.vue")
        }, {
            path: "/lib",
            name: "lib",
            component: () => import("@/views/funcs/lib/index.vue")
        }, {
            path: "/news",
            name: "news",
            component: () => import("@/views/funcs/news/index.vue")
        }, {
            path: "/work",
            name: "work",
            component: () => import("@/views/funcs/work/index.vue"),
        }, {
            path: "/addNewWork",
            name: "addNewWork",
            component: () => import("@/views/funcs/work/pages/addNewWork/index.vue")
        }, {
            path: "/workDetail",
            name: "workDetail",
            component: () => import("@/views/funcs/work/pages/workDetail/index.vue")
        }

    ]
})
export default router