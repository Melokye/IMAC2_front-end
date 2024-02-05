import './assets/main.css'
import axios, {isCancel, AxiosError} from 'axios';

import { createApp } from 'vue'
import App from './App.vue'

const myApp = createApp(App).mount('#app')

const title = 'Spy x Family';
// const axios = require('axios');

const baseUrl = 'https://api.mangadex.org';

const resp = await axios({
    method: 'GET',
    url: `${baseUrl}/manga`,
    params: {
        title: title
    }
});

console.log(resp.data.data.map(manga => manga.attributes.title));


getMangasData(){
    
}