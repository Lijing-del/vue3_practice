import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
console.log(import.meta.env,'当前环境');
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
