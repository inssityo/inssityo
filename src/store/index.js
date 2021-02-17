import { createStore } from 'vuex'
import AuthService from '../api-services/auth.service';
import UserService from '../api-services/user.service';
import axios from 'axios'

const AUTH_REQUEST = 'auth_request';
const AUTH_SUCCESS = 'auth_success';
const AUTH_ERROR = 'auth_error';
const LOGOUT = 'logout';

export default createStore({
  state() {
    return {
      status: '',
      token: localStorage.getItem('token') || '',
    }
  },
  mutations: {
    [AUTH_REQUEST](state){
      state.status = 'loading'
    },
    [AUTH_SUCCESS](state, token){
      state.status = 'success'
      state.token = token
    },
    [AUTH_ERROR](state){
      state.status = 'error'
    },
    [LOGOUT](state){
      state.status = ''
      state.token = ''
    },
  },
  getters : {
    isLoggedIn: state => {
      return state.token;
    },
    authStatus: state => state.status,
  },
  actions: {
    login({commit}, credentials){
      return new Promise((resolve, reject) => {
        commit(AUTH_REQUEST)
        AuthService.entry(credentials)
        .then(res => {
          console.log("resp " + JSON.stringify(res.data))
          const token = res.data.accessToken
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
          commit(AUTH_SUCCESS, token)
          resolve(res)
        })
        .catch(err => {
          commit(AUTH_ERROR)
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    register({commit}, credentials){
      return new Promise((resolve, reject) => {
        commit(AUTH_REQUEST)
        console.log("register " + JSON.stringify(credentials))
        UserService.create(credentials)
        .then(resp => {
          const token = resp.data.token
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit(AUTH_SUCCESS, token)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error', err)
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    logout({commit}){
      return new Promise((resolve, reject) => {
        AuthService.logout(localStorage.getItem('token'))
        .then(() => {
          commit(LOGOUT)
          localStorage.removeItem('token')
          delete axios.defaults.headers.common['Authorization']
          resolve()
        })
        .catch(err => {
          commit(AUTH_ERROR, err)
          reject(err)
        })
      })
    }
  },
})