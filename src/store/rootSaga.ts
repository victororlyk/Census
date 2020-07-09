import { takeEvery } from 'redux-saga/effects';
import { getFamilies } from './family/saga';
import { GET_FAMILIES } from './family/actionTypes';

export function* rootSaga() {
    yield takeEvery(GET_FAMILIES, getFamilies);
}
