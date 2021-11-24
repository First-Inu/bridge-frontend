import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './App.css'
import router from './router'
import store from "@/store";
import VueTailwindModal from "@ocrv/vue-tailwind-modal"
import  '@ocrv/vue-tailwind-modal/dist/style.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(VueTailwindModal)

app.mount('#app')
