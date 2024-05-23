import axios from "axios";
import { isProd } from "../src/config";

const accessControlAllowOrigin = isProd == false ? "http://localhost:5173" : "https://asf.ma";

export const axiosInstance = axios.create({
  baseURL: isProd
    ? "https://africa-shining-fuel-server-1.onrender.com"
    : "http://localhost:3000",
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": accessControlAllowOrigin,
  },
});
