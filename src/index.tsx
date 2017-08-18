import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// Redux
import { Provider } from 'react-redux';
import { store } from './store';

const RootRender = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <RootRender />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
