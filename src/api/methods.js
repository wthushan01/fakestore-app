import api from './axios';
import { endpoints } from './endpoints';
import { constants } from '../libs';

export const getProductData = () => {
    return api(endpoints.PRODUCTS, constants.apiMethods.GET, null, null)({});
}