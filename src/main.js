import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import Axios from 'axios'


createApp(App).use(store).use(router).mount('#app')
