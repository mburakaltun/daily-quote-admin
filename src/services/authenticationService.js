import axios from 'axios';
import appConstants from "@/constants/appConstants";

const authenticationService = axios.create({
    baseURL: appConstants.serverSideBaseUrl + "/authentication",
});

export default authenticationService;