import { combineReducers } from 'redux';
import { ApolloStore } from 'react-apollo';
import { client } from './apolloClient';
import { guardReducer, GuardStateT } from '../modules/guard/reduxConnect';
import { presentationSuiteReducer, PresentationSuiteStateT } from '../modules/presentations/reduxConnect';

export type RootStateT = {
  guard: GuardStateT
  presentationSuite: PresentationSuiteStateT
  apollo: ApolloStore
};

export const appReducer = combineReducers<RootStateT>({
  guard: guardReducer,
  presentationSuite: presentationSuiteReducer,
  apollo: client.reducer()
});