import {createApp} from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'

import './assets/base.sass'
import mainPage from "@/views/main-page.vue";
import projectsView from "@/views/projects-view.vue";
import projectIkuView from "@/views/projects/project-iku-view.vue";

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
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')
