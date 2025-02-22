import axios from 'axios';
import appConstants from '@/constants/appConstants';
import { getToken } from '@/utils/auth';
import authenticationUrls from "@/urls/authenticationUrls.js";
import { useToast } from "vue-toastification";

const toast = useToast();

const axiosInstance = axios.create({
    baseURL: appConstants.serverSideBaseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});

const publicRoutes = Object.values(authenticationUrls);

axiosInstance.interceptors.request.use(
    (config) => {
        const isPublicRoute = publicRoutes.some(route =>
            config.url?.includes(route)
        );

        if (!isPublicRoute) {
            const token = getToken();
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle common errors
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // Handle unauthorized access
                    break;
                case 403:
                    // Handle forbidden
                    break;
                case 404:
                    // Handle not found
                    break;
                default:
                    // Handle other errors
                    break;
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;