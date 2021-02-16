import { createStore } from 'vuex'
import AuthService from '../api-services/auth.service';
import axios from 'axios'

export default createStore({
  state() {
    return {
      status: '',
      token: localStorage.getItem('token') || '',
    }
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token){
      state.status = 'success'
      state.token = token
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    },
  },
  getters : {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  },
  actions: {
    login({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        AuthService.entry(user)
        .then(res => {
          console.log("resp " + JSON.stringify(res.data))
          const token = res.data.accessToken
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
          commit('auth_success', token)
          resolve(res)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    register({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        AuthService.entry(user)
        .then(resp => {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token, user)
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
          commit('logout')
          localStorage.removeItem('token')
          delete axios.defaults.headers.common['Authorization']
          resolve()
        })
        .catch(err => {
          commit('auth_error', err)
          reject(err)
        })
      })
    }
  },
})