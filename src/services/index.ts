import axios from "axios";

// <--------- CONFIGURATION SETTINGS -------->
const BASE_URL =  process.env.BASE_URL;

export const Api = axios.create({
    baseURL:  BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // withCredentials: true,
  },
});
