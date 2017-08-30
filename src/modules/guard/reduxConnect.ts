import { combineReducers } from 'redux';
import { authReducer, AuthStateT } from './private/redux/auth.reducers';
import { loginReducer, LoginStateT } from './private/redux/login.reducers';
import { logoutReducer, LogoutStateT } from './private/redux/logout.reducers';
export { guardFlowSaga } from './private/redux/guard.sagas';

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

export { RootStateT } from '../../rootRedux/root.reducers';