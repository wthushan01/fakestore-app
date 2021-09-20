import * as actionTypes from '../actionTypes';

const initialState = () => {
    return {
        items: []
    }
}

export const cartReducer = (state = initialState(), { type, data }) => {
    switch(type) {
        case actionTypes.EDIT_CART:
            return {
                ...state,
                items: data
            }
        default:
            return {
                ...state
            }
    }
}