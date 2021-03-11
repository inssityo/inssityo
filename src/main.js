import { createApp } from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import App from './App.vue'
import router from './router'
import {requestInterceptor, responseInterceptor} from './plugins/requestInterceptors'
import axios from 'axios'
import vueAxios from 'vue-axios'
import vuex from 'vuex'
import store from './store';

axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;

const app = createApp(App);
app.provide('$store', store);
app.provide('$router', router);
app.use(router, axios, requestInterceptor, responseInterceptor, vueAxios, store, vuex)
app.mount('#app');



