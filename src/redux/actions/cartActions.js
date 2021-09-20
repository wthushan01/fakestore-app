import * as actionTypes from '../actionTypes';

export const editCart = (item) => {
    return {
        type: actionTypes.EDIT_CART,
        data: item
    }
}