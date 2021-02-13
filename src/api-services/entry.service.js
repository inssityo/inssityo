import axios from 'axios';

export default {
  createLogin(data) {
    return axios.post(process.env.VUE_APP_LOGIN_URL, data);
  },
  createToken(data) {
    return axios.post(process.env.VUE_APP_TOKEN_URL, data);
  },
  createLogout(data) {
    return axios.post(process.env.VUE_APP_LOGOUT_URL, data);
  }
};