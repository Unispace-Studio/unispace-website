import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

createApp(App).mount('#app')

AOS.init({
  duration: 1000,
})
