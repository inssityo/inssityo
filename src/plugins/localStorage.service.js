export default {
  getAccessToken() {
    return localStorage.getItem('accessToken');
  },
  getRefreshToken() {
    return localStorage.getItem('refreshToken')
  },
  setToken(token) {
    localStorage.setItem('accessToken', token);
    localStorage.setItem('refreshToken', token);
  },
  clearToken() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
};