import { createApp } from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import App from './App.vue'
import Router from './router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from "vuex"

Axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;

createApp(App).use(Router, VueAxios, Axios, Vuex).mount('#app')
