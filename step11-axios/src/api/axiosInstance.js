import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API,
  timeout: 5000, //5000ms 동안 응답이없으면 실패(reject) 처리
});
export const dataJson = async (type) => {
  const re = await axiosInstance.get(`/${type}`);
  console.log(re);
  return re;
};
export const adduser = async (type, data) => {
  const re = await axiosInstance.post(`/${type}`, data);
  return re;
};
export default axiosInstance;
