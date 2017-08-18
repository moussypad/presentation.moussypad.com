import { combineReducers } from 'redux';
import { LoginStateT, loginReducer, watchLoginRequest } from './login/reduxConnect';

export { watchLoginRequest };

export type AuthStateT = {
  login: LoginStateT
};

export const authReducer = combineReducers({
  login: loginReducer
});

export { RootStateT } from '../../store';