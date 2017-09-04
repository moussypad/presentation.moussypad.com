import { ActionsT, ActionTypes } from './player.actions';

export type PlayerStateT = {
  id: string | null;
  isPlaying: boolean;
  isReactionFlowsActive: boolean;
};

const init: PlayerStateT = {
  id: null,
  isPlaying: false,
  isReactionFlowsActive: false
};

export function playerReducer(state: PlayerStateT = init, action: ActionsT): PlayerStateT {
  switch (action.type) {
    case ActionTypes.START_PRESENTATION:
      return { ...state, id: action.id, isPlaying: true };
    case ActionTypes.EXIT_PRESENTATION:
      return { ...state, isPlaying: false };
    case ActionTypes.ACTIVATE_REACTIONFLOWS:
      return { ...state, isReactionFlowsActive: true };
      case ActionTypes.DEACTIVATE_REACTIONFLOWS:
      return { ...state, isReactionFlowsActive: false };
    default:
      return state;
  }
}