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
        },
        {
            path: "/register",
            name: "register",
            component: () => import("@/views/basic/register/index.vue")
        },
        {
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
        }
    ]
})
export default router