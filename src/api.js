import axios from 'axios'



export const axiosInstance = axios.create({
    baseURL :  "https://africa-shining-fuel-server-1.onrender.com",
    withCredentials: true,
})