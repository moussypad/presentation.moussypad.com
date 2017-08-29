import { ActionsT, ActionTypes } from './presentations.actions';
import { PresentationT } from './models';

type OnInitT = {
  current: 'OnInit'
};

type OnSucceedT = {
  current: 'OnSucceed',
  presentations: PresentationT[]
};

type OnProcessT = {
  current: 'OnProcess'
};

type OnFailureT = {
  current: 'OnFailure',
  error: Error
};

export type PresentationsStateT = OnInitT | OnSucceedT | OnProcessT | OnFailureT;

export function presentationsReducer(state: PresentationsStateT = { current: 'OnInit' }, action: ActionsT): PresentationsStateT {
  switch (action.type) {
    case ActionTypes.REQUEST_FETCH_PRESENTATIONS:
      return { current: 'OnProcess' };
    case ActionTypes.FETCH_PRESENTATIONS_SUCCEED:
      return { current: 'OnSucceed', presentations: action.presentations };
    case ActionTypes.FETCH_PRESENTATIONS_FAILURE:
      return { current: 'OnFailure', error: action.error };
    default:
      return state;
  }
}