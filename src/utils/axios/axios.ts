import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://hoseinkocholoo-backend.onrender.com/",

  timeout: 10000,
  headers: {
    "Content-Type": "aplication/json",
  },
});

export default axiosInstance;
