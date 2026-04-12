import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api"
});

export const registerVendor = (data) => API.post("/vendor/register", data);
export const getVendors = () => API.get("/vendor");
export const placeOrder = (data) => API.post("/order/place", data);