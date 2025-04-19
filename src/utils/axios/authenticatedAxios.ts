import axios from "axios";

const authenticatedAxios = axios.create({
  baseURL: "http://127.0.0.1:8000",

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
