/*
 * @Author: your name
 * @Date: 2021-08-02 10:02:45
 * @LastEditTime: 2021-08-31 11:29:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\router\index.js
 */
import {
    createRouter,
    createWebHashHistory
} from 'vue-router';
const Router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: "/",
            redirect: "/Login"
        },
        {
            path: "/Home",
            redirect: "/Home/Data/pageOne"
        },
        {
            path: "/home/data",
            name: "数据概览",
            redirect: "/home/data/pageOne"
        },
        {
            path: "/home/test",
            name: "评测中心",
            redirect: "/home/test/pageOne"
        },
        {
            path: "/home/team",
            name: "团体辅导",
            redirect: "/home/team/pageOne"
        },
        {
            path: "/home/watch",
            name: "危机干预",
            redirect: "/home/watch/pageOne"
        },
        {
            path: "/home/mentality",
            name: "心理档案",
            redirect: "/home/mentality/pageOne"
        },
        {
            path: "/home/onLine",
            name: "咨询中心",
            redirect: "/home/onLine/pageOne"
        },
        {
            path: "/home/article",
            name: "文章管理",
            redirect: "/home/article/pageOne"
        },
        {
            path: "/home/video",
            name: "视频管理",
            redirect: "/home/video/pageOne"
        },
        {
            path: "/home/set",
            name: "系统管理",
            redirect: "/home/set/pageOne"
        },
        {
            path: "/Login",
            name: "login",
            component: () => import("@/views/Login.vue")
        },
        {
            path: "/Home",
            name: "home",
            component: () => import('@/views/Home.vue'),
            children: [
                // 数据概览
                {
                    path: 'data',
                    name: "data",
                    component: () => import('@/views/Data.vue'),
                    children: [{
                            path: 'pageOne',
                            name: "数据概览",
                            component: () => import("@/views/DataPageOne.vue")
                        },
                        {
                            path: 'pageTwo',
                            name: "统计报表",
                            component: () => import("@/views/DataPageTwo.vue")
                        },
                        {
                            path: 'pageThree',
                            name: "综合分析",
                            component: () => import("@/views/DataPageThree.vue")
                        }
                    ]
                },
                // 团体辅导
                {
                    path: 'team',
                    name: "team",
                    component: () => import('@/views/Team.vue'),
                    children: [{
                            path: 'pageOne',
                            name: "开课签到",
                            component: () => import("@/views/TeamPageOne.vue")
                        },
                        {
                            path: 'pageTwo',
                            name: "预约管理",
                            component: () => import("@/views/TeamPageTwo.vue")
                        },
                        {
                            path: 'pageThree',
                            name: "课程管理",
                            component: () => import("@/views/TeamPageThree.vue")
                        }
                    ]
                },
                // 危机干预
                {
                    path: 'watch',
                    name: "watch",
                    component: () => import('@/views/Watch.vue'),
                    children: [{
                            path: 'pageOne',
                            name: "潜在预警",
                            component: () => import("@/views/WatchPageOne.vue")
                        },
                        {
                            path: 'pageTwo',
                            name: "潜在风险评",
                            component: () => import("@/views/WatchPageTwo.vue")
                        },
                        {
                            path: 'pageThree',
                            name: "自杀倾向评",
                            component: () => import("@/views/WatchPageThree.vue")
                        }
                    ]
                },
                // 心理档案
                {
                    path: 'mentality',
                    name: "mentality",
                    component: () => import('@/views/Mentality.vue'),
                    children: [{
                            path: 'pageOne',
                            name: "心理档案",
                            component: () => import("@/views/MentalityPageOne.vue")
                        },
                        {
                            path: 'pageTwo',
                            name: "心理录入",
                            component: () => import("@/views/MentalityPageTwo.vue")
                        }
                    ]
                },
                // 测评中心
                {
                    path: 'test',
                    name: "test",
                    component: () => import('@/views/Test.vue'),
                    children: [{
                            path: 'pageOne',
                            name: "评测结果",
                            component: () => import("@/views/TestPageOne.vue")
                        },
                        {
                            path: 'pageTwo',
                            name: "数据录入",
                            component: () => import("@/views/TestPageTwo.vue")
                        },
                        {
                            path: 'pageThree',
                            name: "量表分发",
                            component: () => import("@/views/TestPageThree.vue")
                        },
                        {
                            path: 'pageFour',
                            name: "系统量表",
                            component: () => import("@/views/TestPageFour.vue")
                        },
                        {
                            path: 'pageFive',
                            name: "自有量表",
                            component: () => import("@/views/TestPageFive.vue")
                        },
                    ]
                },
                // 咨询中心
                {
                    path: 'online',
                    name: "online",
                    component: () => import('@/views/OnLine.vue'),
                    meta: {
                        keepAlive: false
                    },
                    children: [{
                            path: 'pageOne',
                            name: "预约详情",
                            component: () => import("@/views/OnLinePageOne.vue")
                        },
                        {
                            path: 'pageTwo',
                            name: "咨询师管理",
                            component: () => import("@/views/OnLinePageTwo.vue")
                        },
                        {
                            path: 'pageThree',
                            name: "排班管理",
                            component: () => import("@/views/OnLinePageThree.vue")
                        },
                        {
                            path: 'pageFour',
                            name: "排班详情",
                            component: () => import("@/views/OnLinePageFour.vue")
                        },
                        {
                            path: 'pageFive',
                            name: "心理热线",
                            component: () => import("@/views/OnLinePageFive.vue")
                        },
                        {
                            path: 'pageSix',
                            name: "咨询室预约",
                            component: () => import("@/views/OnLinePageSix.vue")
                        },
                    ]
                },
                // 文章管理
                {
                    path: 'article',
                    name: "article",
                    component: () => import('@/views/Article.vue'),
                    children: [{
                        path: 'pageOne',
                        name: "文章列表",
                        component: () => import("@/views/ArticlePageOne.vue")
                    }]
                },
                // 视频管理
                {
                    path: 'video',
                    name: "video",
                    component: () => import('@/views/Video.vue'),
                    children: [{
                        path: 'pageOne',
                        name: "心里微视频",
                        component: () => import("@/views/VideoPageOne.vue")
                    }]
                },
                // 系统管理
                {
                    path: 'set',
                    name: "set",
                    component: () => import('@/views/Set.vue'),
                    children: [{
                            path: 'pageOne',
                            name: "账号管理",
                            component: () => import("@/views/SetPageOne.vue")
                        },
                        {
                            path: 'pageTwo',
                            name: "权限管理",
                            component: () => import("@/views/SetPageTwo.vue")
                        },
                        {
                            path: 'pageThree',
                            name: "组织机构",
                            component: () => import("@/views/SetPageThree.vue")
                        },
                        {
                            path: 'pageFour',
                            name: "人员类别",
                            component: () => import("@/views/SetPageFour.vue")
                        },
                        {
                            path: 'pageFive',
                            name: "年份设置",
                            component: () => import("@/views/SetPageFive.vue")
                        },
                        {
                            path: 'pageSix',
                            name: "心理咨询室",
                            component: () => import("@/views/SetPageSix.vue")
                        },
                    ]
                },
            ]

        },
    ]
})
export {
    Router
}