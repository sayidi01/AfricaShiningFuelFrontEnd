import axios from "axios";
import { isProd } from "../src/config";

const accessControlAllowOrigin =  "https://asf.ma";
const baseURL = "https://africa-shining-fuel-server-1.onrender.com";

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": accessControlAllowOrigin,
  },
});
