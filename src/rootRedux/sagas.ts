import { fork, all } from 'redux-saga/effects';
import { watchLoginRequest } from '../modules/auth/reduxConnect';

export function* rootSaga() {
  yield all ([
    fork(watchLoginRequest)
  ]);
}