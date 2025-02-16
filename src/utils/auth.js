import appConstants from '@/constants/appConstants';

export const getToken = () => {
    return localStorage.getItem(appConstants.storageKeys.authenticationToken);
};

export const isAuthenticated = () => {
    return !!getToken();
};

export const logout = () => {
    localStorage.removeItem(appConstants.storageKeys.authenticationToken);
};