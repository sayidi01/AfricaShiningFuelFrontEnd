import axios from "axios";
import { isProd } from "../src/config";

const accessControlAllowOrigin = !isProd ? "http://localhost:5173" : "https://asf.ma";
const baseURL = !isProd ? "http://localhost:3000" : "https://africa-shining-fuel-server-79es:3000";

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": accessControlAllowOrigin,
  },
});