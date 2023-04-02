import axios from "axios";
import { getBackendURL } from "../utils";

export const URL_ENDPOINT = getBackendURL();

// set http request headers config
export const setHeaders = () => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  if (localStorage.getItem("token")) {
    headers.authorization = "Bearer " + localStorage.getItem("token");
  }
  return headers;
};

export const http = () => {
  return axios.create({
    baseURL: URL_ENDPOINT,
    timeout: 60000, // indicates, 1000ms ie. 1 second
    headers: setHeaders(),
  });
};
