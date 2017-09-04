import { Action } from 'redux';

export enum ActionTypes {
  START_PRESENTATION = 'START_PRESENTATION',
  EXIT_PRESENTATION = 'EXIT_PRESENTATION',
  ACTIVATE_REACTIONFLOWS = 'ACTIVATE_REACTIONFLOWS',
  DEACTIVATE_REACTIONFLOWS = 'DEACTIVATE_REACTIONFLOWS'
}

export interface StartPresentationActionT extends Action {
  readonly type: ActionTypes.START_PRESENTATION;
  id: string;
}

export interface ExitPresentationActionT extends Action {
  readonly type: ActionTypes.EXIT_PRESENTATION;
}

export interface ActivateReactionFlowActionT extends Action {
  readonly type: ActionTypes.ACTIVATE_REACTIONFLOWS;
}

export interface DeactivateReactionFlowActionT extends Action {
  readonly type: ActionTypes.DEACTIVATE_REACTIONFLOWS;
}

export const actionCreators = {
  startPresentation: (id: string) => ({ type: ActionTypes.START_PRESENTATION, id }) as StartPresentationActionT,
  exitPresentation: () => ({ type: ActionTypes.EXIT_PRESENTATION }) as ExitPresentationActionT,
  activateReactionFlows: () => ({ type: ActionTypes.ACTIVATE_REACTIONFLOWS }) as ActivateReactionFlowActionT,
  deactivateReactionFlows: () => ({ type: ActionTypes.DEACTIVATE_REACTIONFLOWS }) as DeactivateReactionFlowActionT,
};

export type ActionsT
  = StartPresentationActionT
  | ExitPresentationActionT
  | ActivateReactionFlowActionT
  | DeactivateReactionFlowActionT;