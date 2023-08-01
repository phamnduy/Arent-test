import axios from "axios";
import { localTokenStoreRemove } from "../utils/authenticate";
import { httpResponseStatus, httpStatus } from "./http-status";

const config = {
  baseURL: process.env.REACT_APP_REST_API_URL,
  validateStatus: (status: number) => {
    return (
      (status >= httpStatus.StatusOK && status < httpStatus.StatusMultipleChoices) ||
      status === httpStatus.StatusBadRequest
    );
  },
  timeout: 60 * 1000, // Timeout
};
const httpClient = axios.create(config);
httpClient.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("accessToken")) {
      const token = localStorage.getItem("accessToken");
      config.headers.token = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error && error.response && error.response.status && error.response.status === 401) {
      if (
        error.response.data.status === httpResponseStatus.StatusExpiredRefreshToken ||
        error.response.data.status === httpResponseStatus.StatusInvalidToken
      ) {
        localTokenStoreRemove();
        window.location.href = "/";
      }
    }
    return Promise.reject(error);
  }
);

export default httpClient;
