import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// Redux
import { store } from './rootRedux/store';

// Apollo
import { ApolloProvider } from 'react-apollo';
import { client } from './rootRedux/apolloClient';

const RootRender = () => (
  <ApolloProvider store={store} client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(
  <RootRender />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
