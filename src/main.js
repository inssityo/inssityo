import { createApp } from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import App from './App.vue'
import router from './router'
import axios from './plugins/axios'
import vueAxios from 'vue-axios'
import vuex from 'vuex'
import store from './store';

const app = createApp(App);
app.provide('$store', store);
app.provide('$router', router);
app.use(router, axios, vueAxios, store, vuex)
app.mount('#app');



