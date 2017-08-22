import { ActionsT, ActionTypes } from './logout.actions';
import { UserProfileT } from './models';
// export { RootStateT } from '../../reduxConnect';

type OnInitT = {
  current: 'OnInit'
};

type OnSucceedT = {
  current: 'OnSucceed',
  userProfile: UserProfileT
};

type OnProcessT = {
  current: 'OnProcess',
};

type OnFailureT = {
  current: 'OnFailure',
  error: Error
};

export type LogoutStateT = OnInitT | OnSucceedT | OnProcessT | OnFailureT;

export function logoutReducer(state: LogoutStateT = { current: 'OnInit' }, action: ActionsT): LogoutStateT {
  switch (action.type) {
    case ActionTypes.RESET_LOGOUT:
      return { current: 'OnInit' };
    case ActionTypes.REQUEST_LOGOUT:
      return { current: 'OnProcess' };
    case ActionTypes.LOGOUT_SUCCEED:
      return { current: 'OnSucceed', userProfile: action.userProfile };
      case ActionTypes.LOGOUT_FAILURE:
      return { current: 'OnFailure', error: action.error };
    default:
      return state;
  }
}