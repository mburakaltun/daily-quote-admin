import axios from 'axios';
import appConstants from "@/constants/appConstants";

const quoteService = axios.create({
    baseURL: appConstants.serverSideBaseUrl + "/quote",
});

quoteService.interceptors.request.use((config) => {
    const authenticationToken = localStorage.getItem(appConstants.storageKeys.authenticationToken);
    if (authenticationToken) {
        config.headers.Authorization = `Bearer ${authenticationToken}`;
    }
    return config;
});

export default quoteService;