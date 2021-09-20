import * as productActions from '../redux/actions/productsActions';
import { put, call } from '@redux-saga/core/effects'
import { getProductData } from '../api/methods';

export function* getProductsData() {
    try {
        const response = yield call(getProductData);
        if (response.status == 200) yield put(productActions.productDataReceive(response.data));
        else yield put(productActions.productDataError());
    } catch (error) {
        yield put(productActions.productDataError());
    }
}