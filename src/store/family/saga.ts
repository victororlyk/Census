import { put, call } from 'redux-saga/effects';
import axios from '../../utils/axios';
import { getFamiliesSuccess, getFamiliesFailure } from './actions';

export function* getFamilies() {
    try {
        const response = yield call(axios.get, '/');
        yield put(getFamiliesSuccess(response.data));
    } catch (e) {
        yield put(getFamiliesFailure(e));
    }
}
