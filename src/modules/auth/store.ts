import { combineReducers } from 'redux';
import { LoginStateT, loginReducer } from './login/store';

export type AuthStateT = {
  login: LoginStateT
};

export const authReducer = combineReducers({
  login: loginReducer
});

export { AppStateT } from '../../appStore';