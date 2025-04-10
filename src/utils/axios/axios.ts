import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://194.5.188.71/",
  timeout: 10000,
  headers: {
    "Content-Type": "aplication/json",
  },
});

export default axiosInstance;
