import './assets/main.css'
import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue'

import Home from './pages/home.vue'

const routes = [
    {path: '/', component: Home},
    // TODO créer MangaPage
    // {path: '/manga/:id', component: MangasGallery},
    // TODO creer NotFound
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

// TODO ajouter plugin vue-router pour app multipages
// tuto : https://mitium.antoine-libert.com/courses/vuejs/chapter1/mainJSFile.html

createApp(App)
    .use(router)
    .mount('#app')