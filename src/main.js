import './assets/main.css'
import axios, {isCancel, AxiosError} from 'axios'; // TODO test

import { createApp } from 'vue'
import App from './App.vue'

const myApp = createApp(App)
myApp.mount('#app')

// --- Test 
const title = 'Spy x Family'; // TODO test
const baseUrl = 'https://api.mangadex.org';

const getMangasData = async function(){
    const response = await axios({
        method: 'GET',
        url: `${baseUrl}/manga`,
        params: {
            title: title // TODO à moduler
        }
    });
    
    console.log("called"); // TODO 
    // TODO test response.status ?
    return response.data.data.map(manga => manga.attributes); // TODO test
}

// console.log(getMangasData()); // TODO test
export {getMangasData}