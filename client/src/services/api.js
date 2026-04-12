import axios from "axios";

const API = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL ||
    "http://localhost:5000/api", // fallback for local
  timeout: 15000
});

// ✅ INTERCEPTOR FOR DEBUGGING
API.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("API ERROR:", err?.response || err.message);
    return Promise.reject(err);
  }
);

// ✅ VENDOR
export const registerVendor = (data) =>
  API.post("/vendor/register", data);

export const getVendors = () =>
  API.get("/vendor");

// ✅ ORDER
export const placeOrder = (data) =>
  API.post("/order/place", data);

// ✅ STORE
export const getVendorStore = (id) =>
  API.get(`/vendor/${id}`);

export const addProduct = (id, data) =>
  API.post(`/vendor/product/${id}`, data);

export const getVendorOrders = (id) =>
  API.get(`/order/vendor/${id}`);