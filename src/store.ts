import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootRedux/sagas';
import { appReducer } from './rootRedux/reducers';
export { RootStateT } from './rootRedux/reducers';

const sagaMiddleware = createSagaMiddleware();

// tslint:disable-next-line:no-string-literal
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
export const store = createStore(
  appReducer,
  // initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);