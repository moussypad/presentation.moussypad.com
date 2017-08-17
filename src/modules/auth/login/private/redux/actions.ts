import { Action } from 'redux';
import { UserProfileT } from './models';

export enum ActionTypes {
  REQUEST_LOGIN = 'REQUEST_LOGIN',
  LOGIN_SUCCEED = 'LOGIN_SUCCEED'
}

interface RequestLoginAction extends Action {
  readonly type: ActionTypes.REQUEST_LOGIN;
}

interface LoginSucceedAction extends Action {
  readonly type: ActionTypes.LOGIN_SUCCEED;
  userProfile: UserProfileT;
}

export const actionCreators = {
  requestLogin: () => ({ type: ActionTypes.REQUEST_LOGIN }) as RequestLoginAction,
  loginSucceed: (userProfile: UserProfileT) => ({ type: ActionTypes.LOGIN_SUCCEED, userProfile }) as LoginSucceedAction
};

export type ActionsT
  = RequestLoginAction
  | LoginSucceedAction;