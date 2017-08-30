import { all, fork } from 'redux-saga/effects';
import { guardFlowSaga } from '../modules/guard/reduxConnect';
import { watchLoadPresentations } from '../modules/presentations/reduxConnect';

export function* rootSaga() {
  yield all([
    fork(guardFlowSaga),
    fork(watchLoadPresentations)
  ]);
}