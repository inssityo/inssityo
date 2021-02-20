import axios from 'axios';

export default {
  entry(data) {
    return axios.post(process.env.VUE_APP_LOGIN_URL, data);
  },
  tokenRefresh(data) {
    return axios.post(process.env.VUE_APP_TOKEN_REFRESH_URL, data);
  },
  logout(data) {
    return axios.post(process.env.VUE_APP_LOGOUT_URL, data);
  }
};