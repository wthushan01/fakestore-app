import { all, takeEvery } from "@redux-saga/core/effects";
import * as actionTypes from '../redux/actionTypes'
import { getProductsData } from './productsSaga'

export default function* appSaga() {
    yield all([
        takeEvery([actionTypes.PRODUCT_DATA_REQUEST], getProductsData),
    ]);
}