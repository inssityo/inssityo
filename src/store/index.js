import { createStore } from 'vuex'
import AuthService from '../api-services/auth.service';
import UserService from '../api-services/user.service';
import LocalStorageService from '../plugins/localStorage.service';
import { requestInterceptor, responseInterceptor } from '../plugins/requestInterceptors.js';

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
          const refreshToken = res.data.refreshToken
          const loggedin = res.data.user;
          LocalStorageService.setLoggedInUser(JSON.stringify(loggedin))
          LocalStorageService.setAccessToken(accessToken)
          LocalStorageService.setRefreshToken(refreshToken)
          requestInterceptor();
          responseInterceptor();
          commit(AUTH_SUCCESS, accessToken)
          resolve(res)
        })
        .catch(err => {
          commit(AUTH_ERROR)
          LocalStorageService.clearTokens()
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
          LocalStorageService.clearTokens()
          reject(err)
        })
      })
    },
    logout({commit}) {
      return new Promise((resolve, reject) => {
        AuthService.logout(LocalStorageService.getAccessToken())
        .then(() => {
          commit(LOGOUT)
          LocalStorageService.clearTokens()
          LocalStorageService.clearStorage()
          resolve()
        })
        .catch(err => {
          commit(AUTH_ERROR, err)
          reject(err)
        })
      })
    },
  },
})