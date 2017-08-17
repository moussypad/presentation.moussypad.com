import { combineReducers, createStore } from 'redux';
import { AuthStateT, authReducer } from './modules/auth/store';

export type AppStateT = {
  auth: AuthStateT
  // presentationState: PresentationStateT
  // apollo: ApolloStore
};

const appReducer = combineReducers<AppStateT>({
  auth: authReducer
});

// export const store = createStore(appReducer);

// tslint:disable-next-line:no-string-literal
const enhancer = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;
export const store = enhancer(appReducer);