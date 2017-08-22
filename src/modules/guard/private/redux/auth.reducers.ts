import { ActionsT, ActionTypes } from './auth.actions';
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

export type AuthStateT = OnInitT | OnSucceedT | OnProcessT | OnFailureT;

export function authReducer(state: AuthStateT = { current: 'OnInit' }, action: ActionsT): AuthStateT {
  switch (action.type) {
    case ActionTypes.RESET_AUTH:
      return { current: 'OnInit' };
    case ActionTypes.REQUEST_AUTH:
      return { current: 'OnProcess' };
    case ActionTypes.AUTH_SUCCEED:
      return { current: 'OnSucceed', userProfile: action.userProfile };
    case ActionTypes.AUTH_FAILURE:
      return { current: 'OnFailure', error: action.error };
    default:
      return state;
  }
}