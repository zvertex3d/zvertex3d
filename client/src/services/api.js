import axios from "axios";

const API = axios.create({
  baseURL: "/api"
});

// 🔥 Prevent crash completely
API.interceptors.response.use(
  (res) => res,
  () => Promise.resolve({ data: [] })
);

export default API;