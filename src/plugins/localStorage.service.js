export default {
  getAccessToken() {
    return localStorage.getItem('accessToken');
  },
  getRefreshToken() {
    return localStorage.getItem('refreshToken')
  },
  setAccessToken(token) {
    localStorage.setItem('accessToken', token);
  },
  setRefreshToken(token) {
    localStorage.setItem('refreshToken', token);
  },
  clearTokens() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
};