import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 15000
});

api.interceptors.response.use(
  response => response,
  error => {
    console.error("API Error:", error.message);
    return Promise.reject(error);
  }
);

export default api;
