import axios from "axios";
import AuthService from "../api-services/auth.service";
import LocalStorageService from "./localStorage.service";
import router from "@/router";

axios.interceptors.request.use(
  req => {
    
    const token = LocalStorageService.getAccessToken();
    if (token) {
      req.headers.common.Authorization = "Bearer " + token
    }
    req.baseURL = process.env.VUE_APP_API_ENDPOINT;
    
    console.log(`${req.method} ${req.url}`);
    return req;
  },
  err => {
    Promise.reject(err);
  }
);

axios.interceptors.response.use(
  res => {
    console.log(res.data);
    return res;
  },
  function (err) {
    const originalRequest = err.config;
    if (err.response.status === 403 && originalRequest.url === process.env.VUE_APP_TOKEN_REFRESH_URL) {
      router.push({ name: "entry"});
      return Promise.reject(err);
    }
    if (err.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = LocalStorageService.getRefreshToken();
      return AuthService.tokenRefresh({"refreshToken": refreshToken})
        .then(res => {
          if (res.status === 200) {
            LocalStorageService.setToken(res.data);
            res.headers.common.Authorization = "Bearer " + LocalStorageService.getAccessToken();
            return axios(originalRequest);
          }
        })
      /*
      this.$store.dispatch("refreshtoken")
      .then(() => this.$router.push("/"))
      .catch(error => console.log("error " + error))
      */
    }
    return Promise.reject(err);
  }
);

export default axios;

