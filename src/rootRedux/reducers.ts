import { combineReducers } from 'redux';
import { guardReducer, GuardStateT } from '../modules/guard/reduxConnect';
import { presentationSuiteReducer, PresentationSuiteStateT } from '../modules/presentations/reduxConnect';

export type RootStateT = {
  guard: GuardStateT
  presentationSuite: PresentationSuiteStateT
  // apollo: ApolloStore
};

export const appReducer = combineReducers<RootStateT>({
  guard: guardReducer,
  presentationSuite: presentationSuiteReducer
});