import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { ActionTypes, actionCreators } from './actions';
import { UserProfileT } from './models';

const userProfile: UserProfileT = { username: 'Jason', thumbnailURL: 'thumnailURL' };

const mockLogin = () => new Promise<UserProfileT>((resolve, reject) => {
  setTimeout(() => resolve(userProfile), 3000);
});

function* loginRequest(): SagaIterator {
  try {
    const { username, thumbnailURL } = yield call(mockLogin);
    yield put(actionCreators.loginSucceed({ username, thumbnailURL }));
  } catch (e) {
    // yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

export function* watchLoginRequest() {
  yield takeLatest(ActionTypes.REQUEST_LOGIN, loginRequest);
}