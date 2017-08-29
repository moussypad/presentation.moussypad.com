import { Action } from 'redux';

export enum ActionTypes {
  START_PRESENTATION = 'START_PRESENTATION',
  EXIT_PRESENTATION = 'EXIT_PRESENTATION',
}

export interface StartPresentationActionT extends Action {
  readonly type: ActionTypes.START_PRESENTATION;
  id: string;
}

export interface ExitPresentationActionT extends Action {
  readonly type: ActionTypes.EXIT_PRESENTATION;
}

export const actionCreators = {
  startPresentation: (id: string) => ({ type: ActionTypes.START_PRESENTATION, id }) as StartPresentationActionT,
  exitPresentation: () => ({ type: ActionTypes.EXIT_PRESENTATION }) as ExitPresentationActionT,
};

export type ActionsT
  = StartPresentationActionT
  | ExitPresentationActionT;