import axios from "axios";
import { setupCache } from "axios-cache-interceptor";


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
    timeout: 10000,
});

const cacheAxios = setupCache(axiosInstance);

const axiosObject = { cacheAxios, axiosInstance }

export default axiosObject;