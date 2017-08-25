/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import * as React from 'react';
import { Provider } from 'react-redux';
import { configure, addDecorator } from '@storybook/react';
import { store } from '../src/rootRedux/store';

const req = require.context('../src', true, /\.stories\.tsx$/)

addDecorator(story => (
  <Provider store={store}>
    <div style={{ width: '100%', height: '100%', backgroundColor: '#F1F1F1'}}>
      {story()}
    </div>
  </Provider>
));

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);