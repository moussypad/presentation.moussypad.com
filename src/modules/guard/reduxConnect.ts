import { combineReducers } from 'redux';
// import { fork, all } from 'redux-saga/effects';
import { authReducer, AuthStateT } from './private/redux/auth.reducers';
import { loginReducer, LoginStateT } from './private/redux/login.reducers';
import { logoutReducer, LogoutStateT } from './private/redux/logout.reducers';
export { guardFlowSaga } from './private/redux/guard.sagas';

// import { watchLogin } from './private/redux/login.sagas';
// import { watchLogout } from './private/redux/logout.sagas';

export type GuardStateT = {
  auth: AuthStateT,
  login: LoginStateT
  logout: LogoutStateT
};

export const guardReducer = combineReducers({
  auth: authReducer,
  login: loginReducer,
  logout: logoutReducer
});

// export { AuthStateT, LoginStateT, LogoutStateT, GuardStateT };
export { RootStateT } from '../../store';