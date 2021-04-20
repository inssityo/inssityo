import axios from 'axios';

export default {
  /**
   * LOGIN attempt
   * @param {JSON} data User login credentials and type 
   * @returns 
   */
  entry(data) {
    return axios.post(process.env.VUE_APP_LOGIN_URL, data);
  },
  /**
   * REFRESH session and get new access token
   * @param {JSON} data refresh token 
   * @returns 
   */
  tokenRefresh(data) {
    return axios.post(process.env.VUE_APP_TOKEN_REFRESH_URL, data);
  },

  /**
   * LOG OUT and terminate existing refresh tokens
   * @param {JSON} data refresh token 
   * @returns 
   */
  logout(data) {
    return axios.post(process.env.VUE_APP_LOGOUT_URL, data);
  }
};