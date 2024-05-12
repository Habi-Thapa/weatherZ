import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      appid: API_KEY,
    };
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
