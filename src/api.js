import axios from 'axios'

const baseURL = "https://africa-shining-fuel-server-3.onrender.com"

export const axiosInstance = axios.create({
    baseURL,
    withCredentials: true,
})