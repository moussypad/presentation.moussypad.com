import { SagaIterator } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
import { ActionTypes as authActionTypes, actionCreators as authActionCreators } from './auth.actions';
import { ActionTypes as loginActionTypes, actionCreators as loginActionCreators } from './login.actions';
import { ActionTypes as logoutActionTypes, actionCreators as logoutActionCreators } from './logout.actions';
import { UserProfileT } from './models';
import { GoogleAuth2 } from '../../../../services/google/googleAuth2';

// const mockAuth = () => new Promise<UserProfileT>((resolve, reject) => {
//   setTimeout(() => resolve({ username: 'Jason', thumbnailURL: 'thumnailURL' }), 3000);
// });

const googleAuth2config = {
  apiKey: 'AIzaSyBjvY5R6s796cDFLOGygQ9pmVIclqGkhZw',
  discoveryDocs: [
    // 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'
  ],
  clientId: '172273720339-ojr1afhroua2d9vmg2a75pvd1663lho0.apps.googleusercontent.com',
  scope: 'profile https://www.googleapis.com/auth/drive.readonly'
};

const googleAuth2 = new GoogleAuth2(googleAuth2config);

function* requestAuth(): SagaIterator {
  try {
    const userProfile: UserProfileT = yield call(googleAuth2.init);
    yield put(authActionCreators.authSucceed(userProfile));
    return true;
  } catch (error) {
    yield put(authActionCreators.authFailure(error));
    return false;
  }
}

function* requestLogin(): SagaIterator {
  try {
    const userProfile: UserProfileT = yield call(googleAuth2.login);
    yield put(loginActionCreators.loginSucceed(userProfile));
    yield put(authActionCreators.authSucceed(userProfile));
    return true;
  } catch (error) {
    yield put(loginActionCreators.loginFailure(error));
    yield put(authActionCreators.authFailure(error));
    return false;
  }
}

function* requestLogout(): SagaIterator {
  try {
    yield call(googleAuth2.signout);
    yield put(logoutActionCreators.logoutSucceed());
    yield put(logoutActionCreators.resetLogout());
    yield put(loginActionCreators.resetLogin());
    yield put(authActionCreators.authFailure(new Error('User logged out')));
    return false;
  } catch (error) {
    yield put(logoutActionCreators.logoutFailure(error));
    return true;
  }
}

export function* guardFlowSaga() {
  yield take(authActionTypes.REQUEST_AUTH);
  let isAuthenticated: boolean = yield call(requestAuth);

  while (true) {
    if (isAuthenticated) {
      yield take(logoutActionTypes.REQUEST_LOGOUT);
      isAuthenticated = yield call(requestLogout);
    } else {
      yield take(loginActionTypes.REQUEST_LOGIN);
      isAuthenticated = yield call(requestLogin);
    }
  }
}