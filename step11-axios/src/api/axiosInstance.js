import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API,
  timeout: 5000, //5000ms 동안 응답이없으면 실패(reject) 처리
});

export default axiosInstance;
