
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ProgressPlugin from './plugins/progress.js'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ProgressPlugin, { router })
app.mount('#app')
