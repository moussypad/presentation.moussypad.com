import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import { appReducer } from './reducers';
export { RootStateT } from './reducers';

const sagaMiddleware = createSagaMiddleware();

// tslint:disable-next-line:no-string-literal
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
export const store = createStore(
  appReducer,
  // initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);