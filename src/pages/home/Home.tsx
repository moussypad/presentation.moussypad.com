import * as React from 'react';
import './private/Home.css';

import LoginButton from '../../modules/auth/login/LoginButton';

const logo = require('./private/logo.svg');

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <LoginButton />
      </div>
    );
  }
}

export default Home;