import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const getNearbyVendors = (lat, lng) =>
  API.get(`/vendor/nearby?lat=${lat}&lng=${lng}`);

export const getLatestSales = () => API.get("/sales/latest");

export const searchAll = (q) => API.get(`/search?q=${q}`);

export const registerVendor = (data) =>
  API.post("/vendor/register", data);

export const getStore = (code) =>
  API.get(`/vendor/store/${code}`);

export const placeOrder = (data) =>
  API.post("/order/place", data);