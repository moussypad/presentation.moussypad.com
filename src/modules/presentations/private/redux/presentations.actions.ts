import { Action } from 'redux';
import { PresentationT } from './models';

export enum ActionTypes {
  REQUEST_FETCH_PRESENTATIONS = 'REQUEST_FETCH_PRESENTATIONS',
  FETCH_PRESENTATIONS_SUCCEED = 'FETCH_PRESENTATIONS_SUCCEED',
  FETCH_PRESENTATIONS_FAILURE = 'FETCH_PRESENTATIONS_FAILURE',
}

export interface RequestFetchPresentationActionT extends Action {
  readonly type: ActionTypes.REQUEST_FETCH_PRESENTATIONS;
}

export interface FetchPresentationSucceedActionT extends Action {
  readonly type: ActionTypes.FETCH_PRESENTATIONS_SUCCEED;
  presentations: PresentationT[];
}

export interface FetchPresentationFailureActionT extends Action {
  readonly type: ActionTypes.FETCH_PRESENTATIONS_FAILURE;
  error: Error;
}

export const actionCreators = {
  requestFetchPresentations: () => ({ type: ActionTypes.REQUEST_FETCH_PRESENTATIONS }) as RequestFetchPresentationActionT,
  fetchPresentationsSucceed: (presentations: PresentationT[]) => ({ type: ActionTypes.FETCH_PRESENTATIONS_SUCCEED, presentations }) as FetchPresentationSucceedActionT,
  fetchPresentationsFailure: (error: Error) => ({ type: ActionTypes.FETCH_PRESENTATIONS_FAILURE, error }) as FetchPresentationFailureActionT,
};

export type ActionsT
  = RequestFetchPresentationActionT
  | FetchPresentationSucceedActionT
  | FetchPresentationFailureActionT;