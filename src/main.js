import './assets/main.css'
import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue'

import Home from '@/pages/Home.vue'
import MangaPage from '@/pages/MangaPage.vue'

const routes = [
    {path: '/', component: Home},
    {name:"mangaPage", path: '/manga/:id', component: MangaPage},

    // TODO NotFound
    {path: '/:pathMatch(.*)*', redirect: '/'},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')