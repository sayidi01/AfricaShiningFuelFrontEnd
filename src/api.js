import axios from "axios";
import { isProd } from "./config";

const accessControlAllowOrigin = isProd
  ? "https://asf.ma"
  : "http://localhost:5173";

export const axiosInstance = axios.create({
  baseURL: isProd
    ? "https://africa-shining-fuel-server-1.onrender.com"
    : "http://localhost:3000",
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": accessControlAllowOrigin,
  },
});
