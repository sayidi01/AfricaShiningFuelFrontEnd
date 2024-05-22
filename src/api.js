import axios from "axios";
import { isProd } from "./config";

export const axiosInstance = axios.create({
  baseURL: isProd
    ? "https://africa-shining-fuel-server-1.onrender.com"
    : "http://localhost:3000",
  withCredentials: true,
});
