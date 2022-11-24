import { createApp } from 'vue'
import App from './App.vue'
// import './samples/node-api'

void createApp(App)
    .mount('#app')
    .$nextTick(() => {
        postMessage({ payload: 'removeLoading' }, '*')
    })
