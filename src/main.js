import {createApp} from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'

import './assets/base.sass'
import mainPage from "@/views/main-page.vue";
import projectsView from "@/views/projects-view.vue";
import projectIkuView from "@/views/projects/project-iku-view.vue";
import projectHdkbView from "./views/projects/project-hdkb-view.vue";
import projectFwbView from "@/views/projects/project-fwb-view.vue";
import projectSweetsView from "@/views/projects/project-sweets-view.vue";

const routes = [
    {path: '/', component: mainPage},
    {
        path: '/projects',
        component: projectsView,
        name: 'projects',
    },
    {
        path: '/projects/iku',
        component: projectIkuView,
        name: 'iku'
    },
    {
        path: '/projects/hdkb',
        component: projectHdkbView,
        name: 'hdkb'
    },
    {
        path: '/projects/fwb',
        component: projectFwbView,
        name: 'fwb'
    },
    {
        path: '/projects/sweets',
        component: projectSweetsView,
        name: 'sweets'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0)
    next()
})

createApp(App)
    .use(router)
    .mount('#app')
