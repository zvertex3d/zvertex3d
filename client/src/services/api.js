import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000"
});

// 🔥 Prevent crash if backend fails
API.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("API ERROR:", err?.response || err.message);
    return { data: [] }; // always return safe array
  }
);

export const getNearbyVendors = (lat, lng) =>
  API.get(`/vendor/nearby?lat=${lat}&lng=${lng}`);

export const getLatestSales = () => API.get("/sales/latest");

export const searchAll = (query) =>
  API.get(`/search?q=${query}`);

export const registerVendor = (data) =>
  API.post("/vendor/register", data);