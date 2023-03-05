import {createApp} from 'vue'
import { createI18n } from 'vue-i18n'
import {createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'

import './assets/base.sass'
import cvView from "@/views/cv-view.vue";
import mainPageView from "@/views/main-page-view.vue";
import projectsView from "@/views/projects-view.vue";
import projectIkuView from "@/views/projects/project-iku-view.vue";
import projectHdkbView from "./views/projects/project-hdkb-view.vue";
import projectFwbView from "@/views/projects/project-fwb-view.vue";
import projectSweetsView from "@/views/projects/project-sweets-view.vue";
import english from "@/translations/english.js";
import german from "@/translations/german.js";

const routes = [
    {
        path: '/',
        component: mainPageView,
        name: 'startPage'
    },
    {
        path: '/cv',
        component: cvView,
        name: 'cv',
    },
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

const i18n = createI18n({
    locale: 'de',
    messages: {
        en: english,
        de: german
    }
})

createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app')
