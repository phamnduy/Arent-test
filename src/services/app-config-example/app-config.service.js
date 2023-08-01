/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import httpClient from "../../configs/http-client";

export const getAppConfig = async (config) => {
  return httpClient.get("https://httpstat.us/200?sleep=500", config);
};

export const getAppConfigBadReq = async (config) => {
  return httpClient.get("https://httpstat.us/400", config);
};

export const getAppConfigErrorReq = async (config) => {
  return httpClient.get("https://httpstat.us/500", config);
};

export const getAppConfigErrorAuth = async (config) => {
  return httpClient.get("https://httpstat.us/401?sleep=300", config);
};

export const getAppConfigErrorForbidden = async (config) => {
  return httpClient.get("https://httpstat.us/403", config);
};
