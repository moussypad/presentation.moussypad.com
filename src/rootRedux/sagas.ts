import { all, fork } from 'redux-saga/effects';
import { guardFlowSaga } from '../modules/guard/reduxConnect';

export function* rootSaga() {
  yield all([
    fork(guardFlowSaga)
  ]);
}