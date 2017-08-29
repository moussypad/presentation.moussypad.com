import { ActionsT, ActionTypes } from './player.actions';

export type PlayerStateT = {
  id: string | null,
  isPlaying: boolean
};

export function playerReducer(state: PlayerStateT = { id: null, isPlaying: false }, action: ActionsT): PlayerStateT {
  switch (action.type) {
    case ActionTypes.START_PRESENTATION:
      return { id: action.id, isPlaying: true };
    case ActionTypes.EXIT_PRESENTATION:
      return { ...state, isPlaying: false };
    default:
      return state;
  }
}