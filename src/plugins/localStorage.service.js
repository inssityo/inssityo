export default {
  getAccessToken() {
    return localStorage.getItem('accessToken');
  },
  getRefreshToken() {
    return localStorage.getItem('refreshToken')
  },
  getLoggedInUser() {
    return localStorage.getItem('loggedIn')
  },
  setAccessToken(token) {
    localStorage.setItem('accessToken', token);
  },
  setRefreshToken(token) {
    localStorage.setItem('refreshToken', token);
  },
  setLoggedInUser(user) {
    localStorage.setItem('loggedIn', user)
  },
  clearTokens() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  },
  clearStorage() {
    localStorage.clear();
  }
};