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
            component: () => import("@/views/funcs/approve/index.vue"),
            children: [
                {
                    path: "launchByMe",
                    name: "launchByMe",
                    component: () => import("@/views/funcs/approve/pages/launchByMe/index.vue")
                },
                {
                    path: "approveByMe",
                    name: "approveByMe",
                    component: () => import("@/views/funcs/approve/pages/approveByMe/index.vue")
                }
            ]
        }, {
            path: "/borrowApply",
            name: "borrowApply",
            component: () => import("@/views/funcs/approve/pages/borrowApply/index.vue")
        }, {
            path: "/entryApply",
            name: "entryApply",
            component: () => import("@/views/funcs/approve/pages/entryApply/index.vue")
        }, {
            path: "/approveDetail",
            name: "approveDetail",
            component: () => import("@/views/funcs/approve/pages/approveDetail/index.vue")
        }, {
            path: "/lab",
            name: "lab",
            component: () => import("@/views/funcs/lab/index.vue")
        }, {
            path: "/lib",
            name: "lib",
            component: () => import("@/views/funcs/lib/index.vue")
        }, {
            path: "/libList",
            name: "libList",
            component: () => import("@/views/funcs/lib/pages/libList/index.vue")
        }, {
            path: "/libSearch",
            name: "libSearch",
            component: () => import("@/views/funcs/lib/pages/libSearch/index.vue")
        }, {
            path: "/viewPdf",
            name: "viewPdf",
            component: () => import("@/views/funcs/lib/pages/viewPdf/index.vue")
        }, {
            path: "/viewImg",
            name: "viewImg",
            component: () => import("@/views/funcs/lib/pages/viewImg/index.vue")
        }, {
            path: "/viewVideo",
            name: "viewVideo",
            component: () => import("@/views/funcs/lib/pages/viewVideo/index.vue")
        }, {
            path: "/viewVoice",
            name: "viewVoice",
            component: () => import("@/views/funcs/lib/pages/viewVoice/index.vue")
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