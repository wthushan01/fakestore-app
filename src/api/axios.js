import axios from 'axios';
import { endpoints } from './endpoints';

const apiWithAxios = (url, method, params, data) => {
    let configs = {
        baseURL: endpoints.FAKESTORE_BASE_URL + url,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        timeout: 30000,
        method, params, data
    }

    let axiosInstance = axios.create(configs);

    axiosInstance.interceptors.request.use(
        (config) => {
            console.log('************************ REQUEST ************************');
            console.log(`METHOD : ${config.method}\nURL : ${config.baseURL}`);
            console.log('*********************************************************');
            return config;
        },
        (error) => {
            console.log('********************* REQUEST ERROR *********************');
            console.log(error);
            console.log('*********************************************************');
            return error;
        }
    );

    axiosInstance.interceptors.response.use(
        (config) => {
            console.log('************************ RESPONSE ***********************');
            console.log(config.data);
            console.log('*********************************************************');
            return config;
        },
        (error) => {
            console.log('******************** RESPONSE ERROR *********************');
            console.log(error);
            console.log('*********************************************************');
            return error;
        }
    );

    return axiosInstance;
}

export default apiWithAxios;