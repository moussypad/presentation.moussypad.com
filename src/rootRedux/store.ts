import { createStore, applyMiddleware, compose } from 'redux';
// import { ApolloClient, ApolloStore, createNetworkInterface } from 'react-apollo';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root.sagas';
import { appReducer } from './root.reducers';
import { client } from './apolloClient';

const sagaMiddleware = createSagaMiddleware();

// tslint:disable-next-line:no-string-literal
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

export const store = createStore(
  appReducer,
  {}, // initialState,
  composeEnhancers(
    applyMiddleware(client.middleware(), sagaMiddleware),
  ),
);

sagaMiddleware.run(rootSaga);