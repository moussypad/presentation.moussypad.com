import { combineReducers } from 'redux';
import { AuthStateT, authReducer } from '../modules/auth/reduxConnect';

export type RootStateT = {
  auth: AuthStateT
  // presentationState: PresentationStateT
  // apollo: ApolloStore
};

export const appReducer = combineReducers<RootStateT>({
  auth: authReducer
});