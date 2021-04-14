import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './main.scss'
import loading from '@/plugin/loading'

createApp(App).use(loading).use(store).use(router).mount('#app')
