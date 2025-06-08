// src/services/api.js
import axios from "axios";

const api22222 = axios.create({
  baseURL: "http://localhost:5000/api", // adjust if backend URL changes
});


const api = axios.create({
  baseURL: "https://mern-auth-app-production.up.railway.app/api",
});



export default api;
