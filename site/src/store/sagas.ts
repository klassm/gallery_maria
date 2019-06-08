import { put } from '@redux-saga/core/effects';
import { loadImages } from './actions';
import { all, takeEvery } from 'redux-saga/effects';
import { actionTypes } from './actions';

function* fetchImages() {
  yield put(loadImages());
}

export default function* fetchSaga() {
  yield all([
    takeEvery(actionTypes.INITIAL_PAGE_LOAD, fetchImages),
  ]);
}
