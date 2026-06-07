import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "@/App.css"

import App from './App.vue'
import router from './router/routerPosts'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
