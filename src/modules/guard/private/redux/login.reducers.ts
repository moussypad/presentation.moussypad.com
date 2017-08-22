import { ActionsT, ActionTypes } from './login.actions';
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

export type LoginStateT = OnInitT | OnSucceedT | OnProcessT | OnFailureT;

export function loginReducer(state: LoginStateT = { current: 'OnInit' }, action: ActionsT): LoginStateT {
  switch (action.type) {
    case ActionTypes.RESET_LOGIN:
      return { current: 'OnInit' };
    case ActionTypes.REQUEST_LOGIN:
      return { current: 'OnProcess' };
    case ActionTypes.LOGIN_SUCCEED:
      return { current: 'OnSucceed', userProfile: action.userProfile };
    case ActionTypes.LOGIN_FAILURE:
      return { current: 'OnFailure', error: action.error };
    default:
      return state;
  }
}