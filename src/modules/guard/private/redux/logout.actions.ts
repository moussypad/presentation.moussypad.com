import { Action } from 'redux';
import { UserProfileT } from './models';

export enum ActionTypes {
  RESET_LOGOUT = 'RESET_LOGOUT',
  REQUEST_LOGOUT = 'REQUEST_LOGOUT',
  LOGOUT_SUCCEED = 'LOGOUT_SUCCEED',
  LOGOUT_FAILURE = 'LOGOUT_FAILURE'
}

interface ResetLogoutAction extends Action {
  readonly type: ActionTypes.RESET_LOGOUT;
}

interface RequestLogoutAction extends Action {
  readonly type: ActionTypes.REQUEST_LOGOUT;
}

interface LogoutSucceedAction extends Action {
  readonly type: ActionTypes.LOGOUT_SUCCEED;
  userProfile: UserProfileT;
}

interface LogoutFailureAction extends Action {
  readonly type: ActionTypes.LOGOUT_FAILURE;
  error: Error;
}

export const actionCreators = {
  resetLogout: () => ({ type: ActionTypes.RESET_LOGOUT }) as ResetLogoutAction,
  requestLogout: () => ({ type: ActionTypes.REQUEST_LOGOUT }) as RequestLogoutAction,
  logoutSucceed: () => ({ type: ActionTypes.LOGOUT_SUCCEED }) as LogoutSucceedAction,
  logoutFailure: (error: Error) => ({ type: ActionTypes.LOGOUT_FAILURE, error }) as LogoutFailureAction
};

export type ActionsT
  = ResetLogoutAction
  | RequestLogoutAction
  | LogoutSucceedAction
  | LogoutFailureAction;