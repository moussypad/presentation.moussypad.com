import { Action } from 'redux';
import { UserProfileT } from './models';

export enum ActionTypes {
  RESET_LOGIN = 'RESET_LOGIN',
  REQUEST_LOGIN = 'REQUEST_LOGIN',
  LOGIN_SUCCEED = 'LOGIN_SUCCEED',
  LOGIN_FAILURE = 'LOGIN_FAILURE'
}

interface ResetLoginAction extends Action {
  readonly type: ActionTypes.RESET_LOGIN;
}

interface RequestLoginAction extends Action {
  readonly type: ActionTypes.REQUEST_LOGIN;
}

interface LoginSucceedAction extends Action {
  readonly type: ActionTypes.LOGIN_SUCCEED;
  userProfile: UserProfileT;
}

interface LoginFailureAction extends Action {
  readonly type: ActionTypes.LOGIN_FAILURE;
  error: Error;
}

export const actionCreators = {
  resetLogin: () => ({ type: ActionTypes.RESET_LOGIN }) as ResetLoginAction,
  requestLogin: () => ({ type: ActionTypes.REQUEST_LOGIN }) as RequestLoginAction,
  loginSucceed: (userProfile: UserProfileT) => ({ type: ActionTypes.LOGIN_SUCCEED, userProfile }) as LoginSucceedAction,
  loginFailure: (error: Error) => ({ type: ActionTypes.LOGIN_FAILURE, error }) as LoginFailureAction
};

export type ActionsT
  = ResetLoginAction
  | RequestLoginAction
  | LoginSucceedAction
  | LoginFailureAction;