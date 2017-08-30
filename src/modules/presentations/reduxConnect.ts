import { combineReducers } from 'redux';
import { presentationsReducer, PresentationsStateT } from './private/redux/presentations.reducers';
import { playerReducer, PlayerStateT } from './private/redux/player.reducers';
export { watchLoadPresentations } from './private/redux/presentations.sagas';

export type PresentationSuiteStateT = {
  presentationsState: PresentationsStateT,
  playerState: PlayerStateT  
};

export const presentationSuiteReducer = combineReducers({
  presentationsState: presentationsReducer,
  playerState: playerReducer
});

export { RootStateT } from '../../rootRedux/root.reducers';