import { Action } from 'redux';
import { UserProfileT } from './models';

export enum ActionTypes {
  RESET_AUTH = 'RESET_AUTH',
  REQUEST_AUTH = 'REQUEST_AUTH',
  AUTH_SUCCEED = 'AUTH_SUCCEED',
  AUTH_FAILURE = 'AUTH_FAILURE'
}

interface ResetAuthAction extends Action {
  readonly type: ActionTypes.RESET_AUTH;
}

interface RequestAuthAction extends Action {
  readonly type: ActionTypes.REQUEST_AUTH;
}

interface AuthSucceedAction extends Action {
  readonly type: ActionTypes.AUTH_SUCCEED;
  userProfile: UserProfileT;
}

interface AuthFailureAction extends Action {
  readonly type: ActionTypes.AUTH_FAILURE;
  error: Error;
}

export const actionCreators = {
  resetAuth: () => ({ type: ActionTypes.RESET_AUTH }) as ResetAuthAction,
  requestAuth: () => ({ type: ActionTypes.REQUEST_AUTH }) as RequestAuthAction,
  authSucceed: (userProfile: UserProfileT) => ({ type: ActionTypes.AUTH_SUCCEED, userProfile }) as AuthSucceedAction,
  authFailure: (error: Error) => ({ type: ActionTypes.AUTH_FAILURE, error }) as AuthFailureAction
};

export type ActionsT
  = ResetAuthAction
  | RequestAuthAction
  | AuthSucceedAction
  | AuthFailureAction;