import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API
});

export const registerVendor = (data) => API.post("/vendor/register", data);

export const getNearbyVendors = (lat, lng) =>
  API.get(`/vendor/nearby?lat=${lat}&lng=${lng}`);

export const getLatestSales = () => API.get("/sales/latest");

export const searchAll = (query) =>
  API.get(`/search?q=${query}`);