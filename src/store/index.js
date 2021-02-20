import { createStore } from 'vuex'
import AuthService from '../api-services/auth.service';
import UserService from '../api-services/user.service';
import LocalStorageService from '../plugins/localStorage.service';

const AUTH_REQUEST = 'auth_request';
const AUTH_SUCCESS = 'auth_success';
const AUTH_ERROR = 'auth_error';
const LOGOUT = 'logout';

export default createStore({
  state() {
    return {
      status: '',
      accessToken: localStorage.getItem('accessToken') || '',
    }
  },
  mutations: {
    [AUTH_REQUEST](state) {
      state.status = 'loading'
    },
    [AUTH_SUCCESS](state, accessToken) {
      state.status = 'success'
      state.accessToken = accessToken
    },
    [AUTH_ERROR](state) {
      state.status = 'error'
    },
    [LOGOUT](state) {
      state.status = ''
      state.accessToken = ''
    },
  },
  getters : {
    isLoggedIn: state => {
      return state.accessToken;
    },
    authStatus: state => state.status,
  },
  actions: {
    login({commit}, credentials) {
      return new Promise((resolve, reject) => {
        commit(AUTH_REQUEST)
        AuthService.entry(credentials)
        .then(res => {
          const accessToken = res.data.accessToken
          LocalStorageService.setToken(accessToken)
          commit(AUTH_SUCCESS, accessToken)
          resolve(res)
        })
        .catch(err => {
          commit(AUTH_ERROR)
          LocalStorageService.clearToken()
          reject(err)
        })
      })
    },
    register({commit}, credentials) {
      return new Promise((resolve, reject) => {
        commit(AUTH_REQUEST)
        UserService.create(credentials)
        .then(resp => {
          const accessToken = resp.data.accessToken
          LocalStorageService(accessToken)
          commit(AUTH_SUCCESS, accessToken)
          resolve(resp)
        })
        .catch(err => {
          commit(AUTH_ERROR, err)
          LocalStorageService.clearToken()
          reject(err)
        })
      })
    },
    logout({commit}) {
      return new Promise((resolve, reject) => {
        AuthService.logout(LocalStorageService.getAccessToken())
        .then(() => {
          commit(LOGOUT)
          LocalStorageService.clearToken()
          resolve()
        })
        .catch(err => {
          commit(AUTH_ERROR, err)
          reject(err)
        })
      })
    },
    /*
    refreshToken({commit}) {
      return new Promise((resolve, reject) => {
        commit(AUTH_REQUEST)
        const refreshToken = LocalStorageService.getRefreshToken()
        AuthService.tokenRefresh({'refreshToken': refreshToken})
        .then(res => {
          LocalStorageService.setToken(refreshToken)
          //axios.defaults.headers.common['Authorization'] = 'Bearer ' + refreshToken
          commit(AUTH_SUCCESS, accessToken)
          resolve(res)
        })
        .catch(err => {
          commit(AUTH_ERROR)
          LocalStorageService.clearToken()
          reject(err)
        })
      })
    }*/
  },
})