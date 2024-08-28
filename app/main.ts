import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import App from '@/App.vue'
import 'virtual:uno.css'
import { router } from '@/routes/main'

const app = createApp(App)

app.use(VueQueryPlugin)
app.use(router)
app.mount('#app')
