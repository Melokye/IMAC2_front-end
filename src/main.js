import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// TODO ajouter plugin vue-router pour app multipages
// tuto : https://mitium.antoine-libert.com/courses/vuejs/chapter1/mainJSFile.html

const myApp = createApp(App)
myApp.mount('#app')