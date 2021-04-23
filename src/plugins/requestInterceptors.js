import axios from "axios";
import AuthService from "../api-services/auth.service";
import LocalStorageService from "./localStorage.service";
import router from "@/router";

export function requestInterceptor() {
  axios.interceptors.request.use(
    req => {
      
      const token = LocalStorageService.getAccessToken();
      if (token) {
        req.headers.authorization = "Bearer " + token
      }
      //req.baseURL = process.env.VUE_APP_API_ENDPOINT;
      
      console.log(`${req.method} ${req.url}`);
      return req;
    },
    err => {
      Promise.reject(err);
    }
  );
}

export function responseInterceptor() {
  axios.interceptors.response.use((response) => {
    return response
  }, 

  function (error) {
    const originalRequest = error.config;

    if (error.response.status === 401 && originalRequest.url === `${process.env.VUE_APP_API_ENDPOINT}${process.env.VUE_APP_TOKEN_REFRESH_URL}`) {
      router.push({name: "entry"});
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = LocalStorageService.getRefreshToken();
      return  AuthService.tokenRefresh({"refreshToken": refreshToken})
        .then(res => {
          if (res.status === 200) {
            LocalStorageService.setAccessToken(res.data.accessToken);
            res.headers.authorization = "Bearer " + LocalStorageService.getAccessToken();
            requestInterceptor();
            return axios(originalRequest);
          }
        })
    }
    return Promise.reject(error);
  });
}

