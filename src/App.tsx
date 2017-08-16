import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';

// const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
