import httpClient from "../../configs/http-client";

export const getMe = async (config) => {
  return httpClient.get("https://jsonplaceholder.typicode.com/todos/1", config);
};
