import { combineReducers } from 'redux';
import { guardReducer, GuardStateT } from '../modules/guard/reduxConnect';
import { presentationsReducer, PresentationsStateT } from '../modules/presentations/reduxConnect';

export type RootStateT = {
  guard: GuardStateT
  presentations: PresentationsStateT
  // apollo: ApolloStore
};

export const appReducer = combineReducers<RootStateT>({
  guard: guardReducer,
  presentations: presentationsReducer
});