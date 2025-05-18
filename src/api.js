import axios from "axios";

console.log("we outside", import.meta.env.VITE_API_BASE_URL);
const API = axios.create({
  baseURL: import.meta.env.API_BASE_URL || "http://localhost:8000/api",
});

export default API;
