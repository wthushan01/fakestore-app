import * as actionTypes from '../actionTypes';

export const requestProductData = () => {
    return {
        type: actionTypes.PRODUCT_DATA_REQUEST
    }
}

export const productDataReceive = (response) => {
    return {
        type: actionTypes.PRODUCT_DATA_SUCCESS,
        data: response
    }
}

export const productDataError = () => {
    return {
        type: actionTypes.PRODUCT_DATA_FAIL
    }
}