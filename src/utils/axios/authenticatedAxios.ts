import axios from "axios";

const authenticatedAxios = axios.create({
  baseURL: "https://hoseinkocholoo-backend.onrender.com/",

  timeout: 10000,
  headers: {
    "Content-Type": "multipart/form-data;",
  },
});
authenticatedAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default authenticatedAxios;
