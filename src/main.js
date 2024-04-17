import './assets/main.css'
import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue'

import MangasGallery from './components/MangasGallery.vue'

const routes = [
    {path: '/', component: MangasGallery},
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