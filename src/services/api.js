import axios from "axios";

const API = axios.create({
  baseURL: "https://cms-backend-server-rd3e.onrender.com/api", 
});

// add token automatically if exists
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
