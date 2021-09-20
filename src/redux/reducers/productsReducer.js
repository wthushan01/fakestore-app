import * as actionTypes from '../actionTypes';

const initialState = () => {
    return {
        loading: false,
        response: {},
        error: false,
    }
}

export const productReducer = (state = initialState(), { type, data }) => {
    switch(type) {
        case actionTypes.PRODUCT_DATA_REQUEST:
            return {
                ...initialState(),
                loading: true
            }
        case actionTypes.PRODUCT_DATA_SUCCESS:
            return {
                ...initialState(),
                response: data
            }
        case actionTypes.PRODUCT_DATA_FAIL:
            return {
                ...initialState(),
                error: true 
            }
        default:
            return {
                ...state
            }
    }
}