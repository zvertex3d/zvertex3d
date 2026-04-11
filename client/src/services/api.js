import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "/api"
});

API.interceptors.response.use(
  (res) => res,
  () => Promise.resolve({ data: [] })
);

// SEARCH / MARKETPLACE
export const searchAll = (q) => API.get(`/search?q=${q}`);
export const getVendors = () => API.get(`/vendors`);
export const getVendorsByLocation = (loc) => API.get(`/vendors?location=${loc}`);

// VENDOR
export const registerVendor = (data) => API.post(`/vendor/register`, data);

// ORDER
export const placeOrder = (data) => API.post(`/order/place`, data);