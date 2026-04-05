import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.API_URL || "http://localhost:3002/api",
})


export default axiosInstance;