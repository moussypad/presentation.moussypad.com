import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import GuardRoute from './modules/guard/GuardRoute';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <GuardRoute exact path="/" inverse component={Home} redirect="/dashboard" />
          <GuardRoute exact path="/dashboard" component={Dashboard} redirect="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
